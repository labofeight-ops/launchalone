# 🚀 LaunchAlone Ultra - Complete Setup Guide

**For Non-Technical Users**

This guide will walk you through setting up LaunchAlone in under 5 minutes. No coding experience needed.

---

## 📋 What You Need

Before starting, make sure you have:
- [ ] A computer (Mac or Windows)
- [ ] Internet connection
- [ ] 5 minutes of time
- [ ] An X (Twitter) account you want to grow

---

## ⚡ Quick Setup (5 Minutes)

### Step 1: Install Node.js (1 minute)

**What is Node.js?** It's software that lets LaunchAlone run on your computer.

**Mac Users:**
1. Go to https://nodejs.org
2. Click the big green "Download" button (LTS version)
3. Open the downloaded file
4. Click "Continue" → "Install" → Enter your password
5. Done!

**Windows Users:**
1. Go to https://nodejs.org
2. Click the big green "Download" button (LTS version)
3. Open the downloaded file
4. Click "Next" → "Next" → "Install"
5. Done!

**Verify it worked:**
- Open Terminal (Mac) or Command Prompt (Windows)
- Type: `node --version`
- You should see something like `v18.17.0`

---

### Step 2: Get Your API Keys (2 minutes)

You need 2 keys to make LaunchAlone work. Think of these as passwords that let LaunchAlone access the AI and database.

#### A) XAI API Key (for AI content)

1. **Go to:** https://x.ai/api
2. **Click:** "Get API Access" or "Sign Up"
3. **Create account** with your email
4. **Find your API key** - it looks like: `xai-abc123def456...`
5. **Copy it** - you'll need this in Step 4

> **Cost:** XAI offers free tier for testing. Paid tiers start around $20/month for heavy use.

#### B) Supabase Keys (for database)

1. **Go to:** https://supabase.com
2. **Click:** "Start your project" (top right)
3. **Sign up** with your email or GitHub
4. **Create new project:**
   - Project name: `launchalone` (or anything you want)
   - Database password: Make one up and save it
   - Region: Choose closest to you
   - Click "Create new project"
5. **Wait 2 minutes** while Supabase sets up
6. **Get your keys:**
   - Click "Project Settings" (gear icon, bottom left)
   - Click "API" in the menu
   - You'll see two things to copy:
     - **Project URL** - looks like: `https://abc123.supabase.co`
     - **anon public key** - long string of letters/numbers
   - Copy both, you'll need them in Step 4

> **Cost:** Supabase is FREE for up to 500MB database and 2GB bandwidth. Perfect for starting.

---

### Step 3: Setup Database (1 minute)

Now we'll create the tables LaunchAlone needs to store your content and analytics.

1. **In Supabase dashboard** (where you just were)
2. **Click:** "SQL Editor" (in left sidebar)
3. **Click:** "New query" button
4. **Open this file in a text editor:** `database-schema.sql` (in the LaunchAlone folder you downloaded)
5. **Copy ALL the text** from that file (Cmd+A or Ctrl+A, then Cmd+C or Ctrl+C)
6. **Paste it** into the Supabase SQL Editor
7. **Click:** "Run" (bottom right corner)
8. **You should see:** Green "Success" message

**If you see an error:** Make sure you copied the ENTIRE file, including the first and last lines.

---

### Step 4: Download and Setup LaunchAlone (1 minute)

#### Mac Users:

1. **Download LaunchAlone:**
   - Download this repository as a ZIP
   - Unzip it to your Desktop

2. **Open Terminal:**
   - Press Cmd+Space
   - Type "Terminal"
   - Press Enter

3. **Navigate to LaunchAlone:**
   ```bash
   cd Desktop/launchalone
   ```

4. **Install dependencies:**
   ```bash
   npm install
   ```
   (This might take 30 seconds)

5. **Setup your keys:**
   ```bash
   cp .env.example .env
   nano .env
   ```

6. **Edit the file:**
   - You'll see a text editor
   - Find these lines and replace with YOUR keys:
     ```
     XAI_API_KEY=paste_your_xai_key_here
     SUPABASE_URL=paste_your_supabase_url_here
     SUPABASE_KEY=paste_your_supabase_key_here
     ```
   - Press Ctrl+X to exit
   - Press Y to save
   - Press Enter to confirm

7. **Start the backend:**
   ```bash
   npm start
   ```

You should see:
```
🔥 LAUNCHALONE ULTRA GROWTH ENGINE 🔥
✅ Server running on port 3001
✅ XAI Grok integration: ACTIVE
✅ Supabase connection: ACTIVE
```

**Keep this window open!** The backend needs to stay running.

#### Windows Users:

