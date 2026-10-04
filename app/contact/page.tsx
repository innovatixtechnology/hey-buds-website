import { ContactTemplatePage } from '../components/template-pages';
import { JsonLd } from '../components/json-ld';
import { breadcrumbJsonLd, pageMetadata } from '../lib/seo';

export const metadata = pageMetadata({
  title: 'Contact Us – Book an AI Employee Demo',
  description:
    'Talk to Hey Buds in Pune about AI automation for your business. Call +91 97634 10681 or email info@heybuds.in to book a free AI employee demo.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Contact', path: '/contact' }])} />
      <ContactTemplatePage />
    </>
  );
}
