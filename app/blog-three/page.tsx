import InnerPage from '../components/inner-page';
import { noIndexMetadata } from '../lib/seo';

export const metadata = noIndexMetadata('Blog Three', '/blog-three');

export default function BlogThreePage() {
  return <InnerPage title="Blog Three" eyebrow="Latest Blog" description="A third blog layout focused on machine learning, support strategy, and AI employee deployment lessons." />;
}
