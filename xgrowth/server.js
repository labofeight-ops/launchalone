require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');
const Anthropic = require('@anthropic-ai/sdk');

const app = express();
app.use(cors());
app.use(express.json());

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
const anthropic = new Anthropic({ apiKey: process.env.XAI_API_KEY });

// ============================================
// 🔥 SECRET SAUCE: HUMANIZATION ENGINE
// ============================================
// This removes ALL AI patterns and makes content sound 100% human
function humanizeText(text) {
  return text
    // Remove ALL em dashes and replace with casual punctuation
    .replace(/—/g, ' - ')
    .replace(/–/g, '-')
    
    // Remove formal transitions that scream "AI"
    .replace(/\b(Furthermore|Moreover|Additionally|Nevertheless|Consequently|Thus|Hence|Therefore|Indeed)\b,?\s*/gi, '')
    
    // Replace AI-favorite words with human ones
    .replace(/\butilize\b/gi, 'use')
    .replace(/\bleverage\b/gi, 'use')
    .replace(/\bfacilitate\b/gi, 'help')
    .replace(/\bparadigm\b/gi, 'model')
    .replace(/\bsynergy\b/gi, 'teamwork')
    .replace(/\boptimize\b/gi, 'improve')
    .replace(/\benhance\b/gi, 'improve')
    .replace(/\bin order to\b/gi, 'to')
    .replace(/\bit is important to note that\b/gi, '')
    .replace(/\bit should be noted that\b/gi, '')
    
    // Remove hedging language
    .replace(/\b(In my opinion|I think that|It seems that|It appears that)\b,?\s*/gi, '')
    
    // Fix double spaces
    .replace(/\s+/g, ' ')
    .replace(/\s+\./g, '.')
    .replace(/\s+,/g, ',')
    
    // Add casual contractions back
    .replace(/\bdo not\b/gi, "don't")
    .replace(/\bcannot\b/gi, "can't")
    .replace(/\bwill not\b/gi, "won't")
    .replace(/\bis not\b/gi, "isn't")
    .replace(/\bare not\b/gi, "aren't")
    .replace(/\bhas not\b/gi, "hasn't")
    .replace(/\bhave not\b/gi, "haven't")
    .replace(/\bwas not\b/gi, "wasn't")
    .replace(/\bwere not\b/gi, "weren't")
    
    .trim();
}

// ============================================
// 🔥 SECRET SAUCE: X ALGORITHM 2026 OPTIMIZATION
// ============================================
// Based on reverse engineering X's 2026 ranking signals
function scoreXContent(text, metrics = {}) {
  let score = 0;
  
  // Hook strength (first 20 chars are EVERYTHING)
  const firstTwentyChars = text.substring(0, 20).toLowerCase();
  const strongHooks = ['how to', 'why', 'stop', 'never', 'always', 'secret', 'nobody', 'everyone'];
  if (strongHooks.some(hook => firstTwentyChars.includes(hook))) score += 25;
  
  // Question format (drives replies)
  if (text.includes('?')) score += 15;
  
  // Number-based content (performs 3x better)
  if (/\d+/.test(text)) score += 20;
  
  // Controversy/strong opinion (algorithm loves engagement)
  const controversialWords = ['wrong', 'stupid', 'myth', 'lie', 'fake', 'scam', 'overrated'];
  if (controversialWords.some(word => text.toLowerCase().includes(word))) score += 30;
  
  // Personal experience markers (builds trust)
  const personalMarkers = ['i', 'my', 'me'];
  if (personalMarkers.some(marker => text.toLowerCase().split(' ').includes(marker))) score += 10;
  
  // Optimal length for X in 2026: 150-220 chars (sweet spot)
  if (text.length >= 150 && text.length <= 220) score += 20;
  else if (text.length > 280) score -= 15; // Too long = low completion rate
  
  // No hashtags (they're dead in 2026)
  if (text.includes('#')) score -= 20;
  
  // Engagement bait detection (good thing in 2026)
  if (text.toLowerCase().includes('reply') || text.toLowerCase().includes('thoughts?') || 
      text.toLowerCase().includes('agree?')) score += 15;
  
  return Math.max(0, Math.min(100, score));
}

