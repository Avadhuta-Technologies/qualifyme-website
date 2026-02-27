# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

QualifyMe is a static website for an AI-driven hiring assistant platform built with **Astro** and **Tailwind CSS**. The site features marketing pages, a blog system with Decap CMS integration, and several API endpoints for contact forms and resource management. It's deployed on Vercel.

## Tech Stack

- **Framework**: Astro 5.1.3 (static site generation)
- **Styling**: Tailwind CSS 4.0 (with @tailwindcss/vite)
- **CMS**: Decap CMS (formerly Netlify CMS) for blog content management
- **Icons**: Lucide Astro + Iconify (Unicons via CDN)
- **Email**: Nodemailer with Gmail SMTP for contact form submissions
- **Hosting**: Vercel with @astrojs/vercel adapter
- **Content**: Astro Content Collections for blog posts

## Commands

All commands run from the project root:

```bash
npm run dev           # Start local dev server at localhost:3000
npm run build         # Build for production to ./dist/
npm run preview       # Preview production build locally
npm run astro ...     # Run Astro CLI commands directly
```

## Project Structure

```
src/
├── components/          # Reusable Astro components
│   ├── AppHeader.astro     # Navigation header with dynamic menu
│   ├── AppFooter.astro     # Footer
│   ├── HeroSection.astro   # Homepage hero
│   ├── Features.astro      # Feature showcase section
│   ├── Blog.astro          # Blog listing display
│   ├── BlogCard.astro      # Individual blog post card
│   ├── BlogFilters.astro   # Blog filtering UI
│   ├── Testimonials.astro  # Testimonials section
│   ├── Stats.astro         # Statistics display
│   ├── CallToAction.astro  # CTA components
│   └── Container.astro     # Layout wrapper
│
├── layouts/
│   └── Layout.astro        # Master layout with SEO metadata props
│
├── pages/                  # Astro file-based routing (becomes URLs)
│   ├── index.astro         # Homepage
│   ├── features.astro      # Features page
│   ├── how-it-works.astro  # How it works page
│   ├── pricing.astro       # Pricing page
│   ├── contact.astro       # Contact page
│   ├── privacy.astro       # Privacy policy (noindex: true)
│   ├── refund.astro        # Refund policy (noindex: true)
│   ├── 404.astro           # 404 error page
│   │
│   ├── api/
│   │   ├── contact.ts      # POST /api/contact - Email form submissions via Gmail SMTP
│   │   └── resources.ts    # GET /api/resources - Returns array of resource articles
│   │
│   ├── resources/
│   │   ├── blog/
│   │   │   ├── index.astro     # /resources/blog - Blog listing with search/filter
│   │   │   └── [slug].astro    # /resources/blog/:slug - Individual blog post from Content Collection
│   │   └── release-notes/
│   │       └── index.astro     # /resources/release-notes - Release notes from data file
│   │
│   └── lp/
│       └── smart-careers-page.astro  # Landing page variant
│
├── content/
│   ├── config.ts           # Content Collection schema for blog
│   └── blog/               # Markdown files for blog posts (managed by Decap CMS)
│       └── *.md            # Blog content
│
├── data/
│   ├── resources-articles.ts   # Array of resource articles for /api/resources
│   ├── release-notes.ts        # Release notes data structure
│   └── country-codes.json      # Reference data
│
├── utils/
│   ├── blog-helpers.ts         # Blog filtering, sorting, and retrieval functions
│   └── resources-helpers.ts    # Resource article parsing and management
│
└── tailus.css              # Custom CSS from Tailus theme

public/
├── admin/                  # Decap CMS interface
│   └── config.yml         # CMS config (collections, authentication, workflows)
├── images/                # Image assets (AVIF optimized)
├── favicon.ico
├── logo_white.png
├── robots.txt             # SEO: search engine directives
├── security.txt           # Security contact information
├── humans.txt             # Project credits
└── manifest.json          # PWA manifest
```

## Content Architecture

### Blog System (Astro Content Collections)

**Location**: `src/content/blog/*.md` (managed by Decap CMS)

**Schema** (defined in `src/content/config.ts`):
```typescript
{
  title: string;           // Required
  description: string;     // Required
  publishDate: date;       // Required
  category: enum[          // Required - one of:
    'AI & Technology',
    'Recruitment Tips',
    'Product Updates',
    'Industry Insights',
    'Case Studies',
    'How-To Guides'
  ];
  tags?: string[];         // Optional array
  thumbnail?: string;      // Optional image path
  author?: string;         // Optional, defaults to "QualifyMe Team"
  draft?: boolean;         // Optional, defaults to false
  featured?: boolean;      // Optional, defaults to false
}
```

