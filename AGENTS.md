# AI Agent Instructions - sfs-deploy-hub

## Repository Purpose
Multi-repository deployment orchestration platform for SmartFlow Systems ecosystem. Manages content extraction, deployment workflows, and cross-repo synchronization.

## Tech Stack
- **Frontend**: React 18 + TypeScript + Vite + Wouter + TanStack Query + shadcn/ui
- **Backend**: Node.js + Express + TypeScript
- **Database**: In-memory (migration to Prisma planned)
- **Deployment**: Replit primary, GitHub Actions CI/CD

## Project Structure
\`\`\`
sfs-deploy-hub/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── pages/          # Route pages
│   │   ├── lib/            # Utilities
│   │   └── hooks/          # Custom React hooks
├── server/                 # Express backend
│   ├── src/
│   │   ├── routes/         # API endpoints
│   │   ├── services/       # Business logic
│   │   └── types/          # TypeScript types
├── .github/workflows/      # CI/CD pipelines
└── docs/                   # Documentation
\`\`\`

## Key Patterns

### Content Extraction
Source files use markers for extraction:
\`\`\`html
<!-- SF HERO START -->
<section class="hero">...</section>
<!-- SF HERO END -->
\`\`\`

### Deployment Workflow
1. Select source repository + file
2. Extract marked sections
3. Choose target repositories
4. Execute deployment
5. Monitor status + history

### API Endpoints
- \`GET /api/repositories\` - List all repos
- \`GET /api/deployments\` - Deployment history
- \`POST /api/deployments\` - Create deployment
- \`GET /api/templates\` - Deployment templates
- \`GET /health\` - Service health check

## Brand Colors
- Black: \`#0D0D0D\`
- Brown: \`#3B2F2F\`
- Gold: \`#FFD700\` (hover: \`#E6C200\`)
- Beige: \`#F5F5DC\`
- White: \`#FFFFFF\`

## Development Commands
\`\`\`bash
npm run dev          # Start dev server
npm run build        # Production build
npm run health       # Health check
npm run type-check   # TypeScript validation
\`\`\`

## CI/CD Integration
Uses shared workflow from SmartFlowSite:
\`\`\`yaml
uses: smartflow-systems/SmartFlowSite/.github/workflows/sfs-ci-deploy.yml@main
secrets:
  SFS_PAT: \${{ secrets.SFS_PAT }}
  REPLIT_TOKEN: \${{ secrets.REPLIT_TOKEN }}
\`\`\`

## Security
- All deployments require SFS_PAT authentication
- Source extraction validates marker syntax
- Target repos validated before deployment
- Deployment logs stored for audit trail

## Future Enhancements
- [ ] Prisma database integration
- [ ] Webhook-triggered deployments
- [ ] Rollback functionality
- [ ] Deployment scheduling
- [ ] Multi-user permission system
