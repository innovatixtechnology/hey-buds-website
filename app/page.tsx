import fs from 'node:fs';
import path from 'node:path';
import Script from 'next/script';

const templatePath = path.join(process.cwd(), 'public', 'heybuds-template.html');

function getTemplateBody() {
  const html = fs.readFileSync(templatePath, 'utf8');
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const body = bodyMatch?.[1] ?? '';

  return body.replace(/<script\b[\s\S]*?<\/script>/gi, '');
}

const vendorScripts = [
  '/assets/js/plugins/jquery.min.js',
  '/assets/js/plugins/three.min.js',
  '/assets/js/plugins/bootstrap.min.js',
  '/assets/js/plugins/metismenu.js',
  '/assets/js/vendor/waypoint.js',
  '/assets/js/plugins/swiper.js',
  '/assets/js/plugins/gsap.min.js',
  '/assets/js/plugins/scrolltigger.js',
  '/assets/js/vendor/split-text.js',
  '/assets/js/plugins/smoothscroll.js',
  '/assets/js/vendor/wow.js',
  '/assets/js/plugins/counter-up.js',
  '/assets/js/plugins/magnific-popup.js',
  '/assets/js/plugins/isotop.js',
  '/assets/js/plugins/contact-form.js',
  '/assets/js/main.js',
];

export default function Home() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: getTemplateBody() }} />
      {vendorScripts.map((src) => (
        <Script key={src} src={src} strategy="afterInteractive" />
      ))}
    </>
  );
}
