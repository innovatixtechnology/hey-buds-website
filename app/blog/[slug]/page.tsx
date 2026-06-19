import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { blogs } from '../../data/site-content';
import { BlogArticleTemplatePage } from '../../components/template-pages';

type BlogArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogs.find((blog) => blog.slug === slug);

  if (!post) {
    return {
      title: 'Blog | HeyBuds',
    };
  }

  return {
    title: `${post.title} | HeyBuds`,
    description: post.desc,
  };
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const post = blogs.find((blog) => blog.slug === slug);

  if (!post) {
    notFound();
  }

  return <BlogArticleTemplatePage post={post} />;
}