1. **Download LaunchAlone:**
   - Download this repository as a ZIP
   - Unzip it to your Desktop

2. **Open Command Prompt:**
   - Press Windows key
   - Type "cmd"
   - Press Enter

3. **Navigate to LaunchAlone:**
   ```bash
   cd Desktop\launchalone
   ```

4. **Install dependencies:**
   ```bash
   npm install
   ```
   (This might take 30 seconds)

5. **Setup your keys:**
   ```bash
   copy .env.example .env
   notepad .env
   ```

6. **Edit the file:**
   - Notepad will open
   - Find these lines and replace with YOUR keys:
     ```
     XAI_API_KEY=paste_your_xai_key_here
     SUPABASE_URL=paste_your_supabase_url_here
     SUPABASE_KEY=paste_your_supabase_key_here
     ```
   - Click File → Save
   - Close Notepad

7. **Start the backend:**
   ```bash
   npm start
   ```

You should see:
```
🔥 LAUNCHALONE ULTRA GROWTH ENGINE 🔥
✅ Server running on port 3001
✅ XAI Grok integration: ACTIVE
✅ Supabase connection: ACTIVE
```

**Keep this window open!** The backend needs to stay running.

---

### Step 5: Start the Frontend (1 minute)

The frontend is the website you'll use to create content.

**Open a NEW Terminal/Command Prompt window** (keep the first one running!)

#### Mac:
```bash
cd Desktop/launchalone/growth-engine-landing-page
npm install
npm run dev
```

#### Windows:
```bash
cd Desktop\launchalone\growth-engine-landing-page
npm install
npm run dev
```

You should see:
```
> Local: http://localhost:3000
```

---

### Step 6: Start Growing! 🚀

1. **Open your browser**
2. **Go to:** http://localhost:3000
3. **You should see:** LaunchAlone landing page
4. **Click:** "Start Growing Now"
5. **Enter:**
   - Your X handle (without @)
   - Your niche (e.g., "SaaS founder", "Fitness coach", "AI developer")
   - Choose: Personal Brand or Business Brand
6. **Click:** "Get Started"

**That's it!** You're now ready to use LaunchAlone.

---

## 🎯 How to Use LaunchAlone

### Dashboard Overview

When you click "Get Started", you'll see your Growth Command Center with these sections:

1. **Content Studio** (left side)
   - Topic: What you want to post about
   - Brand Mode: Personal or Business
   - Voice Style: How you want to sound
   - Content Type: Tweet, Thread, or Reply
   - Blueprint: Optional proven templates

2. **Draft Preview** (right side)
   - Shows your AI-generated content
   - Signal Score: 0-100 (75+ = viral potential)
   - Buttons: Copy, Schedule, or Post Now

3. **Reply Opportunities**
   - Posts LaunchAlone found that are going viral
   - Reply to these for maximum reach
   - Each has a suggested reply you can edit

4. **Analytics**
   - Growth metrics
   - Before/After comparisons
   - Top performing content

### Creating Your First Post

1. **In Content Studio:**
   - Topic: "5 lessons from building on X"
   - Brand Mode: Choose yours
   - Voice: "Direct and Clear"
   - Content Type: "Single Post"
   - Click "Generate Drafts"

2. **Review the draft:**
   - Read the content
   - Check the Signal Score (aim for 75+)
   - If you like it, click "Copy"
   - If not, click "Generate Drafts" again for a new version

3. **Post it:**
   - Paste into X
   - OR click "Post Now" (if you set up X API)

### Using Reply Sniper

