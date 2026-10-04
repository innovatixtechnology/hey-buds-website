import InnerPage from '../components/inner-page';
import { noIndexMetadata } from '../lib/seo';

export const metadata = noIndexMetadata('Pricing', '/pricing');

export default function PricingPage() {
  return <InnerPage title="Pricing" eyebrow="Our Pricing" description="Choose flexible AI automation plans for startups, growing teams, and enterprise customer operations." />;
}
