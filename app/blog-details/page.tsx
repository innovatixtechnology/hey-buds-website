import { redirect } from 'next/navigation';
import { blogs } from '../data/site-content';

export default function BlogDetailsPage() {
  redirect(`/blog/${blogs[0].slug}`);
}
