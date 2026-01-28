# 🚀 Deployment Guide

## Quick Deploy Options

### Option 1: GitHub Pages (Frontend Only)
1. Enable GitHub Pages in repository settings
2. Push to main branch - auto-deploys via GitHub Actions
3. **Live URL**: `https://b-kibor.github.io/Prpject-One`

### Option 2: Vercel (Recommended for Frontend)
1. Connect GitHub repo to Vercel
2. Auto-deploys on push to main
3. **Command**: `npx vercel --prod`

### Option 3: Netlify (Alternative Frontend)
1. Connect GitHub repo to Netlify
2. Uses `netlify.toml` configuration
3. Auto-deploys on push

### Option 4: Railway (Full Stack)
1. Connect GitHub repo to Railway
2. Deploy API + Database together
3. **Command**: `railway up`

### Option 5: Render (Full Stack)
1. Connect GitHub repo to Render
2. Uses `render.yaml` configuration
3. Includes PostgreSQL database

## Environment Setup

### Frontend (.env)
```
VITE_API_URL=https://your-api-domain.com
```

### Backend (.env)
```
NODE_ENV=production
JWT_SECRET=your-secret-key
DATABASE_URL=postgresql://...
REDIS_URL=redis://...
```

## Manual Deployment

```bash
# Make script executable
chmod +x deploy.sh

# Run deployment
./deploy.sh
```

## Live URLs
- **Frontend**: Will be available after deployment
- **API**: Will be available after backend deployment
- **Docs**: Available in repository