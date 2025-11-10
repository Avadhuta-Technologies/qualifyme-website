# Blog System Implementation Plan

## Overview
This document outlines the plan for implementing a blog system in Astro that integrates with Decap CMS. The blog will be accessible at `/resources/blog` and will include categories, tags, search, and filtering capabilities.

## Current State Analysis

### Existing Setup
- ✅ Decap CMS is configured (`public/admin/config.yml`)
- ✅ Test blog file exists at `src/content/blog/qualifyme-blog-test.md`
- ✅ Resources page exists at `/resources` (currently for S3-based articles)
- ✅ Navigation structure in `AppHeader.astro` with simple links array
- ⚠️ Astro Content Collections not yet configured
- ⚠️ Decap CMS config points to `pages/resources/blog` (needs update)

### Requirements
1. Blogs accessible at `/resources/blog` URL
2. Blogs stored in `src/content/blog` folder (Astro Content Collections)
3. Blog listing page with search and filter functionality
4. Categories for organizing blogs
5. Tags for classification
6. Blog submenu under Resources in navigation
7. Integration with Decap CMS

---

## Implementation Plan

### Phase 1: Content Collection Setup

#### 1.1 Configure Astro Content Collections
- **File**: `src/content/config.ts` (new file)
- **Purpose**: Define blog collection schema with:
  - `title` (string, required)
  - `description` (string, required)
  - `publishDate` (date, required)
  - `category` (string, required) - e.g., "AI & Technology", "Recruitment Tips", "Product Updates", "Industry Insights"
  - `tags` (array of strings, optional)
  - `thumbnail` (image path, optional)
  - `author` (string, optional, default: "QualifyMe Team")
  - `draft` (boolean, optional, default: false)
  - `featured` (boolean, optional, default: false)

#### 1.2 Update Decap CMS Configuration
- **File**: `public/admin/config.yml`
- **Changes**:
  - Update `folder` path from `pages/resources/blog` to `src/content/blog`
  - Add fields for: category, tags, description, author, draft, featured
  - Configure category as select/dropdown widget
  - Configure tags as list widget
  - Update media folder paths if needed

---

### Phase 2: Blog Pages Creation

#### 2.1 Blog Listing Page
- **File**: `src/pages/resources/blog/index.astro` (new file)
- **Features**:
  - Display all published blogs in a grid layout
  - Search functionality (title, description, content)
  - Filter by category (dropdown/buttons)
  - Filter by tags (tag chips)
  - Sort options (newest first, oldest first, alphabetical)
  - Pagination (optional, if many blogs)
  - Featured blogs section at top
  - Responsive design matching existing site style

#### 2.2 Individual Blog Post Page
- **File**: `src/pages/resources/blog/[slug].astro` (new file)
- **Features**:
  - Display full blog post content
  - Blog metadata (date, author, category, tags)
  - Breadcrumb navigation (Home > Resources > Blog > Post Title)
  - Related posts section (same category or tags)
  - Social sharing buttons (optional)
  - SEO optimization (meta tags, structured data)
  - Reading time estimate
  - Previous/Next post navigation

---

### Phase 3: Navigation Updates

#### 3.1 Update AppHeader Component
- **File**: `src/components/AppHeader.astro`
- **Changes**:
  - Convert Resources link to dropdown/submenu
  - Add "Blog" as submenu item under Resources
  - Maintain existing "Resources" link (points to `/resources`)
  - Add "Blog" link (points to `/resources/blog`)
  - Ensure mobile menu supports submenu
  - Style dropdown to match site design

#### 3.2 Update Footer (Optional)
- **File**: `src/components/AppFooter.astro`
- **Changes**: Add blog link if needed

---

### Phase 4: Search & Filter Implementation

#### 4.1 Client-Side Search
- **Location**: Blog listing page
- **Functionality**:
  - Real-time search as user types
  - Search in: title, description, content, tags
  - Highlight search terms
  - Show result count
  - Clear search button

#### 4.2 Category Filtering
- **Location**: Blog listing page
- **Functionality**:
  - Category buttons/chips
  - "All" option to show all blogs
  - Active category highlighting
  - Count of blogs per category

#### 4.3 Tag Filtering
- **Location**: Blog listing page
- **Functionality**:
  - Clickable tag chips
  - Filter by single or multiple tags
  - Tag cloud or list view
  - Active tag highlighting

#### 4.4 Combined Filtering
- **Functionality**:
  - Search + category + tags work together
  - URL query parameters for shareable filtered views
  - Reset filters button

---

### Phase 5: Components & Utilities

#### 5.1 Blog Card Component
- **File**: `src/components/BlogCard.astro` (new file)
- **Purpose**: Reusable card component for blog previews
- **Props**: blog post data
- **Features**: Thumbnail, title, excerpt, date, category, tags, read more link

