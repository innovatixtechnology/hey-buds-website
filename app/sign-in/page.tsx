import InnerPage from '../components/inner-page';
import { noIndexMetadata } from '../lib/seo';

export const metadata = noIndexMetadata('Sign In', '/sign-in');

export default function SignInPage() {
  return <InnerPage title="Sign In" eyebrow="Account" description="Access your HeyBuds account workspace and continue managing your AI automation setup." />;
}
