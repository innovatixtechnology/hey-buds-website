import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'HeyBuds | Artificial Intelligence & Technology',
  description: 'HeyBuds AI chatbot landing page.',
  icons: {
    icon: '/assets/images/heybuds/favicon.png',
    apple: '/assets/images/heybuds/favicon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
      </head>
      <body className="home-three overflow-x-visible loaded">{children}</body>
    </html>
  );
}
