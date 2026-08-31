import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const proyectos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/proyectos' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()),
    status: z.enum(['en-desarrollo', 'completado']),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    repositoryUrl: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
    image: z.string().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()),
    draft: z.boolean().default(false),
    image: z.string().optional(),
  }),
});

export const collections = { proyectos, blog };