#### 5.2 Blog Filters Component
- **File**: `src/components/BlogFilters.astro` (new file)
- **Purpose**: Search and filter UI
- **Features**: Search input, category buttons, tag chips

#### 5.3 Blog Utilities
- **File**: `src/utils/blog-helpers.ts` (new file)
- **Functions**:
  - `getAllBlogs()` - Get all published blogs
  - `getBlogBySlug(slug)` - Get single blog
  - `getBlogsByCategory(category)` - Filter by category
  - `getBlogsByTag(tag)` - Filter by tag
  - `getRelatedBlogs(blog, limit)` - Get related posts
  - `calculateReadingTime(content)` - Estimate reading time
  - `formatDate(date)` - Format dates consistently

---

### Phase 6: SEO & Performance

#### 6.1 SEO Optimization
- Meta tags for each blog post
- Open Graph tags
- Twitter Card tags
- Structured data (Article schema)
- Canonical URLs
- Sitemap updates

#### 6.2 Performance
- Image optimization (thumbnails)
- Lazy loading for blog cards
- Code splitting
- Static generation (SSG)

---

### Phase 7: Styling & UX

#### 7.1 Design Consistency
- Match existing site design system
- Use Tailwind CSS classes
- Dark mode support
- Responsive design (mobile, tablet, desktop)

#### 7.2 User Experience
- Loading states
- Empty states (no results)
- Smooth transitions
- Accessible navigation
- Keyboard shortcuts (optional)

---

## File Structure

```
Code/
├── src/
│   ├── content/
│   │   ├── config.ts (NEW - Content collection schema)
│   │   └── blog/
│   │       ├── qualifyme-blog-test.md (EXISTING - Update schema)
│   │       └── [future-blog-posts].md
│   ├── components/
│   │   ├── AppHeader.astro (UPDATE - Add blog submenu)
│   │   ├── BlogCard.astro (NEW)
│   │   └── BlogFilters.astro (NEW)
│   ├── layouts/
│   │   └── Layout.astro (EXISTING - No changes needed)
│   ├── pages/
│   │   └── resources/
│   │       ├── blog/
│   │       │   ├── index.astro (NEW - Blog listing page)
│   │       │   └── [slug].astro (NEW - Individual blog post)
│   │       ├── [slug].astro (EXISTING - No changes)
│   │       └── resources.astro (EXISTING - No changes)
│   ├── utils/
│   │   └── blog-helpers.ts (NEW - Blog utility functions)
│   └── data/
│       └── resources-articles.ts (EXISTING - No changes)
├── public/
│   └── admin/
│       └── config.yml (UPDATE - Blog collection config)
└── astro.config.mjs (EXISTING - No changes needed)
```

---

## Category Suggestions

Based on the existing content and QualifyMe's focus:
1. **AI & Technology** - AI recruitment, technology insights
2. **Recruitment Tips** - Best practices, hiring strategies
3. **Product Updates** - New features, announcements
4. **Industry Insights** - Market trends, hiring statistics
5. **Case Studies** - Success stories, customer stories
6. **How-To Guides** - Tutorials, step-by-step guides

---

## Tag Suggestions

Common tags to use:
- `ai-recruitment`
- `hiring-automation`
- `candidate-screening`
- `interview-tips`
- `hr-technology`
- `talent-acquisition`
- `recruitment-strategy`
- `product-update`
- `best-practices`
- `industry-trends`

---

## Implementation Order

1. ✅ **Phase 1**: Content Collection Setup
2. ✅ **Phase 2**: Blog Pages Creation
3. ✅ **Phase 3**: Navigation Updates
4. ✅ **Phase 5**: Components & Utilities (in parallel with Phase 2)
5. ✅ **Phase 4**: Search & Filter Implementation
6. ✅ **Phase 6**: SEO & Performance
7. ✅ **Phase 7**: Styling & UX (throughout all phases)

---

## Testing Checklist

- [ ] Blog posts display correctly on listing page
- [ ] Individual blog post pages render properly
- [ ] Search functionality works
- [ ] Category filtering works
- [ ] Tag filtering works
- [ ] Combined filters work together
- [ ] Navigation submenu displays correctly
- [ ] Mobile responsive design
- [ ] Dark mode support
- [ ] SEO meta tags present
- [ ] Structured data valid
- [ ] Decap CMS can create/edit blogs
- [ ] Images load correctly
- [ ] Related posts display
- [ ] Breadcrumbs work
- [ ] URL structure correct (`/resources/blog` and `/resources/blog/[slug]`)

---

## Notes

- All blogs will be stored in `src/content/blog/` using Astro Content Collections
- Decap CMS will be updated to save to the correct location
- The existing test blog file will need frontmatter updates to match new schema
- Blog system will be separate from existing S3-based resources articles
- Both `/resources` (articles) and `/resources/blog` (blogs) will coexist

---

## Approval

Once approved, implementation will begin following this plan. All code will follow existing project patterns and conventions.