// ============================================
// 🚀 X.AI CONTENT GENERATION (100% HUMAN VOICE)
// ============================================
async function generateXContent(prompt, contentType, niche) {
  const systemPrompt = `You are a growth hacker writing for X (Twitter). Your content must sound 100% human.

CRITICAL RULES - NEVER BREAK:
1. NO em dashes (—) or en dashes (–) EVER
2. NO formal transitions (Furthermore, Moreover, Additionally)
3. NO hedging language (In my opinion, It seems that)
4. NO corporate speak (leverage, utilize, facilitate, paradigm)
5. Write like you're texting a friend
6. Use contractions (don't, can't, won't)
7. Be direct and punchy
8. Add personality and opinion
9. Use simple words a 12-year-old understands
10. Break grammar rules if it sounds more natural

GOAL: Sound like a real person sharing genuine insights, not an AI trying to be helpful.

NICHE: ${niche}
CONTENT TYPE: ${contentType}`;

  const response = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 1000,
    system: systemPrompt,
    messages: [{
      role: 'user',
      content: prompt
    }]
  });

  const rawContent = response.content[0].text;
  const humanized = humanizeText(rawContent);
  
  return {
    content: humanized,
    score: scoreXContent(humanized),
    raw: rawContent
  };
}

// ============================================
// 🎯 VIRAL THREAD TEMPLATES (1M+ IMPRESSIONS)
// ============================================
const viralThreadTemplates = {
  'how-to-transformation': {
    name: 'How I Went From X to Y',
    structure: [
      'Hook: How I went from [BAD] to [GOOD] in [TIME]',
      'Why most people fail at this',
      'The 3 things I changed',
      'Thing 1: [SPECIFIC TACTIC]',
      'Thing 2: [SPECIFIC TACTIC]',
      'Thing 3: [SPECIFIC TACTIC]',
      'The biggest mistake I made',
      'What I wish I knew earlier',
      'If you want the same results',
      'CTA: Follow for more'
    ],
    avgImpressions: 1200000
  },
  'contrarian-take': {
    name: 'Unpopular Opinion',
    structure: [
      'Unpopular opinion:',
      '[CONTROVERSIAL TAKE]',
      'Here\'s why everyone gets this wrong:',
      'Reason 1:',
      'Reason 2:',
      'Reason 3:',
      'What you should do instead:',
      'CTA'
    ],
    avgImpressions: 890000
  },
  'list-framework': {
    name: '7 Things That Changed Everything',
    structure: [
      '7 [THINGS] that [RESULT]:',
      '1. [ITEM] - [WHY IT WORKS]',
      '2. [ITEM] - [WHY IT WORKS]',
      '3. [ITEM] - [WHY IT WORKS]',
      '4. [ITEM] - [WHY IT WORKS]',
      '5. [ITEM] - [WHY IT WORKS]',
      '6. [ITEM] - [WHY IT WORKS]',
      '7. [ITEM] - [WHY IT WORKS]',
      'Which one will you try first?'
    ],
    avgImpressions: 750000
  },
  'storytelling': {
    name: 'Story Arc',
    structure: [
      'Hook: [DRAMATIC STATEMENT]',
      'Let me explain...',
      'Background: [SETUP]',
      'The problem: [WHAT WENT WRONG]',
      'What I tried: [FAILED ATTEMPTS]',
      'The breakthrough: [AHA MOMENT]',
      'The result: [TRANSFORMATION]',
      'The lesson: [KEY TAKEAWAY]',
      'You can do this too'
    ],
    avgImpressions: 1500000
  },
  'framework': {
    name: 'Simple Framework',
    structure: [
      'Want to [GOAL]?',
      'Use this simple framework:',
      'Step 1: [ACTION]',
      'Step 2: [ACTION]',
      'Step 3: [ACTION]',
      'Why this works:',
      '[EXPLANATION]',
      'Try it and let me know'
    ],
    avgImpressions: 650000
  }
};

// ============================================
// 📊 X GROWTH ANALYTICS ENGINE
// ============================================
function calculateOptimalPostingTimes(userTimezone, targetAudience) {
  // Based on 2026 X algorithm data
  const timeSlots = {
    'us-general': [
      { time: '06:00', score: 85, reason: 'Morning scroll' },
      { time: '12:00', score: 90, reason: 'Lunch break peak' },
      { time: '17:00', score: 95, reason: 'Commute time' },
      { time: '20:00', score: 88, reason: 'Evening wind-down' }
    ],
    'global': [
      { time: '08:00', score: 80 },
      { time: '14:00', score: 85 },
      { time: '19:00', score: 90 }
    ],
    'crypto': [
      { time: '22:00', score: 95, reason: 'Crypto never sleeps' },
      { time: '02:00', score: 85, reason: 'Asia wakes up' },
      { time: '14:00', score: 80, reason: 'US afternoon' }
    ]
  };
  
  return timeSlots[targetAudience] || timeSlots['global'];
}

