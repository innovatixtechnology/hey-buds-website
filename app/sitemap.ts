import type { MetadataRoute } from 'next';
import { blogs } from './data/site-content';
import { siteUrl } from './lib/seo';

// Only indexable pages belong here; the noindexed template pages are left out on purpose.
export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { path: string; priority: number; changeFrequency: 'weekly' | 'monthly' }[] = [
    { path: '/', priority: 1, changeFrequency: 'weekly' },
    { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/about', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/contact', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/faq', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/team', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/blog', priority: 0.7, changeFrequency: 'weekly' },
  ];

  return [
    ...pages.map(({ path, priority, changeFrequency }) => ({
      url: `${siteUrl}${path}`,
      changeFrequency,
      priority,
    })),
    ...blogs.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date.replace(/,/g, '')),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];
}
