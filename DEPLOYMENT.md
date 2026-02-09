# 🚀 LaunchAlone - Deployment Guide

Deploy LaunchAlone to production in under 10 minutes.

---

## 📋 Prerequisites

- [ ] LaunchAlone working locally (see SETUP-GUIDE.md)
- [ ] GitHub account
- [ ] Railway account (for backend) - FREE
- [ ] Vercel account (for frontend) - FREE

---

## 🎯 Deployment Steps

### Step 1: Push to GitHub (2 minutes)

1. **Create a new repository on GitHub:**
   - Go to https://github.com/new
   - Repository name: `launchalone`
   - Make it **Private** (recommended)
   - Don't initialize with README
   - Click "Create repository"

2. **Push your code:**
   ```bash
   cd /path/to/launchalone
   git init
   git add .
   git commit -m "Initial commit - LaunchAlone Ultra"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/launchalone.git
   git push -u origin main
   ```

**IMPORTANT:** Your `.env` file will NOT be pushed (it's in `.gitignore`). This is correct and keeps your API keys safe.

---

### Step 2: Deploy Backend to Railway (3 minutes)

**Railway** is a platform that runs your backend 24/7. Free tier includes 500 hours/month.

1. **Sign up for Railway:**
   - Go to https://railway.app
   - Click "Login with GitHub"
   - Authorize Railway

2. **Create new project:**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your `launchalone` repository
   - Railway will detect Node.js automatically

3. **Add environment variables:**
   - Click on your project
   - Click "Variables" tab
   - Add these variables (same as your `.env`):
     ```
     XAI_API_KEY=your_xai_key
     SUPABASE_URL=your_supabase_url
     SUPABASE_KEY=your_supabase_key
     PORT=3001
     NODE_ENV=production
     ```

4. **Configure start command:**
   - Click "Settings" tab
   - Find "Start Command"
   - Set to: `npm start`
   - Click "Save"

5. **Deploy:**
   - Click "Deploy"
   - Wait 2-3 minutes
   - You'll get a URL like: `https://launchalone-production-xxxx.up.railway.app`

6. **Test your backend:**
   - Open: `https://your-railway-url.up.railway.app/api/health`
   - You should see: `{"status":"online",...}`

**Save your Railway URL** - you'll need it for the frontend.

---

### Step 3: Deploy Frontend to Vercel (3 minutes)

**Vercel** is a platform made for Next.js. Free tier is generous.

1. **Sign up for Vercel:**
   - Go to https://vercel.com
   - Click "Sign Up"
   - Choose "Continue with GitHub"

2. **Import your repository:**
   - Click "Add New Project"
   - Select your `launchalone` repository
   - Vercel will detect Next.js automatically

3. **Configure project:**
   - Root Directory: `growth-engine-landing-page`
   - Framework Preset: Next.js (auto-detected)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)

4. **Add environment variable:**
   - Click "Environment Variables"
   - Add:
     ```
     Name: NEXT_PUBLIC_API_URL
     Value: https://your-railway-url.up.railway.app
     ```
   - Click "Add"

5. **Deploy:**
   - Click "Deploy"
   - Wait 2-3 minutes
   - You'll get a URL like: `https://launchalone.vercel.app`

---

### Step 4: Update Frontend API Calls (2 minutes)

Your frontend needs to know where your backend is.

1. **Create API config file:**
   ```bash
   cd growth-engine-landing-page
   ```

2. **Create `lib/api.ts`:**
   ```typescript
   // Use environment variable in production, localhost in development
   export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
   ```

3. **Update dashboard to use it:**

   Edit `app/dashboard/page.tsx`, find any `fetch('http://localhost:3001/api/...` and replace with:

   ```typescript
   import { API_URL } from '@/lib/api';
   
   // Then use:
   fetch(`${API_URL}/api/endpoint`)
   ```

4. **Commit and push:**
   ```bash
   git add .
   git commit -m "Add production API configuration"
   git push
   ```

   Vercel will automatically redeploy (takes 1-2 minutes).

---

### Step 5: Test Production (1 minute)

1. **Open your Vercel URL** (e.g., `https://launchalone.vercel.app`)
2. **Click "Start Growing Now"**
3. **Enter test data and click "Get Started"**
4. **You should see** your dashboard load

If everything works: **🎉 You're live!**

---

## 🔒 Security Checklist

Before going live, verify:

- [ ] `.env` is in `.gitignore` (never committed)
- [ ] All API keys are in Railway environment variables
- [ ] GitHub repository is **Private** (if it contains any sensitive data)
- [ ] No API keys in frontend code (only in backend)
- [ ] HTTPS is enabled on both Railway and Vercel (automatic)

