import InnerPage from '../components/inner-page';
import { noIndexMetadata } from '../lib/seo';

export const metadata = noIndexMetadata('Gallery', '/gallery');

export default function GalleryPage() {
  return <InnerPage title="Gallery" eyebrow="Gallery" description="Browse product visuals, support dashboards, AI employee flows, and AI automation interface examples." />;
}
