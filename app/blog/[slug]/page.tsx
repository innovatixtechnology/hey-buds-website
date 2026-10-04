import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { blogs } from '../../data/site-content';
import { BlogArticleTemplatePage } from '../../components/template-pages';
import { JsonLd } from '../../components/json-ld';
import { breadcrumbJsonLd, pageMetadata, siteName, siteUrl } from '../../lib/seo';

type BlogArticlePageProps = {
  params: Promise<{ slug: string }>;
};

// Post dates are stored as "10, March, 2026".
const toIsoDate = (date: string) => new Date(date.replace(/,/g, '')).toISOString();

export function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogs.find((blog) => blog.slug === slug);

  if (!post) {
    return {
      title: 'Blog',
    };
  }

  return pageMetadata({
    title: post.title,
    description: post.desc,
    path: `/blog/${post.slug}`,
    type: 'article',
    publishedTime: toIsoDate(post.date),
  });
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const post = blogs.find((blog) => blog.slug === slug);

  if (!post) {
    notFound();
  }

  const path = `/blog/${post.slug}`;
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.desc,
    image: `${siteUrl}/assets/images/blog/${post.image}`,
    datePublished: toIsoDate(post.date),
    mainEntityOfPage: `${siteUrl}${path}`,
    author: { '@type': 'Organization', name: siteName, url: siteUrl },
    publisher: { '@id': `${siteUrl}/#organization` },
  };

  return (
    <>
      <JsonLd
        data={[
          articleJsonLd,
          breadcrumbJsonLd([
            { name: 'Blog', path: '/blog' },
            { name: post.title, path },
          ]),
        ]}
      />
      <BlogArticleTemplatePage post={post} />
    </>
  );
}
