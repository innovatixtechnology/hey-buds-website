export const asset = (path: string) => `/assets/${path}`;

export function Logo({ footer = false }: { footer?: boolean }) {
  return (
    <a href="/" className={`logo heybuds-logo${footer ? ' footer-heybuds-logo' : ''}`} aria-label="HeyBuds">
      <img className="heybuds-wordmark" src={asset('images/heybuds/logo-wordmark.png')} alt="HeyBuds" />
    </a>
  );
}

export function ArrowIcon({ white = false }: { white?: boolean }) {
  return (
    <span className="icon">
      <img src={asset(`images/icon/${white ? 'arrow-w.svg' : 'arrow.svg'}`)} alt="" />
    </span>
  );
}

export function SubTitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="sub-title">
      <img src={asset('images/icon/sub-icon.svg')} alt="" /> {children}
    </p>
  );
}
