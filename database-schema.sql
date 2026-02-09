-- LaunchAlone Database Schema for Supabase
-- Run this in your Supabase SQL Editor

-- Users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  x_handle TEXT NOT NULL UNIQUE,
  niche TEXT NOT NULL,
  target_followers INTEGER DEFAULT 10000,
  content_topics TEXT[] DEFAULT '{}',
  x_api_key TEXT, -- Encrypted in production
  created_at TIMESTAMPTZ DEFAULT NOW(),
  last_active_at TIMESTAMPTZ DEFAULT NOW()
);

-- Generated content
CREATE TABLE generated_content (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  content_type TEXT NOT NULL, -- tweet, thread, reply
  virality_score INTEGER DEFAULT 0,
  topic TEXT,
  template_id TEXT,
  status TEXT DEFAULT 'draft', -- draft, scheduled, published
  published_at TIMESTAMPTZ,
  performance_data JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Growth analytics
CREATE TABLE growth_metrics (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  followers_count INTEGER DEFAULT 0,
  following_count INTEGER DEFAULT 0,
  tweets_count INTEGER DEFAULT 0,
  engagement_rate DECIMAL(5,2) DEFAULT 0.00,
  impressions INTEGER DEFAULT 0,
  profile_visits INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, date)
);

-- Engagement opportunities (tweets to reply to)
CREATE TABLE engagement_opportunities (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  tweet_id TEXT NOT NULL,
  tweet_author TEXT,
  tweet_content TEXT NOT NULL,
  viral_score INTEGER DEFAULT 0,
  suggested_reply TEXT,
  reply_strategy TEXT,
  status TEXT DEFAULT 'pending', -- pending, replied, skipped
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Scheduled posts
CREATE TABLE scheduled_posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  content_id UUID REFERENCES generated_content(id) ON DELETE CASCADE,
  scheduled_time TIMESTAMPTZ NOT NULL,
  status TEXT DEFAULT 'scheduled', -- scheduled, posted, failed
  posted_at TIMESTAMPTZ,
  error_message TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Competitor tracking
CREATE TABLE competitors (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  x_handle TEXT NOT NULL,
  added_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, x_handle)
);

-- Competitor content (what's working for them)
CREATE TABLE competitor_content (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  competitor_id UUID REFERENCES competitors(id) ON DELETE CASCADE,
  tweet_id TEXT NOT NULL UNIQUE,
  content TEXT NOT NULL,
  likes INTEGER DEFAULT 0,
  retweets INTEGER DEFAULT 0,
  replies INTEGER DEFAULT 0,
  impressions INTEGER DEFAULT 0,
  posted_at TIMESTAMPTZ,
  scraped_at TIMESTAMPTZ DEFAULT NOW()
);

-- Viral thread templates (user favorites)
CREATE TABLE user_templates (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  template_name TEXT NOT NULL,
  template_structure JSONB NOT NULL,
  times_used INTEGER DEFAULT 0,
  avg_performance DECIMAL(5,2) DEFAULT 0.00,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for performance
CREATE INDEX idx_generated_content_user ON generated_content(user_id, created_at DESC);
CREATE INDEX idx_growth_metrics_user_date ON growth_metrics(user_id, date DESC);
CREATE INDEX idx_engagement_opps_user_status ON engagement_opportunities(user_id, status, created_at DESC);
CREATE INDEX idx_scheduled_posts_time ON scheduled_posts(scheduled_time, status);
CREATE INDEX idx_competitor_content_scraped ON competitor_content(scraped_at DESC);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE generated_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE growth_metrics ENABLE ROW LEVEL SECURITY;
ALTER TABLE engagement_opportunities ENABLE ROW LEVEL SECURITY;
ALTER TABLE scheduled_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE competitors ENABLE ROW LEVEL SECURITY;
ALTER TABLE competitor_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_templates ENABLE ROW LEVEL SECURITY;

-- RLS Policies (allow users to access only their data)
CREATE POLICY "Users can view own data" ON users FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own data" ON users FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can view own content" ON generated_content FOR ALL USING (user_id = auth.uid());
CREATE POLICY "Users can view own metrics" ON growth_metrics FOR ALL USING (user_id = auth.uid());
CREATE POLICY "Users can view own opportunities" ON engagement_opportunities FOR ALL USING (user_id = auth.uid());
CREATE POLICY "Users can view own scheduled posts" ON scheduled_posts FOR ALL USING (user_id = auth.uid());
CREATE POLICY "Users can view own competitors" ON competitors FOR ALL USING (user_id = auth.uid());
CREATE POLICY "Users can view competitor content" ON competitor_content FOR SELECT USING (
  EXISTS (
    SELECT 1 FROM competitors WHERE competitors.id = competitor_content.competitor_id AND competitors.user_id = auth.uid()
  )
);
CREATE POLICY "Users can view own templates" ON user_templates FOR ALL USING (user_id = auth.uid());

-- Function to update last_active_at
CREATE OR REPLACE FUNCTION update_last_active()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE users SET last_active_at = NOW() WHERE id = NEW.user_id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to track activity
CREATE TRIGGER update_user_activity
AFTER INSERT ON generated_content
FOR EACH ROW
EXECUTE FUNCTION update_last_active();

-- Success message
DO $$
BEGIN
  RAISE NOTICE '✅ LaunchAlone database schema created successfully!';
  RAISE NOTICE '🚀 Ready to power X growth for thousands of users';
END $$;