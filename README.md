# 🔄 SFS Deploy Hub

Multi-repository deployment orchestration platform for SmartFlow Systems ecosystem.

## Features

- 📊 **Visual Dashboard** - Monitor deployments across 26+ repositories
- 🎯 **Content Extraction** - Extract marked sections from source files
- 🔄 **Sync Workflows** - Template-based deployment patterns
- 📈 **Analytics** - Track success rates, deployment history
- 🏥 **Health Monitoring** - Real-time repository status

## Tech Stack

**Frontend:** React 18, TypeScript, Vite, Wouter, TanStack Query, shadcn/ui  
**Backend:** Node.js, Express, TypeScript  
**Deployment:** Replit, GitHub Actions CI/CD

## Quick Start
\`\`\`bash
# Install dependencies
npm install

# Development
npm run dev

# Production build
npm run build

# Health check
curl http://localhost:5000/health
\`\`\`

## Architecture
\`\`\`
Source Repo → Extract Markers → Deploy Hub → Target Repos
                                    ↓
                            Monitor + Analytics
\`\`\`

## Deployment Templates

1. **SmartFlow Sync** - Synchronize content sections across repos
2. **Content Deploy** - Deploy specific content to selected targets
3. **Multi-Repo** - Batch deployments across repository groups

## Environment Variables
\`\`\`env
SFS_PAT=<GitHub Personal Access Token>
REPLIT_TOKEN=<Replit Deploy Token>
SFS_SYNC_URL=<Base sync endpoint>
\`\`\`

## Health Endpoint

\`GET /health\` → \`{"ok": true, "service": "sfs-deploy-hub"}\`