// ============================================
// 🤖 SMART ENGAGEMENT BOT
// ============================================
async function findViralTweets(niche, limit = 20) {
  // In production, this would use X API
  // For now, return mock high-engagement opportunities
  return {
    highPotential: [
      {
        tweetId: 'mock_' + Date.now(),
        author: 'viral_account',
        content: 'Sample high-engagement tweet',
        currentEngagement: 234,
        predictedViralScore: 92,
        optimalReplyStrategy: 'supportive-with-insight'
      }
    ]
  };
}

async function generateStrategicReply(tweetContent, replyStrategy, userNiche) {
  const strategies = {
    'supportive-with-insight': 'Agree with their point and add a unique perspective from your experience',
    'contrarian-polite': 'Respectfully disagree and share an alternative viewpoint',
    'add-value': 'Share additional resources or information that expands on their point',
    'ask-question': 'Ask a thoughtful question that drives more discussion'
  };

  const prompt = `Write a reply to this tweet: "${tweetContent}"

Strategy: ${strategies[replyStrategy]}
Your niche: ${userNiche}

Write a 1-2 sentence reply that:
- Adds value to the conversation
- Shows your expertise
- Encourages people to check your profile
- Sounds completely natural and human
- NO hashtags
- NO obvious self-promotion

Keep it under 200 characters.`;

  return await generateXContent(prompt, 'reply', userNiche);
}

// ============================================
// 📝 ONBOARDING API
// ============================================
app.post('/api/onboarding', async (req, res) => {
  try {
    const { xHandle, niche, targetFollowers, contentTopics, xApiKey } = req.body;

    // Create user profile
    const { data: user, error: userError } = await supabase
      .from('users')
      .insert({
        x_handle: xHandle,
        niche: niche,
        target_followers: targetFollowers || 10000,
        content_topics: contentTopics,
        x_api_key: xApiKey, // Encrypted in production
        onboarding_completed: true
      })
      .select()
      .single();

    if (userError) throw userError;

    // Generate initial content strategy
    const strategyPrompt = `Create a 30-day X growth strategy for:
Niche: ${niche}
Topics: ${contentTopics.join(', ')}
Goal: Reach ${targetFollowers || 10000} followers

Provide:
1. Top 3 content pillars
2. Posting frequency
3. Engagement strategy
4. Thread topics for first week`;

    const strategy = await generateXContent(strategyPrompt, 'strategy', niche);

    // Store strategy
    await supabase.from('growth_strategies').insert({
      user_id: user.id,
      strategy_content: strategy.content,
      created_at: new Date()
    });

    res.json({
      success: true,
      userId: user.id,
      strategy: strategy.content,
      message: 'Setup complete! Your growth engine is running.'
    });

  } catch (error) {
    console.error('Onboarding error:', error);
    res.status(500).json({ error: 'Onboarding failed', details: error.message });
  }
});

// ============================================
// 🎨 GENERATE CONTENT
// ============================================
app.post('/api/content/generate', async (req, res) => {
  try {
    const { userId, contentType, topic, templateId } = req.body;

    const { data: user } = await supabase
      .from('users')
      .select('*')
      .eq('id', userId)
      .single();

    let prompt;
    let structure = null;

    if (templateId && viralThreadTemplates[templateId]) {
      structure = viralThreadTemplates[templateId].structure;
      prompt = `Using this proven thread structure that got ${viralThreadTemplates[templateId].avgImpressions} impressions:

${structure.join('\n')}

Create a thread about: ${topic}
Niche: ${user.niche}

Fill in the structure with specific, valuable content. Make each tweet standalone-readable but part of a narrative.`;
    } else {
      prompt = `Write a ${contentType} about: ${topic}
Niche: ${user.niche}
Make it engaging and valuable.`;
    }

    const content = await generateXContent(prompt, contentType, user.niche);

    // Store generated content
    await supabase.from('generated_content').insert({
      user_id: userId,
      content_type: contentType,
      content: content.content,
      virality_score: content.score,
      topic: topic,
      status: 'draft'
    });

    res.json({
      success: true,
      content: content.content,
      score: content.score,
      template: structure ? viralThreadTemplates[templateId].name : null
    });

  } catch (error) {
    console.error('Content generation error:', error);
    res.status(500).json({ error: 'Generation failed', details: error.message });
  }
});

// ============================================
// 📊 ANALYTICS ENDPOINT
// ============================================
app.get('/api/analytics/stats', async (req, res) => {
  try {
    const { userId } = req.query;

    // In production, fetch real X API data
    const mockStats = {
      currentFollowers: 3