---

## 💰 Cost Breakdown

### Free Tier (Perfect for Starting)

**Railway:**
- 500 hours/month FREE
- $5/month after that
- Enough for 1,000+ users

**Vercel:**
- 100GB bandwidth FREE
- Unlimited deployments
- More than enough for starting

**XAI (Grok API):**
- Free tier for testing
- ~$20/month for moderate use (50-100 posts/day)
- Scales with usage

**Supabase:**
- 500MB database FREE
- 2GB bandwidth FREE
- Enough for thousands of users

**Total to start: $0-20/month** (mostly XAI costs)

### Scaling Up

When you hit 1,000+ active users:

**Railway:** ~$20/month (for always-on backend)
**Vercel:** Still free (or $20/month for Pro features)
**XAI:** ~$50-100/month (based on usage)
**Supabase:** ~$25/month (for Pro tier)

**Total at scale: $95-165/month**

---

## 📊 Monitoring & Maintenance

### Railway Dashboard

Monitor your backend:
- Go to Railway dashboard
- Click your project
- View logs, metrics, deployments
- Set up alerts for errors

### Vercel Dashboard

Monitor your frontend:
- Go to Vercel dashboard
- Click your project
- View analytics, deployments, logs
- Monitor performance

### Supabase Dashboard

Monitor your database:
- Go to Supabase dashboard
- View table sizes, queries
- Check API usage
- Monitor storage

---

## 🔄 Updating Your Deployment

### Backend Updates

1. **Make changes locally**
2. **Test locally:**
   ```bash
   npm start
   ```
3. **Commit and push:**
   ```bash
   git add .
   git commit -m "Update: [describe changes]"
   git push
   ```
4. **Railway auto-deploys** in 2-3 minutes

### Frontend Updates

1. **Make changes locally**
2. **Test locally:**
   ```bash
   cd growth-engine-landing-page
   npm run dev
   ```
3. **Commit and push:**
   ```bash
   git add .
   git commit -m "Update: [describe changes]"
   git push
   ```
4. **Vercel auto-deploys** in 1-2 minutes

---

## 🆘 Common Deployment Issues

### Backend: "Application Error"

**Problem:** Railway can't start your app

**Solutions:**
1. Check Railway logs for errors
2. Verify environment variables are set
3. Check `package.json` has correct start command
4. Make sure `backend-server-ultra.js` exists

---

### Frontend: Build Failed

**Problem:** Vercel build errors

**Solutions:**
1. Check Vercel build logs
2. Make sure `growth-engine-landing-page` is set as root directory
3. Run `npm run build` locally to test
4. Check all imports are correct

---

### API Calls Failing

**Problem:** Frontend can't reach backend

**Solutions:**
1. Check `NEXT_PUBLIC_API_URL` is set in Vercel
2. Verify Railway backend is running (check `/api/health`)
3. Check browser console for CORS errors
4. Make sure Railway URL is correct (no trailing slash)

---

### Database Connection Failed

**Problem:** Backend can't connect to Supabase

**Solutions:**
1. Check `SUPABASE_URL` and `SUPABASE_KEY` in Railway
2. Verify Supabase project is active
3. Check if IP is whitelisted (usually not needed)
4. Test connection with Supabase dashboard

---

## 📈 Scaling Tips

### When You Hit 100 Users

- [ ] Monitor Railway usage (should still be under free tier)
- [ ] Set up error tracking (e.g., Sentry)
- [ ] Add analytics (e.g., PostHog)
- [ ] Consider upgrading Supabase to Pro

### When You Hit 1,000 Users

- [ ] Upgrade Railway to Hobby plan ($5/month)
- [ ] Consider Vercel Pro ($20/month)
- [ ] Upgrade Supabase to Pro ($25/month)
- [ ] Set up CDN for static assets
- [ ] Add Redis for caching (if needed)

### When You Hit 10,000 Users

- [ ] Move to dedicated servers
- [ ] Implement load balancing
- [ ] Add monitoring and alerts
- [ ] Consider white-label version

---

## 🎓 Next Steps

After deployment:

1. **Share your link** with early users
2. **Monitor errors** in Railway/Vercel
3. **Collect feedback** and iterate
4. **Market your platform**
5. **Scale up** as you grow

---

## 📞 Deployment Support

**Stuck on deployment?**

1. Check Railway/Vercel documentation
2. Review error logs carefully
3. Email: deploy@launchalone.com
4. Include: Screenshot of error + what you've tried

Response time: 24-48 hours

---

**Congratulations on deploying LaunchAlone!** 🎉

Your X growth platform is now live and ready to help people dominate X.

🔥 **LaunchAlone - Now Live in Production**
