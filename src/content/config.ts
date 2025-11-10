import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    category: z.enum([
      'AI & Technology',
      'Recruitment Tips',
      'Product Updates',
      'Industry Insights',
      'Case Studies',
      'How-To Guides'
    ]),
    tags: z.array(z.string()).optional().default([]),
    thumbnail: z.string().optional(),
    author: z.string().optional().default('QualifyMe Team'),
    draft: z.boolean().optional().default(false),
    featured: z.boolean().optional().default(false),
  }),
});

export const collections = {
  blog: blogCollection,
};

