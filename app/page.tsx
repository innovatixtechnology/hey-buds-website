import HomePage from './components/home-page';
import { JsonLd } from './components/json-ld';
import { pageMetadata, productJsonLd, siteDescription, siteName, siteTagline, websiteJsonLd } from './lib/seo';

export const metadata = pageMetadata({
  title: `${siteName} | ${siteTagline}`,
  absoluteTitle: true,
  description: siteDescription,
  path: '/',
});

export default function Page() {
  return (
    <>
      <JsonLd data={[websiteJsonLd, productJsonLd]} />
      <HomePage />
    </>
  );
}
