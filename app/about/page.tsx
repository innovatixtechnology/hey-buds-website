import { AboutTemplatePage } from '../components/template-pages';
import { JsonLd } from '../components/json-ld';
import { breadcrumbJsonLd, pageMetadata } from '../lib/seo';

export const metadata = pageMetadata({
  title: 'About Us – AI Automation Startup in Pune',
  description:
    'Meet Hey Buds, the Pune-based AI startup building AI employees that help businesses answer customers, capture leads and grow through smarter conversations.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'About Us', path: '/about' }])} />
      <AboutTemplatePage />
    </>
  );
}
