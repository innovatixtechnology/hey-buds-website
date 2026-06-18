'use client';

import { CSSProperties, FormEvent, ReactNode, useState } from 'react';
import { blogMenu, homeMenu, navLinks, pagesMenu } from '../data/site-content';
import { ArrowIcon, Logo, asset } from './widgets';

const brandList = ['01.svg', '02.svg', '03.svg', '04.svg', '05.svg'];

function Header() {
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
                      <ul className="rts-submenu list-unstyled menu-home">
                        {homeMenu.map((link, index) => (
                          <li className="nav-item" key={link.label}>
                            <a className="nav-link page" href={link.href}>
                              <img src={asset(`images/menu/${String(index + 1).padStart(2, '0')}.webp`)} alt="" />
                              <span>{link.label}</span>
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
                      <a href="/services" className="rts-dropdown-main-element">
                        Pages
                      </a>
                      <div className="rts-submenu rts-mega-menu service-mega-menu-style">
                        <div className="wrapper">
                          <div className="row g-5">
                            {[pagesMenu.slice(0, 4), pagesMenu.slice(4, 8), pagesMenu.slice(8, 12)].map((column, columnIndex) => (
                              <div className="col-lg-4" key={columnIndex}>
                                <ul className="mega-menu-item parent-nav">
                                  {column.map((link) => (
                                    <li key={link.href}>
                                      <a href={link.href}>
                                        <span className="text">
                                          <span className="title">{link.label}</span>
                                          <span className="details">{link.details}</span>
                                        </span>
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="menu-item rts-has-dropdown">
                      <a href="/blog" className="rts-dropdown-main-element">
                        Blog
                      </a>
                      <ul className="rts-submenu list-unstyled">
                        {blogMenu.map((link) => (
                          <li className="nav-item" key={link.href}>
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

function Footer() {
  return (
    <footer className="rts-footer-area-one pt--90 pb--0">
      <div className="footer-contact-bar">
        <div className="container">
          <div className="footer-contact-bar__inner">
            {[
              ['fa-phone', 'Call Us 24/7', '(+256) 2145.2156', 'tel:+25621452156'],
              ['fa-envelope', 'Work with us', 'info@heybuds.com', 'mailto:info@heybuds.com'],
              ['fa-location-dot', 'Our Location', 'XYZ Hilton United State', ''],
            ].map(([icon, label, value, href]) => (
              <div className="footer-contact-bar__item" key={label}>
                <div className="footer-contact-bar__icon">
                  <i className={`fa-solid ${icon}`} />
                </div>
                <div className="footer-contact-bar__content">
                  <h2 className="h6 label">{label}</h2>
                  {href ? (
                    <a href={href} className="value">
                      {value}
                    </a>
                  ) : (
                    <span className="value">{value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="footer-inner">
          <div className="single-footer-widget-one logo-area">
            <Logo footer />
            <p className="desc">Protect your business with cutting security solutions your needs.</p>
            <ul className="social-area">
              {['fa-facebook-f', 'fa-twitter', 'fa-linkedin', 'fa-instagram'].map((icon) => (
                <li key={icon}>
                  <a href="#">
                    <i className={`fa-brands ${icon}`} />
                  </a>
                </li>
              ))}
            </ul>
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
          <div className="single-footer-widget-one essential-links">
            <h2 className="title">Services</h2>
            <ul>
              {['AI Automation', 'Data Analytics', 'Machine Learning', 'Computer Vision'].map((item) => (
                <li key={item}>
                  <a href="/services">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="single-footer-widget-one get-in-touch">
            <h2 className="title">Smarter Decisions Start Here</h2>
            <form className="newsletter-form" onSubmit={(event: FormEvent<HTMLFormElement>) => event.preventDefault()}>
              <input type="email" placeholder="Enter Email Address" required aria-label="Email address" />
              <button type="submit" aria-label="Subscribe">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.33635 9.29486C6.19658 9.621 5.84714 9.80736 5.49771 9.73747C5.14828 9.66759 4.89203 9.36475 4.89203 8.99202V4.89202H0.79203C0.442598 4.89202 0.139757 4.65906 0.0698708 4.30963C-1.55345e-05 3.9602 0.186348 3.61077 0.512484 3.471L8.71248 0.116451C8.99203 -2.6688e-05 9.31817 0.0698597 9.52783 0.279519C9.73748 0.489178 9.80737 0.815314 9.69089 1.09486L6.33635 9.29486Z" fill="white" />
                </svg>
              </button>
            </form>
          </div>
        </div>
        <div className="copyright-area-start">
          <p>HeyBuds-Copyright 2026. All rights reserved.</p>
        </div>
      </div>
      <div className="footer-shape-area">
        <img src={asset('images/footer/bg-shape-01.webp')} alt="" />
        <img src={asset('images/footer/bg-shape-02.webp')} alt="" />
      </div>
    </footer>
  );
}

function Breadcrumb({ title, current, bg, reverse = true }: { title: string; current: string; bg: string; reverse?: boolean }) {
  return (
    <div className={`rts-breadcrumb-area ${reverse ? 'reverse' : 'one'}`} style={{ backgroundImage: `url(${asset(`images/breadcrumb/${bg}`)})` }}>
      <div className="container h-100">
        <div className="breadcrumb-area-wrapper">
          <h1 className="title">{title}</h1>
        </div>
        <div className="nav-bread-crumb">
          <a href="/">Home</a>
          <span>/</span>
          <a href="#" className="current gradient-text">
            {current}
          </a>
        </div>
        <div className="breadcrumb-logo">
          <Logo />
        </div>
      </div>
    </div>
  );
}

function BrandArea({ gapTop = false }: { gapTop?: boolean }) {
  return (
    <div className={`rts-brand-area ${gapTop ? 'rts-section-gapTop' : 'rts-section-gap'}`}>
      <div className="container">
        <div className="section-inner">
          <p className="desc">Trusted by the world's leading enterprises</p>
          <ul className="brand-inner">
            {brandList.map((logo) => (
              <li key={logo}>
                <a href="#" className="brand">
                  <img src={asset(`images/brand/${logo}`)} alt="" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Marquee() {
  const items = Array.from({ length: 8 }, (_, index) => index);

  return (
    <div className="rts-marquee-four-wrap" aria-hidden="true">
      <div className="rts-marquee-four">
        <div className="rts-marquee-four__track">
          {[0, 1].map((group) => (
            <div className="rts-marquee-four__group" key={group}>
              {items.map((item) => (
                <span className="rts-marquee-four__item" key={`${group}-${item}`}>
                  <span className="rts-marquee-four__text">About us</span>
                  <span className="rts-marquee-four__text">*</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TeamCard({ image, name, role }: { image: string; name: string; role: string }) {
  return (
    <div className="team-wrapper">
      <div className="team-card">
        <div className="team-card__front">
          <div className="team-card__thumb">
            <img src={asset(`images/team/${image}`)} alt={name} />
          </div>
          <div className="team-card__info">
            <h3 className="team-card__name">{name}</h3>
            <span className="team-card__role">{role}</span>
          </div>
        </div>
        <div className="team-card__back">
          <p className="team-card__bio">Built a multilingual AI chatbot that increased customer support efficiency by 65% and boosted sales conversions.</p>
          <ul className="team-card__social">
            {['fa-facebook-f', 'fa-twitter', 'fa-linkedin-in', 'fa-instagram'].map((icon) => (
              <li key={icon}>
                <a href="#" aria-label={icon}>
                  <i className={`fa-brands ${icon}`} />
                </a>
              </li>
            ))}
          </ul>
          <div className="team-card__info">
            <h4 className="team-card__name">{name}</h4>
            <span className="team-card__role">{role}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function TeamCardTwo({ image, name, role, backName = name, backRole = role }: { image: string; name: string; role: string; backName?: string; backRole?: string }) {
  return (
    <div className="team-wrapper2">
      <div className="team-card">
        <div className="team-card__front">
          <div className="team-card__thumb">
            <img src={asset(`images/team/${image}`)} alt={name} />
          </div>
          <div className="team-card__info">
            <h2 className="team-card__name">{name}</h2>
            <span className="team-card__role">{role}</span>
          </div>
        </div>
        <div className="team-card__back">
          <p className="team-card__bio">Built a multilingual AI chatbot that increased customer support efficiency by 65% and boosted sales conversions.</p>
          <ul className="team-card__social">
            {['fa-facebook-f', 'fa-twitter', 'fa-linkedin-in', 'fa-instagram'].map((icon) => (
              <li key={icon}>
                <a href="#" aria-label={icon}>
                  <i className={`fa-brands ${icon}`} />
                </a>
              </li>
            ))}
          </ul>
          <div className="team-card__info">
            <h2 className="team-card__name">{backName}</h2>
            <span className="team-card__role">{backRole}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function TemplatePageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <div className="rts-blur-bottom" />
    </>
  );
}

export function ServiceTemplatePage() {
  const serviceCards = [
    ['01.webp', 'AI-Powered Automation', 'Streamline repetitive tasks and optimize workflows with intelligent automation that saves time and reduces costs.'],
    ['02.webp', 'Data Analytics & Insights', 'Unlock the true value of your data through advanced AI models that deliver actionable insights for smarter decision-making.'],
    ['03.webp', 'Machine Learning Solutions', 'From predictive models to recommendation engines, our ML solutions help businesses innovate and grow with confidence.'],
  ];
  const smallServices = [
    ['icon/02.svg', 'Artificial Intelligence & Deployment', 'Empowering teams through workshops, and hands on training sessions on best neural networks.'],
    ['icon/03.svg', 'Data Preparation & Annotation', 'We clean, structure, and label your to ensure your models are trained on high- because great AI starts with great data'],
  ];
  const learningServices = [
    ['01', 'bg-one', 'Data Cleaning & Model Training', 'Empowering teams through workshops, and hands-on training sessions on best neural networks'],
    ['02', 'bg-two', 'Natural Language Processing', 'We harness the power of NLP to help businesses understand, analyze, and generate human language with ease.'],
    ['03', 'bg-three', 'AI Integration And Automation', 'We clean, structure, and label your to ensure your models are trained on high- because great AI starts with great data'],
    ['04', 'bg-four', 'Recommendation Systems', 'We clean, structure, and label your to ensure your models are trained on high- because great AI starts with great data'],
  ];

  return (
    <TemplatePageShell>
      <Breadcrumb title="Our Service" current="Our Service" bg="bg-02.webp" />
      <BrandArea gapTop />
      <section className="rts-services-area rts-section-gap">
        <div className="container">
          <div className="section-title-area d-flex align-items-end justify-content-between">
            <div className="left">
              <p className="sub-title">
                <img src={asset('images/icon/sub-icon.svg')} alt="" /> Our Services
              </p>
              <h2 className="section-title animated-title mb-0">
                The Future of Services <br /> is <span className="gradient-text">Artificial Intelligence</span>
              </h2>
            </div>
            <div className="right">
              <div className="button-area">
                <a href="/contact" className="rts-btn border-btn">
                  Explore More
                </a>
              </div>
            </div>
          </div>
          <div className="section-inner mt--60">
            <div className="row g-5">
              {serviceCards.map(([image, title, desc]) => (
                <div className="col-xl-4 col-md-6" key={title}>
                  <div className="services-wrapper">
                    <div className="content-area">
                      <h3 className="h6 title">{title}</h3>
                      <p className="desc">{desc}</p>
                    </div>
                    <div className="image-area">
                      <img src={asset(`images/service/${image}`)} alt="" />
                    </div>
                    <div className="floating-btn">
                      <a href="/services-details" className="round-btn" aria-label={title}>
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.875 0V2.4375H20.2191L0 22.6566L1.71844 24.375L21.9375 4.15594V19.5H24.375V0H4.875Z" fill="white" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="rts-services-area area-3">
        <div className="container">
          <div className="section-title-area center-style">
            <p className="sub-title">
              <img src={asset('images/icon/sub-icon.svg')} alt="" /> Our Services
            </p>
            <h2 className="section-title animated-title mb-0">
              Smart AI Solutions for <br /> <span className="gradient-text">Every Conversation</span>
            </h2>
          </div>
          <div className="section-inner mt--60">
            <div className="row g-5">
              <div className="col-lg-5">
                <div className="left-content-area">
                  {[
                    ['Multi-Language Communication', 'Break language barriers with AI-powered by our multilingual support.', '04.webp', '364'],
                    ['Custom Chatbot Development', 'Optimize with intelligent automation that saves time and reduces costs.', '05.webp', '355'],
                  ].map(([title, desc, image, width]) => (
                    <div className="service-wrapper2" key={title}>
                      <div className="content-area">
                        <h3 className="title">{title}</h3>
                        <p className="desc">{desc}</p>
                      </div>
                      <div className="image-area">
                        <img src={asset(`images/service/${image}`)} alt="" width={width} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-lg-7">
                <div className="right-content-area">
                  <div className="service-wrapper3">
                    <div className="image-area">
                      <img src={asset('images/service/06.webp')} width="611" alt="" />
                    </div>
                    <div className="content-area">
                      <h3 className="title">Customer Support Automation</h3>
                      <p className="desc">Reduce response time and provide instant solutions 24/7. Our AI chatbots handle FAQs, complaints, and service can focus on complex cases.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="rts-services-area-four-split rts-section-gap">
        <div className="custom-container">
          <div className="services-split-inner">
            <div className="services-cards-wrap">
              <div className="service-card-wide">
                <div className="icon">
                  <img src={asset('images/service/icon/01.svg')} alt="" />
                </div>
                <div className="content">
                  <h3 className="title">Neural Network Development</h3>
                  <p className="desc">We design and build custom neural network models tailored to your business needs. From image recognition to natural language processing, our accuracy, speed, and scalability.</p>
                </div>
              </div>
              <div className="service-card-grid">
                {smallServices.map(([image, title, desc]) => (
                  <div className="service-card-small" key={title}>
                    <div className="icon">
                      <img src={asset(`images/service/${image}`)} alt="" />
                    </div>
                    <h4 className="title">{title}</h4>
                    <p className="desc">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="services-content-panel">
              <div className="section-title-area">
                <p className="sub-title">
                  <img src={asset('images/icon/sub-icon.svg')} alt="" /> Our Services
                </p>
                <h2 className="section-title animated-title">
                  SMART AI <span className="gradient-text">SOLUTIONS</span>
                  <br /> FOR EVERY NEED
                </h2>
                <p className="desc">Our neural network services are designed to help you harness the true power of artificial intelligence. From optimizing and deploying them at scale.</p>
              </div>
              <div className="button-area">
                <a href="/contact" className="rts-btn border-btn">
                  Explore More
                  <ArrowIcon white />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-shape">
          <img src={asset('images/service/shape-01.svg')} alt="" />
        </div>
      </section>
      <section className="rts-service-area area-6 rts-section-gap">
        <div className="container">
          <div className="section-title-area">
            <div className="left">
              <p className="sub-title">
                <img src={asset('images/icon/sub-icon.svg')} alt="" /> Our Services
              </p>
              <h2 className="section-title animated-title mb-0">
                Smart Machine <br />
                <span className="gradient-text">Learning Solutions</span>
              </h2>
            </div>
            <div className="right">
              <div className="slider-dotx" />
            </div>
          </div>
        </div>
        <div className="service-slider-wrapper">
          <div className="service-static-grid">
            {learningServices.map(([number, bg, title, desc]) => (
              <div className="service-static-slide" key={number}>
                <div className={`service-wrapper6 ${bg}`}>
                  <span className="number">{number}</span>
                  <h3 className="title">
                    <a href="/services-details">{title}</a>
                  </h3>
                  <p className="desc">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </TemplatePageShell>
  );
}

export function AboutTemplatePage() {
  const counters = [
    ['100', 'K+', 'Automated Conversion'],
    ['120', 'K+', 'Active users every day'],
    ['100', '+', 'Expert Team Member'],
    ['85', '%', 'Success Rate'],
  ];
  const steps = [
    ['01', 'Neurons & Layers', 'Data passes through hidden layers where artificial neurons apply weights and activation functions.'],
    ['02', 'Learning & Backpropagation', 'The network adjusts its internal parameters by comparing predictions with the correct answers and minimizing error.'],
    ['03', 'Continuous Improvement', 'Models can be fine-tuned, retrained, and scaled to adapt to changing real-world challenges.'],
  ];

  return (
    <TemplatePageShell>
      <Breadcrumb title="About Us" current="About Us" bg="bg-01.webp" reverse={false} />
      <BrandArea />
      <Marquee />
      <section className="rts-about-area-four white rts-section-gap">
        <div className="container">
          <div className="section-inner">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6 order-2 order-lg-1">
                <div className="about-four-content">
                  <div className="section-title-area">
                    <p className="sub-title about-four-sub">
                      <img src={asset('images/icon/sub-icon.svg')} alt="" /> About Us
                    </p>
                    <h2 className="section-title animated-title mb-0 about-four-title">
                      The team behind <br />
                      <span className="gradient-text">the intelligence</span>
                    </h2>
                  </div>
                  <div className="about-four-body">
                    <p className="desc">We are passionate about building intelligent solutions that transform the way people live and work. Our mission is to harness the power of Artificial Intelligence to solve complex challenges, unlock new opportunities, and drive innovation across industries.</p>
                    <p className="desc">By combining advanced machine learning, natural language processing, and automation, we deliver technology that not only solves complex problems but also drives sustainable growth.</p>
                    <div className="button-area">
                      <a href="/contact" className="rts-btn border-btn">
                        Explore More
                        <ArrowIcon white />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2">
                <div className="about-four-visual">
                  <div className="about-four-visual__frame d-block">
                    <img className="w-100 scale-img-from-to" src={asset('images/about/05.webp')} alt="Neural network visualization" />
                  </div>
                  <div className="about-four-visual__stat">
                    <div className="about-four-visual__stat-inner">
                      <h3 className="about-four-visual__stat-title">
                        <span className="counter">200</span>K+
                      </h3>
                      <p className="about-four-visual__stat-text">AI Solutions for our clients</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shape-area">
          <img src={asset('images/about/shape-01.svg')} alt="" />
        </div>
      </section>
      <section className="rts-counter-area inner rts-section-gap">
        <div className="container">
          <div className="section-inner">
            {counters.map(([number, suffix, text]) => (
              <div className="counter-area" key={text}>
                <h2 className="title gradient-text-stroke">
                  <span className="counter">{number}</span>
                  {suffix}
                </h2>
                <p className="text">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="rts-working-process-area dark element-move">
        <div className="custom-container">
          <div className="working-process-wrapper-two bg-dark">
            <div className="line">
              <img src={asset('images/working-process/line-2.svg')} alt="" />
            </div>
            <div className="row justify-content-between">
              <div className="col-xl-6 order-change-lg-2 order-change-md-2">
                <div className="working-step-wrapper two">
                  {steps.map(([number, title, desc]) => (
                    <div className="single-step" key={number}>
                      <h3 className="number">{number}</h3>
                      <div className="content">
                        <h4 className="title">{title}</h4>
                        <p className="desc">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-xl-6">
                <div className="working-right-content-area">
                  <div className="section-title-area">
                    <p className="sub-title">
                      <img src={asset('images/icon/sub-icon.svg')} alt="" /> Our Approach
                    </p>
                    <h2 className="section-title animated-title mb-0 cw">
                      Pioneering Tomorrow's <span className="gradient-text">Intelligent Future</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blur-shape">
              <span className="shape" />
              <span className="shape" />
            </div>
            <div className="bg-dot-shape moving-wrapper">
              <img className="moving-img" src={asset('images/working-process/bg-dot-2.webp')} width="795" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="rts-team-area inner rts-section-gap">
        <div className="container">
          <div className="section-title-area center-style">
            <p className="sub-title">
              <img src={asset('images/icon/sub-icon.svg')} alt="" /> Team
            </p>
            <h2 className="section-title mb-0 animated-title">
              Our Professional <span className="gradient-text">Team</span>
            </h2>
          </div>
          <div className="section-inner mt--60">
            <div className="row g-5">
              {[
                ['01.webp', 'Archer Graham', 'Finance Manager'],
                ['01.webp', 'Sophia Khan', 'AI Product Designer'],
                ['02.webp', 'Michael Lee', 'Machine Learning Engineer'],
                ['03.webp', 'James Collins', 'Data Engineer'],
              ].map(([image, name, role]) => (
                <div className="col-xl-3 col-lg-6 col-md-6" key={`${name}-${role}`}>
                  <TeamCard image={image} name={name} role={role} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </TemplatePageShell>
  );
}

export function TeamTemplatePage() {
  const teamMembers = [
    ['01.webp', 'Archer Graham', 'Finance Manager'],
    ['01.webp', 'Sophia Khan', 'AI Product Designer'],
    ['02.webp', 'Michael Lee', 'Machine Learning Engineer'],
    ['03.webp', 'James Collins', 'Data Engineer'],
    ['05.webp', 'Emily Davis', 'Marketing Manager', 'Archer Graham', 'Finance Manager'],
    ['06.webp', 'Sarah Johnson', 'Product Designer', 'Sophia Khan', 'AI Product Designer'],
    ['07.webp', 'Olivia Taylor', 'Content Strategist', 'Michael Lee', 'Machine Learning Engineer'],
    ['08.webp', 'James Brown', 'UX/UI Designer', 'James Collins', 'Data Engineer'],
  ];

  return (
    <TemplatePageShell>
      <Breadcrumb title="Our Team" current="Our Team" bg="bg-01.webp" />
      <section className="rts-team-area inner2 rts-section-gap">
        <div className="section-inner mt--60">
          <div className="row g-40">
            {teamMembers.map(([image, name, role, backName, backRole]) => (
              <div className="col-xxl-3 col-md-6" key={`${name}-${role}`}>
                <TeamCardTwo image={image} name={name} role={role} backName={backName} backRole={backRole} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="rts-testimonials-area area-3 rts-section-gapBottom">
        <div className="custom-container">
          <div className="section-title-area center-style">
            <p className="sub-title">
              <img src={asset('images/icon/sub-icon.svg')} alt="" /> Testimonials
            </p>
            <h2 className="section-title animated-title mb-0">
              Our <span className="gradient-text">Customer</span> Say
            </h2>
          </div>
          <div className="section-inner mt--60">
            <div className="testimonials-card-wrapper">
              <div className="left-image-area">
                <img src={asset('images/testimonials/01.webp')} width="658" alt="" />
                <div className="counter-area">
                  <h2 className="title">
                    <span className="counter">95</span>%
                  </h2>
                  <p className="text">Positive Rating Of Our Agency</p>
                </div>
              </div>
              <div className="review-middle-area">
                <div className="bg-shape">
                  <img src={asset('images/testimonials/bg-shape-02.svg')} alt="shape" />
                </div>
                <div className="reivew-middle-wrapper">
                  <div className="logo-area">
                    <Logo footer />
                  </div>
                  <div className="content">
                    <img src={asset('images/testimonials/star.svg')} alt="" className="stars" />
                    <p className="desc">Based on 185 reviews</p>
                    <img src={asset('images/testimonials/author-02.webp')} width="132" alt="" />
                  </div>
                </div>
              </div>
              <div className="client-review-area review-three">
                <div className="testimonials-wrapper-three">
                  <div className="image-area">
                    <img src={asset('images/brand/01.svg')} alt="" />
                  </div>
                  <p className="text h6">Their neural network solution transformed the way we analyze medical images. Accuracy improved by 30%, and doctors now get faster diagnostic Best support.This AI solution transformed the way we work faster, The Gourmet Haven enough. It's a for place for special Language Understanding best Talented technology.</p>
                  <div className="author-area">
                    <p className="name">William Henry</p>
                    <p className="designation">
                      Designer at <span>AI Agency</span>
                    </p>
                  </div>
                </div>
                <div className="slider-dots" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </TemplatePageShell>
  );
}

export function BlogTemplatePage() {
  const posts = [
    ['08.webp', '15, March, 2025', 'Ai Agency', 'Top 5 AI Trends Agencies Should Watch in 2025', "In today's competitive market, having an AI strategy is not just an option-it's a necessity."],
    ['09.webp', '10, March, 2025', 'AI-Powered', 'AI-Powered Customer The Future of Engagement', 'Customer expectations are higher than ever, and businesses must deliver personalized.'],
    ['10.webp', '22, March, 2025', 'AI Strategy', 'Why Every Brand Needs an AI Strategy', "Artificial Intelligence is no longer a futuristic concept it's a powerful tool driving real."],
    ['06.webp', '10, March, 2025', 'Video Genarator', '5 Ways to Use Video to Grow Your Brand', 'Learn practical strategies to boost engagement and sales with impactful videos.'],
    ['07.webp', '7,Augest,2025', 'Automation', 'Behind the Scenes How Our Video Generator Works', 'Learn how automation is reshaping industries and creating new opportunities.'],
    ['05.webp', '14,July,2025', 'AI Chatbots', 'Building Smarter Customer with AI Chatbots', 'Discover real-world applications of AI and how best companies are using it to scale faster'],
  ];

  return (
    <TemplatePageShell>
      <Breadcrumb title="Our Blog" current="Our Blog" bg="bg-02.webp" />
      <section className="rts-blog-area rts-section-gap">
        <div className="container">
          <div className="section-inner">
            <div className="row g-5">
              {posts.map(([image, date, tag, title, desc], index) => (
                <div className="col-xl-4 col-lg-6" key={title}>
                  <div className="blog-wrapper2 white" style={{ '--heybuds-delay': `${0.3 + (index % 3) * 0.3}s` } as CSSProperties & { '--heybuds-delay': string }}>
                    <div className="blog-card">
                      <div className="blog-card__thumb">
                        <span className="blog-card__date">{date}</span>
                        <a href="/blog-details">
                          <img src={asset(`images/blog/${image}`)} alt="The Best Future of AI in Business" />
                        </a>
                      </div>
                      <div className="blog-card__content">
                        <p className="blog-card__tag">{tag}</p>
                        <h2 className="h6 blog-card__title">
                          <a href="/blog-details">{title}</a>
                        </h2>
                        <p className="blog-card__desc">{desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <ul className="rts-step-pagination">
              {['01', '02', '03', '04'].map((step, index) => (
                <li className={`step${index === 0 ? ' active' : ''}`} key={step}>
                  <a href="#">{step}</a>
                </li>
              ))}
              <li className="step arrow">
                <a href="#">
                  <i className="fa-solid fa-chevrons-right" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </TemplatePageShell>
  );
}

export function ContactTemplatePage() {
  return (
    <TemplatePageShell>
      <Breadcrumb title="Let's Get In Touch" current="Contact Us" bg="bg-07.webp" />
      <BrandArea gapTop />
      <section className="rts-contact-area rts-section-gap">
        <div className="container">
          <div className="rts-contact-layout">
            <div className="row g-5 align-items-center">
              <div className="col-lg-7">
                <div className="contact-info-card">
                  <h2 className="title">Ready To Assist You Anytime With Your Questions.</h2>
                  <div className="contact-info-list">
                    {[
                      ['fa-phone', 'Call Us 24/7', '(+256) 2145.2156', 'tel:+25621452156'],
                      ['fa-envelope', 'Work with us', 'info@heybuds.com', 'mailto:info@heybuds.com'],
                      ['fa-location-dot', 'Our Location', 'XYZ Hilton United State', ''],
                    ].map(([icon, label, value, href]) => (
                      <div className="contact-info-item" key={label}>
                        <div className="icon">
                          <i className={`fa-solid ${icon}`} />
                        </div>
                        <div className="content">
                          <h3>{label}</h3>
                          {href ? <a href={href}>{value}</a> : <span>{value}</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="rts-contact-form-area">
                  <h2 className="title">Contact Us:</h2>
                  <form className="contact-form" onSubmit={(event: FormEvent<HTMLFormElement>) => event.preventDefault()}>
                    <div className="single-input-wrapper input-with-icon">
                      <span className="icon">
                        <img src={asset('images/icon/user.svg')} alt="" />
                      </span>
                      <input type="text" name="name" placeholder="Your Name" required />
                    </div>
                    <div className="single-input-wrapper input-with-icon">
                      <span className="icon">
                        <img src={asset('images/icon/envelop.svg')} alt="" />
                      </span>
                      <input type="email" name="email" placeholder="Johndoe@gmail.com" required />
                    </div>
                    <div className="single-input-wrapper input-with-icon">
                      <span className="icon">
                        <img src={asset('images/icon/message.svg')} alt="" />
                      </span>
                      <textarea name="message" placeholder="Message" required />
                    </div>
                    <button type="submit" className="rts-btn btn-primary">
                      Get In Touch
                    </button>
                    <p id="form-messages" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="rts-map-area rts-section-gapBottom">
        <div className="container">
          <div className="contact-map-area-fluid">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14881.10813512346!2d92.05130130003461!3d21.28584316293776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1761018831728!5m2!1sen!2sbd" width="600" height="600" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="HeyBuds location map" />
          </div>
        </div>
      </div>
    </TemplatePageShell>
  );
}
