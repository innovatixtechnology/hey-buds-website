import { BlogTemplatePage } from '../components/template-pages';
import { JsonLd } from '../components/json-ld';
import { breadcrumbJsonLd, pageMetadata } from '../lib/seo';

export const metadata = pageMetadata({
  title: 'Blog – AI Employees & WhatsApp Automation',
  description:
    'Guides on AI employees, WhatsApp automation, lead qualification and AI customer support for growing businesses, from the Hey Buds team.',
  path: '/blog',
});

export default function BlogPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Blog', path: '/blog' }])} />
      <BlogTemplatePage />
    </>
  );
}
