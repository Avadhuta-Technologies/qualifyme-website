import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

export type BlogPost = CollectionEntry<'blog'>;

/**
 * Get all published blog posts, sorted by publish date (newest first)
 */
export async function getAllBlogs(): Promise<BlogPost[]> {
  const allBlogs = await getCollection('blog', ({ data }) => {
    return !data.draft;
  });

  return allBlogs.sort((a, b) => {
    return b.data.publishDate.getTime() - a.data.publishDate.getTime();
  });
}

/**
 * Get all blog posts including drafts (for admin/preview purposes)
 */
export async function getAllBlogsIncludingDrafts(): Promise<BlogPost[]> {
  const allBlogs = await getCollection('blog');
  return allBlogs.sort((a, b) => {
    return b.data.publishDate.getTime() - a.data.publishDate.getTime();
  });
}

/**
 * Get a single blog post by slug
 */
export async function getBlogBySlug(slug: string): Promise<BlogPost | undefined> {
  const allBlogs = await getAllBlogsIncludingDrafts();
  return allBlogs.find((post) => post.slug === slug);
}

/**
 * Get blog posts by category
 */
export async function getBlogsByCategory(category: string): Promise<BlogPost[]> {
  const allBlogs = await getAllBlogs();
  return allBlogs.filter((post) => post.data.category === category);
}

/**
 * Get blog posts by tag
 */
export async function getBlogsByTag(tag: string): Promise<BlogPost[]> {
  const allBlogs = await getAllBlogs();
  return allBlogs.filter((post) => 
    post.data.tags && post.data.tags.includes(tag)
  );
}

/**
 * Get featured blog posts
 */
export async function getFeaturedBlogs(limit: number = 3): Promise<BlogPost[]> {
  const allBlogs = await getAllBlogs();
  return allBlogs
    .filter((post) => post.data.featured)
    .slice(0, limit);
}

/**
 * Get related blog posts (same category or shared tags)
 */
export async function getRelatedBlogs(
  currentPost: BlogPost,
  limit: number = 3
): Promise<BlogPost[]> {
  const allBlogs = await getAllBlogs();
  const related = allBlogs
    .filter((post) => {
      if (post.slug === currentPost.slug) return false;
      
      // Same category
      if (post.data.category === currentPost.data.category) return true;
      
      // Shared tags
      if (currentPost.data.tags && post.data.tags) {
        const sharedTags = currentPost.data.tags.filter((tag) =>
          post.data.tags!.includes(tag)
        );
        if (sharedTags.length > 0) return true;
      }
      
      return false;
    })
    .slice(0, limit);

  return related;
}

/**
 * Calculate estimated reading time in minutes
 * Based on average reading speed of 200 words per minute
 */
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return Math.max(1, readingTime); // Minimum 1 minute
}

/**
 * Format date consistently across the blog
 */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

/**
 * Get all unique categories from blog posts
 */
export async function getAllCategories(): Promise<string[]> {
  const allBlogs = await getAllBlogs();
  const categories = new Set(allBlogs.map((post) => post.data.category));
  return Array.from(categories).sort();
}

/**
 * Get all unique tags from blog posts
 */
export async function getAllTags(): Promise<string[]> {
  const allBlogs = await getAllBlogs();
  const tags = new Set<string>();
  
  allBlogs.forEach((post) => {
    if (post.data.tags) {
      post.data.tags.forEach((tag) => tags.add(tag));
    }
  });
  
  return Array.from(tags).sort();
}

/**
 * Get blog count by category
 */
export async function getBlogCountByCategory(): Promise<Record<string, number>> {
  const allBlogs = await getAllBlogs();
  const counts: Record<string, number> = {};
  
  allBlogs.forEach((post) => {
    const category = post.data.category;
    counts[category] = (counts[category] || 0) + 1;
  });
  
  return counts;
}

