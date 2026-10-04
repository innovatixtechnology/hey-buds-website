import type { Metadata, Viewport } from 'next';
import './globals.css';
import { JsonLd } from './components/json-ld';
import { organizationJsonLd, shareImage, siteDescription, siteName, siteTagline, siteUrl } from './lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | ${siteTagline}`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: 'technology',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  openGraph: {
    type: 'website',
    siteName,
    locale: 'en_IN',
    title: `${siteName} | ${siteTagline}`,
    description: siteDescription,
    images: [shareImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteName} | ${siteTagline}`,
    description: siteDescription,
    images: [shareImage.url],
  },
  icons: {
    icon: '/assets/images/heybuds/favicon.png',
    apple: '/assets/images/heybuds/favicon.png',
  },
  // Paste the token from Google Search Console / Bing Webmaster Tools here once the site is verified.
  // verification: { google: '', other: { 'msvalidate.01': '' } },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0c0c13',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="preload" href="/assets/css/plugins/swiper.min.css" as="style" />
        <link rel="preload" href="/assets/css/plugins/magnific-popup.css" as="style" />
        <link rel="preload" href="/assets/css/plugins/metismenu.css" as="style" />
        <link rel="preload" href="/assets/css/vendor/bootstrap.min.css" as="style" />
        <link rel="preload" href="/assets/css/vendor/animate.css" as="style" />
        <link rel="preload" href="/assets/css/plugins/fontawesome.min.css" as="style" />
        <link rel="preload" href="/assets/css/style.css" as="style" />
        <link rel="stylesheet" href="/assets/css/plugins/swiper.min.css" />
        <link rel="stylesheet" href="/assets/css/plugins/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/plugins/metismenu.css" />
        <link rel="stylesheet" href="/assets/css/vendor/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/vendor/animate.css" />
        <link rel="stylesheet" href="/assets/css/plugins/fontawesome.min.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <JsonLd data={organizationJsonLd} />
      </head>
      <body className="home-three overflow-x-visible loaded">{children}</body>
    </html>
  );
}
