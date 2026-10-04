import { ServiceTemplatePage } from '../components/template-pages';
import { JsonLd } from '../components/json-ld';
import { breadcrumbJsonLd, pageMetadata } from '../lib/seo';

export const metadata = pageMetadata({
  title: 'AI Sales, Support & Booking Agents',
  description:
    'AI agents for sales, customer support and appointment booking on WhatsApp, Instagram and your website. Automate business conversations 24/7 with Hey Buds.',
  path: '/services',
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Services', path: '/services' }])} />
      <ServiceTemplatePage />
    </>
  );
}