**Access**:
- List page at `/resources/blog` (`src/pages/resources/blog/index.astro`)
- Individual posts at `/resources/blog/[slug]` (`src/pages/resources/blog/[slug].astro`)
- Utility functions in `src/utils/blog-helpers.ts` for filtering, sorting, and retrieval

### Release Notes (Static Data)

**Location**: `src/data/release-notes.ts`

**Usage**: Add new releases at the top of the `releaseNotes` array (most recent first). Display at `/resources/release-notes`.

### Resources Articles (S3-based)

**Location**: `src/data/resources-articles.ts`

**Usage**: Array of tutorial articles pulled from S3 storage. Exposed via `/api/resources` endpoint.

## API Endpoints

### POST /api/contact
Handles contact form submissions. Sends emails via Gmail SMTP.

**Required environment variables**:
```
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-gmail-app-password
```

See `env.example` for details.

**Request body**:
```json
{
  "name": "string",
  "email": "string",
  "phone": "string (optional)",
  "subject": "string",
  "message": "string"
}
```

### GET /api/resources
Returns the array of resource articles from `src/data/resources-articles.ts`.

## SEO & Meta Tags

All pages use the master `Layout.astro` component which provides:
- Dynamic title, description, keywords
- Open Graph (Facebook) meta tags
- Twitter Card tags
- Canonical URLs
- Structured data (Schema.org):
  - SoftwareApplication schema for QualifyMe
  - Organization schema
  - AggregateRating schema
- PWA manifest and Apple touch icons
- Performance preconnects and DNS prefetches

**Usage in pages**:
```astro
---
import Layout from "../layouts/Layout.astro";
---
<Layout
  title="Page Title"
  description="Page description"
  keywords="comma, separated, keywords"
  ogImage="/images/custom-image.avif"
  noindex={true}  // For legal pages (privacy, refund)
>
  {/* Page content */}
</Layout>
```

Legal pages (privacy.astro, refund.astro) use `noindex: true` to prevent search indexing.

## Decap CMS Configuration

**Location**: `public/admin/config.yml`

**Access**: https://qualifyme.ai/admin/ (or localhost:3000/admin/ in development)

**Collections**:
- **blog**: Maps to `src/content/blog/`, manages blog posts with fields for title, description, publishDate, category, tags, thumbnail, author, draft, featured status

The CMS requires proper GitHub authentication and backend configuration for publishing.

## Development Notes

- **Styling**: Uses Tailwind CSS v4 with custom CSS from `src/tailus.css` (Tailus theme)
- **Dark Mode**: Supported via `dark:` Tailwind prefixes
- **Icons**: Lucide Astro for component icons + Iconify Unicons via CDN for other icons
- **Routing**: File-based routing in `src/pages/` - any `.astro` or `.md` file becomes a route
- **Environment Variables**: Use `.env` file (not tracked in git). Copy from `env.example` and add Gmail credentials.
- **Build Output**: Static HTML in `./dist/` ready for Vercel deployment
- **HTML Compression**: Enabled in `astro.config.mjs` for production builds

## Common Tasks

### Add a new blog post
1. Via Decap CMS: Navigate to `/admin/` and use the CMS UI
2. Manually: Create `src/content/blog/my-post.md` with required frontmatter matching the schema
3. Ensure `draft: false` and `publishDate` are set correctly

### Update release notes
Edit `src/data/release-notes.ts` - add new release object at top of array with version, date, highlights, features, improvements, bugFixes.

### Update navigation menu
Edit `src/components/AppHeader.astro` - modify the navigation links array.

### Update footer
Edit `src/components/AppFooter.astro`.

### Add a new marketing page
1. Create file in `src/pages/` (e.g., `src/pages/my-page.astro`)
2. Import and use `Layout` component
3. Route is automatically `/my-page`

### Test contact form locally
1. Set `.env` with Gmail credentials
2. Run `npm run dev`
3. Submit form at `/contact`
4. Check console and email inbox for results

## Key Design Decisions

1. **Static Site Generation**: Astro generates static HTML for fast performance and simple hosting on Vercel.
2. **Content Collections**: Blog posts use Astro's Content Collections API for type-safe content management and Decap CMS integration.
3. **Gmail SMTP**: Contact form uses Gmail for email delivery (requires app-specific password, not regular password).
4. **Tailus Theme**: Provides pre-built component styles and patterns via CSS framework.
5. **Vercel Deployment**: Uses `@astrojs/vercel` adapter for seamless deployment (no server needed since it's static).

## Performance & Accessibility

- Image optimization via AVIF format (`/images/*.avif`)
- DNS prefetch and preconnect for external resources
- Critical resource preloading
- HTML compression enabled
- Iconify CDN for on-demand icon loading
- Semantic HTML structure throughout
