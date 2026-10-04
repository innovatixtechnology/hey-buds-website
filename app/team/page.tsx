import { TeamTemplatePage } from '../components/template-pages';
import { JsonLd } from '../components/json-ld';
import { breadcrumbJsonLd, pageMetadata } from '../lib/seo';

export const metadata = pageMetadata({
  title: 'Our Team – Meet the Founders',
  description:
    'Meet Yash Choudhary, Aashish Kumar and Vishal Patil, the founders building Hey Buds AI employees for sales, support and customer automation.',
  path: '/team',
});

export default function TeamPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Team', path: '/team' }])} />
      <TeamTemplatePage />
    </>
  );
}
