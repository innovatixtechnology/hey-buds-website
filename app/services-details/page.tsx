import InnerPage from '../components/inner-page';
import { noIndexMetadata } from '../lib/seo';

export const metadata = noIndexMetadata('Services Details', '/services-details');

export default function ServicesDetailsPage() {
  return <InnerPage title="Services Details" eyebrow="Service Details" description="Explore the setup, training, routing, analytics, and escalation tools that make each AI employee deployment practical." />;
}
