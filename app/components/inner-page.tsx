'use client';

import { useState } from 'react';
import { blogMenu, homeMenu, navLinks, pagesMenu } from '../data/site-content';
import { ArrowIcon, Logo, SubTitle, asset } from './widgets';

type InnerPageProps = {
  title: string;
  eyebrow?: string;
  description?: string;
};

export default function InnerPage({ title, eyebrow = 'HeyBuds', description = 'Harness practical AI automation for faster support, smarter decisions, and cleaner customer workflows.' }: InnerPageProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="header-style-one header--sticky inner-header">
        <div className="custom-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header-style-one-wrapper">
                <div className="left-area">
                  <div className="logo-area">
                    <Logo />
                  </div>
                </div>
                <nav className="main-nav-area" aria-label="Primary">
                  <ul className="list-unstyled rts-desktop-menu">
                    <li className="menu-item rts-has-dropdown">
                      <a className="main-element rts-dropdown-main-element" href="/">
                        Home
                      </a>
                      <ul className="rts-submenu">
                        {homeMenu.map((link) => (
                          <li className="nav-item" key={link.label}>
                            <a className="nav-link" href={link.href}>
                              {link.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li className="menu-item">
                      <a className="main-element without-arrow" href="/about">
                        About
                      </a>
                    </li>
                    <li className="menu-item rts-has-dropdown">
                      <a className="main-element rts-dropdown-main-element" href="/services">
                        Pages
                      </a>
                      <ul className="rts-submenu service-mega-menu-style">
                        {pagesMenu.map((link) => (
                          <li className="nav-item" key={link.href}>
                            <a className="nav-link" href={link.href}>
                              <span>
                                <span className="title">{link.label}</span>
                                <span className="details">{link.details}</span>
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li className="menu-item rts-has-dropdown">
                      <a className="main-element rts-dropdown-main-element" href="/blog">
                        Blog
                      </a>
                      <ul className="rts-submenu">
                        {blogMenu.map((link) => (
                          <li className="nav-item" key={link.label}>
                            <a className="nav-link" href={link.href}>
                              {link.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li className="menu-item">
                      <a className="main-element without-arrow" href="/contact">
                        Contact
                      </a>
                    </li>
                  </ul>
                </nav>
                <div className="button-area-start">
                  <a href="/contact" className="rts-btn btn-primary icon-next">
                    Get In Touch
                    <ArrowIcon />
                  </a>
                  <button type="button" className="menu-btn menu-btn-toggle hamburger-open-btn radius-6" aria-label="Open mobile menu" onClick={() => setMenuOpen(true)}>
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect y="14" width="20" height="2" fill="#FFFFFF" />
                      <rect y="7" width="20" height="2" fill="#FFFFFF" />
                      <rect width="20" height="2" fill="#FFFFFF" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="rts-breadcrumb-area inner-breadcrumb">
          <div className="container">
            <div className="breadcrumb-area-wrapper">
              <h1 className="title">{title}</h1>
            </div>
            <div className="nav-bread-crumb">
              <a href="/">Home</a>
              <span>/</span>
              <span>{title}</span>
            </div>
            <div className="breadcrumb-logo">
              <Logo />
            </div>
          </div>
        </section>

        <section className="rts-section-gap inner-content-section">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <div className="section-title-area">
                  <SubTitle>{eyebrow}</SubTitle>
                  <h2 className="section-title animated-title mb-0">
                    {title} Built For <span className="gradient-text">AI Teams</span>
                  </h2>
                </div>
                <p className="desc">{description}</p>
                <a href="/contact" className="rts-btn btn-primary">
                  Get In Touch
                  <ArrowIcon />
                </a>
              </div>
              <div className="col-lg-6">
                <div className="inner-visual">
                  <img src={asset('images/customer/01.webp')} alt={`${title} dashboard`} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="rts-footer-area-one pt--90 pb--0">
        <div className="container">
          <div className="footer-inner compact-footer">
            <div className="single-footer-widget-one logo-area">
              <Logo footer />
              <p className="desc">Protect your business with intelligent automation built around your customer needs.</p>
            </div>
            <div className="single-footer-widget-one essential-links">
              <h2 className="title">Quick Links</h2>
              <ul>
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="copyright-area-start">
            <p>HeyBuds-Copyright 2026. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <div className={`side-bar header-two at-offcanvas-2-area${menuOpen ? ' menu-open show' : ''}`} id="side-bar">
        <button type="button" className="close-icon-menu hamburger-close-btn" aria-label="Close mobile menu" onClick={() => setMenuOpen(false)}>
          <i className="fa-sharp fa-thin fa-xmark" />
        </button>
        <Logo />
        <div className="mobile-menu-main">
          <div className="at-offcanvas-menu">
            <nav className="nav-main mainmenu-nav mt--30" aria-label="Mobile menu">
              <ul>
                {[...navLinks, ...pagesMenu.slice(1, 4)].map((link) => (
                  <li key={link.href}>
                    <a className="main" href={link.href} onClick={() => setMenuOpen(false)}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <button type="button" aria-label="Close mobile menu overlay" className={`heybuds-overlay${menuOpen ? ' show' : ''}`} onClick={() => setMenuOpen(false)} />
    </>
  );
}
