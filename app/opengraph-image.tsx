import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

export const alt = 'Hey Buds – AI Employees for WhatsApp, Sales & Support';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Shared social card for every page (WhatsApp, LinkedIn, X, Facebook previews).
export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), 'public/assets/images/heybuds/logo-wordmark.png'));
  const logoSrc = `data:image/png;base64,${logo.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: '#ffffff',
          backgroundImage: 'radial-gradient(circle at 100% 0%, rgba(126, 85, 219, 0.18), transparent 55%), radial-gradient(circle at 0% 100%, rgba(214, 91, 54, 0.16), transparent 50%)',
          color: '#0c0c13',
        }}
      >
        <img src={logoSrc} width={256} height={96} alt="" />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 84,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-2px',
              backgroundImage: 'linear-gradient(90deg, #d65b36 0%, #7e55db 52%, #1e4ec9 100%)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            AI Employees
          </div>
          <div style={{ fontSize: 60, fontWeight: 700, lineHeight: 1.1, letterSpacing: '-1px' }}>for WhatsApp, Sales & Support</div>
          <div style={{ marginTop: 28, fontSize: 30, color: '#4a4a57' }}>Reply instantly, qualify leads and book appointments 24/7.</div>
        </div>
        <div style={{ display: 'flex', fontSize: 26, color: '#4a4a57' }}>heybuds.in</div>
      </div>
    ),
    size,
  );
}
