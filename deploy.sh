#!/bin/bash

echo "🚀 Deploying Portfolio Pro to production..."

# Build all applications
echo "📦 Building applications..."
npm run build

# Deploy frontend to Vercel
echo "🌐 Deploying frontend to Vercel..."
cd apps/web
npx vercel --prod
cd ../..

# Deploy API to Railway
echo "🔧 Deploying API to Railway..."
cd apps/api
railway up
cd ../..

echo "✅ Deployment complete!"
echo "Frontend: Check Vercel dashboard for URL"
echo "API: Check Railway dashboard for URL"