import { FaqTemplatePage } from '../components/template-pages';
import { JsonLd } from '../components/json-ld';
import { breadcrumbJsonLd, faqJsonLd, pageMetadata } from '../lib/seo';

export const metadata = pageMetadata({
  title: 'AI Employee FAQs',
  description:
    'What is an AI employee, which platforms does it support and how fast can you go live? Answers to common questions about Hey Buds AI automation.',
  path: '/faq',
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={[faqJsonLd, breadcrumbJsonLd([{ name: 'FAQ', path: '/faq' }])]} />
      <FaqTemplatePage />
    </>
  );
}