1. **Scroll to "Reply Opportunities"**
2. **You'll see viral posts** in your niche
3. **Each shows:**
   - The original post
   - Signal score (how viral it'll be)
   - Suggested reply
4. **Click:**
   - "Post Reply" to send it
   - "Edit" to customize first
   - "Skip" if not interested

### First 45 Minute Stack

**This is the secret sauce to 3-8x your reach!**

After you post:

1. **Minute 0:** Post at your optimal time
2. **Minute 2:** Reply to 5 posts in your niche (use Reply Sniper)
3. **Minute 15:** Ask 2-3 friends to save your post
4. **Minute 30:** Reply to every comment on your post
5. **Minute 45:** If >500 impressions, do one more engagement round

**Set a timer on your phone** and follow this EXACTLY.

---

## ❓ Common Questions

### "My content sounds like AI. How do I fix it?"

LaunchAlone's humanization is automatic, but you can improve it:

1. **Upload your writing samples:**
   - Go to dashboard
   - Click "Voice Setup"
   - Paste 5-10 of your best posts
   - LaunchAlone will learn your style

2. **Choose the right voice:**
   - "Direct and Clear" = Professional but casual
   - "Founder Story" = Personal, vulnerable
   - "Educational" = Teaching mode
   - "Calm and Confident" = Authority figure

3. **Always review before posting:**
   - AI gets you 90% there
   - You add the final 10% personality

### "How often should I post?"

**Personal Brand:** 2-3 posts per day
- 1 original post
- 1-2 replies from Reply Sniper
- Consistency > volume

**Business Brand:** 3-5 posts per day
- 2 value posts
- 1 offer post
- 2-3 strategic replies

### "What niche should I choose?"

Be SPECIFIC:
- ❌ Bad: "Marketing"
- ✅ Good: "B2B SaaS marketing for early-stage startups"

- ❌ Bad: "Fitness"
- ✅ Good: "Home workouts for busy moms"

The more specific, the better LaunchAlone can target content.

### "How do I know if it's working?"

Check these metrics weekly:

**Week 1:**
- Followers: +50-100
- Engagement rate: >2%
- Profile CTR: >1%

**Week 4:**
- Followers: +500-1000
- Engagement rate: >3%
- At least 1 post >10K impressions

**Week 12:**
- Followers: +5,000-10,000
- Consistent 50K+ weekly impressions
- Regular posts >25K impressions

### "Can I use this for multiple accounts?"

Yes! Each account needs its own:
- X handle in LaunchAlone
- Voice profile
- Content calendar

Just switch between them in the dashboard.

---

## 🔧 Troubleshooting

### Backend won't start

**Error:** `XAI API error`

**Solution:**
1. Open your `.env` file
2. Check `XAI_API_KEY` is correct
3. Make sure it starts with `xai-`
4. No extra spaces before or after
5. Save and restart: `npm start`

---

**Error:** `Supabase connection failed`

**Solution:**
1. Open your `.env` file
2. Check `SUPABASE_URL` looks like: `https://abc123.supabase.co`
3. Check `SUPABASE_KEY` is the long anon key
4. Go back to Supabase dashboard and copy them again
5. Save and restart: `npm start`

---

### Frontend shows error

**Error:** `Connection refused`

**Solution:**
1. Check backend is running (first Terminal window)
2. Should show "Server running on port 3001"
3. If not, restart it: `npm start`

---

### Content not generating

**Error:** `Content generation failed`

**Solution:**
1. Your XAI API key might be invalid
2. Go to https://x.ai/api
3. Check if key is still active
4. Generate new key if needed
5. Update `.env` file
6. Restart backend

---

### Database errors

**Error:** `Table does not exist`

**Solution:**
1. Go to Supabase dashboard
2. Click SQL Editor
3. Open `database-schema.sql` file
4. Copy ALL contents
5. Paste into SQL Editor
6. Click "Run"
7. Should see "Success"

---

## 📞 Getting Help

**Before asking for help:**
1. Read this guide again (solution is usually here)
2. Check your `.env` file (90% of issues)
3. Make sure backend is running
4. Try restarting everything

**If still stuck:**
1. Open a GitHub Issue with:
   - What you're trying to do
   - What error you see (screenshot helps)
   - Your operating system (Mac/Windows)
2. Email: support@launchalone.com
3. Include "SETUP HELP" in subject line

**Response time:** Usually within 24 hours

---

## 🎓 Next Steps

Once setup is complete:

1. **Day 1:** Create your voice profile (upload 5-10 posts)
2. **Day 2:** Generate and post 3 pieces of content
3. **Day 3:** Master Reply Sniper (reply to 10 opportunities)
4. **Day 4:** Execute First 45 Minute Stack perfectly
5. **Day 5:** Review analytics, adjust strategy
6. **Day 6-7:** Repeat and refine

**Week 2 onwards:**
- Consistent posting (2-3x daily)
- Reply strategy (10+ strategic replies daily)
- First 45 Stack on every post
- Weekly analytics review

---

## 🚀 Advanced Features

Once you're comfortable with basics:

### Competitor Analysis
1. Add competitors in dashboard
2. LaunchAlone tracks their best content
3. Shows what's working in your niche

### A/B Testing
1. Generate 3 versions of same topic
2. Post at different times
3. Track which performs best

### Voice Cloning
1. Upload 10+ posts
2. LaunchAlone creates voice profile
3. All content matches YOUR style

### Multi-Account
1. Switch between accounts in dashboard
2. Each has own voice and strategy
3. Manage all from one place

---

**Congratulations!** You're now set up and ready to dominate X.

Remember: Consistency beats perfection. Post daily, engage actively, and trust the system.

🔥 **LaunchAlone - Ultra Growth Engine**

Questions? support@launchalone.com
