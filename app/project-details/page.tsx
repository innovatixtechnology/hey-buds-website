import InnerPage from '../components/inner-page';
import { noIndexMetadata } from '../lib/seo';

export const metadata = noIndexMetadata('Project Details', '/project-details');

export default function ProjectDetailsPage() {
  return <InnerPage title="Project Details" eyebrow="Project Details" description="Review the strategy, implementation steps, and measurable outcomes behind a full AI employee rollout." />;
}
