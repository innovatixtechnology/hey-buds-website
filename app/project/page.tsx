import InnerPage from '../components/inner-page';
import { noIndexMetadata } from '../lib/seo';

export const metadata = noIndexMetadata('Project', '/project');

export default function ProjectPage() {
  return <InnerPage title="Project" eyebrow="Projects" description="See how HeyBuds connects knowledge bases, CRMs, support desks, and websites into one smarter customer workflow." />;
}
