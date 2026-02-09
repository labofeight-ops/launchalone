-- database-schema.sql
-- Run this in Supabase SQL Editor to set up your database

-- Users table
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    product_name TEXT NOT NULL,
    product_description TEXT NOT NULL,
    website_url TEXT NOT NULL,
    competitors TEXT[] NOT NULL,
    platforms TEXT[] NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Opportunities table (intent monitoring)
CREATE TABLE opportunities (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    platform TEXT NOT NULL,
    post_url TEXT NOT NULL,
    content TEXT NOT NULL,
    intent_score INTEGER NOT NULL CHECK (intent_score >= 0 AND intent_score <= 10),
    suggested_response TEXT NOT NULL,
    final_response TEXT,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'posted', 'skipped')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    posted_at TIMESTAMP WITH TIME ZONE
);

-- SEO Pages table
CREATE TABLE seo_pages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    slug TEXT NOT NULL,
    content TEXT NOT NULL,
    page_type TEXT NOT NULL CHECK (page_type IN ('alternative', 'comparison', 'how-to', 'guide')),
    status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'indexed')),
    visitors INTEGER DEFAULT 0,
    google_rank INTEGER,
    published_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, slug)
);

-- Activities table (engagement tracking)
CREATE TABLE activities (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    platform TEXT NOT NULL,
    activity_type TEXT NOT NULL CHECK (activity_type IN ('comment', 'post', 'reply')),
    url TEXT NOT NULL,
    content TEXT NOT NULL,
    engagement_stats JSONB DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_opportunities_user_id ON opportunities(user_id);
CREATE INDEX idx_opportunities_status ON opportunities(status);
CREATE INDEX idx_opportunities_intent_score ON opportunities(intent_score DESC);
CREATE INDEX idx_opportunities_created_at ON opportunities(created_at DESC);

CREATE INDEX idx_seo_pages_user_id ON seo_pages(user_id);
CREATE INDEX idx_seo_pages_status ON seo_pages(status);
CREATE INDEX idx_seo_pages_visitors ON seo_pages(visitors DESC);

CREATE INDEX idx_activities_user_id ON activities(user_id);
CREATE INDEX idx_activities_created_at ON activities(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE opportunities ENABLE ROW LEVEL SECURITY;
ALTER TABLE seo_pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE activities ENABLE ROW LEVEL SECURITY;

-- RLS Policies (allow all for now - you can restrict later with auth)
CREATE POLICY "Enable all operations for users" ON users FOR ALL USING (true);
CREATE POLICY "Enable all operations for opportunities" ON opportunities FOR ALL USING (true);
CREATE POLICY "Enable all operations for seo_pages" ON seo_pages FOR ALL USING (true);
CREATE POLICY "Enable all operations for activities" ON activities FOR ALL USING (true);
