# 🚀 LaunchAlone - Growth Engine Landing Page

Next.js landing page with Supabase integration, deployed on Railway at **launchalone.com**.

## ⚡ Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.local.example .env.local
# Edit .env.local with your Supabase credentials

# 3. Install Supabase
npm install @supabase/supabase-js @supabase/ssr

# 4. Run development server
npm run dev
```

Visit: http://localhost:3000

## 🔑 Get Supabase Credentials

1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Select your project → **Settings** → **API**
3. Copy these to your `.env.local`:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon/public key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## 🚂 Deploy to Railway (Fix Crashed Deployment)

### Method 1: Railway CLI
```bash
# Install and setup
npm install -g @railway/cli
railway login
railway link

# Set environment variables
railway variables set NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
railway variables set NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxx...
railway variables set NODE_ENV=production

# Deploy
railway up
```

### Method 2: Railway Dashboard
1. Go to [Railway Dashboard](https://railway.app/dashboard)
2. Find your project → **Variables** tab
3. Add:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NODE_ENV=production`
4. Go to **Deployments** → Click **Redeploy**

### Monitor Deployment
```bash
railway logs    # View logs
railway status  # Check status
```

## 🌐 Domain Setup (launchalone.com)

### In Railway:
1. Service Settings → **Domains** → **+ Custom Domain**
2. Enter: `launchalone.com`
3. Copy the DNS records shown

### At Your Domain Registrar:
Add these DNS records (Railway provides exact values):

```
Type: CNAME
Name: @
Value: [your-app].up.railway.app

Type: CNAME
Name: www
Value: [your-app].up.railway.app
```

**Note:** DNS propagation takes 30-60 minutes (up to 48 hours)

## 🛠️ Troubleshooting

### Railway Crashed?
```bash
railway logs --tail              # View detailed logs
railway variables                # Check variables are set
railway restart                  # Restart service
railway up                       # Redeploy
```

### Local Build Fails?
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Port 3000 Already in Use?
```bash
lsof -ti:3000 | xargs kill -9   # Kill process
npm run dev -- -p 3001          # Use different port
```

### Run Diagnostics
```bash
chmod +x troubleshoot.sh
./troubleshoot.sh
```

## 📦 Project Structure

```
growth-engine-landing-page/
├── app/
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page (customize this!)
│   └── globals.css        # Global styles
├── lib/
│   └── supabase.ts        # Supabase client
├── components/            # Add your components here
├── public/                # Static assets
├── .env.local            # Your secrets (create this!)
└── [config files]
```

## 🔧 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📋 Common Issues

**Environment Variables Not Working**
- Ensure `.env.local` exists (not `.env.local.example`)
- Restart dev server after changes
- Variables must start with `NEXT_PUBLIC_` for browser access

**Supabase Connection Fails**
- Verify URL starts with `https://`
- Use **anon/public** key (not service role key)
- Check credentials in Supabase dashboard

**Railway Build Fails**
- Check all dependencies are in `package.json`
- Verify environment variables are set in Railway
- Test build locally first: `npm run build`

## 🎯 Next Steps

1. ✅ Run locally with `npm run dev`
2. ✅ Customize `app/page.tsx` with your landing page design
3. ✅ Deploy to Railway
4. ✅ Configure domain DNS
5. 🎨 Build out your Supabase features (auth, database, storage)

## 📚 Documentation

- **START_HERE.md** - Detailed step-by-step setup guide
- **Next.js:** [nextjs.org/docs](https://nextjs.org/docs)
- **Supabase:** [supabase.com/docs](https://supabase.com/docs)
- **Railway:** [docs.railway.app](https://docs.railway.app)

---

Need detailed setup instructions? Check **START_HERE.md**
