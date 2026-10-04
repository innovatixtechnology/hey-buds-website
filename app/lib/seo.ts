import type { Metadata } from 'next';
import { faqs, plans } from '../data/site-content';

export const siteUrl = 'https://www.heybuds.in';
export const siteName = 'Hey Buds';
export const siteTagline = 'AI Employees for WhatsApp, Sales & Support';
export const siteDescription =
  'Hey Buds builds AI employees that answer customers, qualify leads and book appointments 24/7 on WhatsApp, Instagram and your website. Start free.';

export const contact = {
  email: 'info@heybuds.in',
  phone: '+91-97634-10681',
  city: 'Pune',
  region: 'Maharashtra',
  country: 'IN',
};

export const socialProfiles = ['https://www.instagram.com/heybuds.ai'];

// Served by app/opengraph-image.tsx. Set explicitly because a page-level openGraph
// object stops the file-based image from being inherited.
export const shareImage = { url: '/opengraph-image', width: 1200, height: 630, alt: 'Hey Buds – AI Employees for WhatsApp, Sales & Support' };

const founders = [
  { name: 'Yash Choudhary', jobTitle: 'Founder', sameAs: ['https://www.linkedin.com/in/yash-choudhary12/'] },
  { name: 'Aashish Kumar', jobTitle: 'Co-Founder', sameAs: ['https://www.linkedin.com/in/aashish-kumar-iiit/'] },
  { name: 'Vishal Patil', jobTitle: 'Co-Founder', sameAs: ['https://www.linkedin.com/in/vishal-g-patil/'] },
];

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  /** Use the title as-is instead of appending "| Hey Buds". */
  absoluteTitle?: boolean;
  type?: 'website' | 'article';
  publishedTime?: string;
};

// A page-level `openGraph` object replaces the layout's one rather than merging,
// so every page goes through this helper to keep siteName/locale/url consistent.
export function pageMetadata({ title, description, path, absoluteTitle = false, type = 'website', publishedTime }: PageMetadataInput): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${siteName}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      url: path,
      siteName,
      locale: 'en_IN',
      title: fullTitle,
      description,
      images: [shareImage],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [shareImage.url],
    },
  };
}

// Template pages with placeholder content: keep them reachable but out of the index
// so they don't compete with the real pages or dilute the site's topical focus.
export function noIndexMetadata(title: string, path: string): Metadata {
  return {
    title,
    alternates: { canonical: path },
    robots: { index: false, follow: true },
  };
}

const organizationId = `${siteUrl}/#organization`;

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': organizationId,
  name: siteName,
  alternateName: ['HeyBuds', 'Hey Buds AI', 'heybuds.in'],
  url: siteUrl,
  logo: `${siteUrl}/assets/images/heybuds/favicon.png`,
  image: `${siteUrl}/assets/images/heybuds/logo-wordmark.png`,
  description: siteDescription,
  email: contact.email,
  telephone: contact.phone,
  address: {
    '@type': 'PostalAddress',
    addressLocality: contact.city,
    addressRegion: contact.region,
    addressCountry: contact.country,
  },
  areaServed: 'IN',
  knowsAbout: ['AI employees', 'WhatsApp automation', 'AI customer support', 'AI sales agents', 'Appointment booking automation', 'Lead qualification'],
  founder: founders.map((person) => ({ '@type': 'Person', ...person })),
  sameAs: socialProfiles,
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    email: contact.email,
    telephone: contact.phone,
    areaServed: 'IN',
  },
};

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  name: siteName,
  alternateName: ['HeyBuds', 'heybuds.in'],
  url: siteUrl,
  inLanguage: 'en-IN',
  publisher: { '@id': organizationId },
};

const parsePrice = (price: string) => price.replace(/[^\d.]/g, '');

export const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: `${siteName} AI Employee`,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web, WhatsApp, Instagram',
  description: siteDescription,
  url: siteUrl,
  publisher: { '@id': organizationId },
  offers: plans
    .filter((plan) => parsePrice(plan.price))
    .map((plan) => ({
      '@type': 'Offer',
      name: plan.name.charAt(0) + plan.name.slice(1).toLowerCase(),
      price: parsePrice(plan.price),
      priceCurrency: 'INR',
      url: `${siteUrl}/#pricing`,
    })),
};

export const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Home', path: '/' }, ...items].map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}
