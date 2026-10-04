import InnerPage from '../components/inner-page';
import { noIndexMetadata } from '../lib/seo';

export const metadata = noIndexMetadata('Blog Two', '/blog-two');

export default function BlogTwoPage() {
  return <InnerPage title="Blog Two" eyebrow="Latest Blog" description="A second blog layout for AI automation insights, product thinking, and operational playbooks." />;
}
