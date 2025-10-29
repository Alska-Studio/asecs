# AGAPI-Svelte Quick Reference Guide

## Stack Overview
- TODO

## Goals
- TODO

## Infrastructure
- TODO

## Architecture
- TODO

## Key directories
```
├── apps/*                   -> Customers
│   └── asecs/*              -> ASECS Customer
│       ├── asecs/*          -> ASECS Frontpage App
│       └── cms/*            -> Payload CMS
├── global/*                 -> Global Logic & Infrastructure
└── packages/*               -> Workspace Packages
    ├── agapi-ui/*           -> UI/Component Library (submodule)
    └── development/*        -> Development Tools (submodules)
```

## Customers & Apps
- Location: `./apps/*`

### ASECS
- Location: `./apps/asecs/*`
- Customer: ASECS AB

#### ASECS Frontpage App
- Location: `./apps/asecs/asecs`
- Production: https://asecs.se
- Staging: https://asecs-stage.alska.cloud
- Development: https://asecs-dev.alska.cloud

#### Glimja Payload CMS App
- Location: `./apps/asecs/cms`
- Production: https://admin.asecs.se
- Staging: https://happygreen-stage.alska.cloud
- Development: https://happygreen-dev.alska.cloud

## Development Commands

### Local Development
```bash
# Install dependencies
pnpm install

# Start dev server
pnpm --filter @asecs/glimja dev

# With AWS profile
AWS_PROFILE=asecs-dev pnpm start
```

### Testing
```bash
# Type check
pnpm check

# Run tests
pnpm test

# E2E tests
pnpm --filter @asecs/asecs test:e2e
```

### Manual Deployment
```bash
# Development
pnpm run deploy:dev

# Staging
pnpm run deploy:stage

# Production
pnpm run deploy:prod:force
```

## Performance Optimizations
```
✓ Edge caching (CloudFront, 24h TTL)
✓ SSR for SEO
✓ Image optimization (dynamic sizing, lazy loading)
✓ Code splitting (route-based)
✓ Tree shaking
✓ Client-side state preservation
```
---

**Last Updated**: October 24, 2025
