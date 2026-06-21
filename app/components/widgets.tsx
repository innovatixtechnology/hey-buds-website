export const asset = (path: string) => `/assets/${path}`;

export function Logo({ footer = false, src = 'images/heybuds/logo-wordmark.png', alt = 'HeyBuds' }: { footer?: boolean; src?: string; alt?: string }) {
  return (
    <a href="/" className={`logo heybuds-logo${footer ? ' footer-heybuds-logo' : ''}`} aria-label={alt}>
      <img className="heybuds-wordmark" src={asset(src)} alt={alt} />
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
