'use client';

import { CSSProperties, FormEvent, ReactNode, useState } from 'react';
import { blogs, faqs, navLinks, pagesMenu, steps } from '../data/site-content';
import { ArrowIcon, Logo, asset } from './widgets';

const heybudsInstagramUrl = 'https://www.instagram.com/heybuds.ai';

type TeamSocial = {
  icon: string;
  href: string;
  label: string;
};

type TeamMember = {
  image: string;
  name: string;
  role: string;
  bio: string;
  backName?: string;
  backRole?: string;
  socials?: TeamSocial[];
};

const teamMembers: TeamMember[] = [
  {
    image: 'yash.png',
    name: 'Yash Choudhary',
    role: 'Founder',
    bio: 'Driving the vision behind Hey Buds and building AI employees that help businesses automate conversations, capture opportunities, and scale intelligently.',
    socials: [
      {
        icon: 'fa-linkedin-in',
        href: 'https://www.linkedin.com/in/yash-choudhary12/',
        label: 'Yash Choudhary on LinkedIn',
      },
      {
        icon: 'fa-instagram',
        href: 'https://www.instagram.com/yash_ryder/',
        label: 'Yash Choudhary on Instagram',
      },
    ],
  },
  {
    image: 'aashish.png',
    name: 'Aashish Kumar',
    role: 'Co-Founder',
    bio: 'Building scalable products and seamless user experiences that make AI accessible, reliable, and easy to deploy.',
    socials: [
      {
        icon: 'fa-linkedin-in',
        href: 'https://www.linkedin.com/in/aashish-kumar-iiit/',
        label: 'Aashish Kumar on LinkedIn',
      },
      {
        icon: 'fa-instagram',
        href: 'https://www.instagram.com/aashishkumar_/',
        label: 'Aashish Kumar on Instagram',
      },
    ],
  },
  {
    image: 'vishal.png',
    name: 'Vishal Patil',
    role: 'Co-Founder',
    bio: 'Leading the development of AI systems, infrastructure, and intelligent automation that power the Hey Buds platform.',
    socials: [
      {
        icon: 'fa-linkedin-in',
        href: 'https://www.linkedin.com/in/vishal-g-patil/',
        label: 'Vishal Patil on LinkedIn',
      },
      {
        icon: 'fa-instagram',
        href: 'https://www.instagram.com/patilvishal54/',
        label: 'Vishal Patil on Instagram',
      },
    ],
  },
];

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
                    <li className="menu-item">
                      <a className="main-element without-arrow" href="/">
                        Home
                      </a>
                    </li>
                    <li className="menu-item">
                      <a className="main-element without-arrow" href="/about">
                        About
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="/services" className="main-element without-arrow">
                        Services
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="/blog" className="main-element without-arrow">
                        Blog
                      </a>
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
              ['fa-phone', 'Call', '+91 97634 10681', 'tel:+919763410681'],
              ['fa-envelope', 'Work with us', 'info@heybuds.in', 'mailto:info@heybuds.in'],
              ['fa-location-dot', 'Our Location', 'Pune, India', ''],
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
            <p className="desc">Hey Buds helps businesses deploy AI Employees that answer questions, capture leads, automate conversations, and support customers 24/7 across websites, WhatsApp, and digital channels.</p>
            <ul className="social-area">
              {[
                { icon: 'fa-facebook-f', href: '#', label: 'Facebook' },
                { icon: 'fa-twitter', href: '#', label: 'Twitter' },
                { icon: 'fa-linkedin', href: '#', label: 'LinkedIn' },
                { icon: 'fa-instagram', href: heybudsInstagramUrl, label: 'Instagram' },
              ].map((social) => (
                <li key={social.icon}>
                  {social.href === '#' ? (
                    <a href="#" aria-label={social.label} onClick={(event) => event.preventDefault()}>
                      <i className={`fa-brands ${social.icon}`} />
                    </a>
                  ) : (
                    <a href={social.href} aria-label={social.label} target="_blank" rel="noopener noreferrer">
                      <i className={`fa-brands ${social.icon}`} />
                    </a>
                  )}
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
              {['AI Sales Agents', 'AI Support Agents', 'AI Appointment Assistants', 'Custom AI Solutions'].map((item) => (
                <li key={item}>
                  <a href="/services">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="single-footer-widget-one get-in-touch">
            <h2 className="title">Let's Build Your AI Employee</h2>
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
          <p>© 2026 Hey Buds AI. All Rights Reserved.</p>
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

function TeamSocialLinks({ socials = [] }: { socials?: TeamSocial[] }) {
  if (!socials.length) {
    return null;
  }

  return (
    <ul className="team-card__social">
      {socials.map((social) => (
        <li key={social.href}>
          <a href={social.href} aria-label={social.label} target="_blank" rel="noopener noreferrer">
            <i className={`fa-brands ${social.icon}`} />
          </a>
        </li>
      ))}
    </ul>
  );
}

function TeamCard({ image, name, role, bio, socials }: TeamMember) {
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
          <p className="team-card__bio">{bio}</p>
          <TeamSocialLinks socials={socials} />
          <div className="team-card__info">
            <h4 className="team-card__name">{name}</h4>
            <span className="team-card__role">{role}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function TeamCardTwo({ image, name, role, bio, backName = name, backRole = role, socials }: TeamMember) {
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
          <p className="team-card__bio">{bio}</p>
          <TeamSocialLinks socials={socials} />
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
                    ['Custom AI Employee Development', 'Optimize with intelligent automation that saves time and reduces costs.', '05.webp', '355'],
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
                      <p className="desc">Reduce response time and provide instant solutions 24/7. Our AI employees handle FAQs, complaints, and service can focus on complex cases.</p>
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
    ['24', '/7', 'AI Employee Availability'],
    ['1', 's', 'Average Response Time'],
    ['6', '+', 'Industries Supported'],
    ['100', '%', 'Lead Capture Coverage'],
  ];

  return (
    <TemplatePageShell>
      <Breadcrumb title="About Us" current="About Us" bg="bg-01.webp" reverse={false} />
      <Marquee />
      <section className="rts-about-area-four white rts-section-gap">
        <div className="container">
          <div className="section-inner">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6 order-2 order-lg-1">
                <div className="about-four-content">
                  <div className="section-title-area">
                    <p className="sub-title about-four-sub">
                      <img src={asset('images/icon/sub-icon.svg')} alt="" /> About Hey Buds
                    </p>
                    <h2 className="section-title animated-title mb-0 about-four-title">
                      Inspired by a Simple <br />
                      <span className="gradient-text">Conversation</span>
                    </h2>
                  </div>
                  <div className="about-four-body">
                    <p className="desc">At Hey Buds, we believe every meaningful journey begins with a simple conversation.</p>
                    <p className="desc">We created Hey Buds to help businesses stay connected, responsive, and available whenever their customers need them. Our AI employees are designed to answer questions, support customers, and create experiences that feel natural, intelligent, and human.</p>
                    <p className="desc">The name "Hey Buds" reflects the beginning of something meaningful - a first conversation, a new idea, or an opportunity waiting to grow.</p>
                    <p className="desc">Just as every flower begins as a bud, every successful business starts with a single interaction. That belief inspires everything we build.</p>
                    <p className="desc">Today, Hey Buds helps organizations grow through intelligent conversations, seamless automation, and AI employees that work around the clock. As technology evolves, our mission remains the same: to make communication smarter, more accessible, and more human.</p>
                    <p className="desc">Built with purpose. Inspired by connection. Designed to help businesses grow.</p>
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
                  <div className="about-four-visual__frame about-four-visual__frame--banner d-block">
                    <img className="w-100 scale-img-from-to" src={asset('images/heybuds/ai-employee-hero.png')} alt="Smiling customer using Hey Buds AI chat support" />
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
      <section className="heybuds-mission-area heybuds-mission-area--process rts-section-gap">
        <div className="container">
          <div className="working-process-wrapper-two bg-dark heybuds-approach-panel">
            <div className="row g-5 align-items-start">
              <div className="col-xl-6">
                <div className="working-step-wrapper two heybuds-approach-list">
                  {steps.map(([tag, title, desc], index) => (
                    <div className="single-step heybuds-approach-item" style={{ '--step-index': index } as CSSProperties & { '--step-index': number }} key={tag}>
                      <span className="number">{tag}</span>
                      <div className="content">
                        <h3 className="title">{title}</h3>
                        <p className="desc">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-xl-6">
                <div className="section-title-area heybuds-approach-heading">
                  <p className="sub-title">
                    <img src={asset('images/icon/sub-icon.svg')} alt="" /> Our Approach
                  </p>
                  <h2 className="section-title animated-title mb-0">
                    Building Smarter <br />
                    <span className="gradient-text">Customer Experiences</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="line">
              <img src={asset('images/working-process/line-2.svg')} alt="" />
            </div>
            <div className="bg-blur-shape">
              <div className="shape" />
              <div className="shape" />
            </div>
            <div className="bg-dot-shape">
              <img src={asset('images/working-process/bg-dot-2.webp')} alt="" />
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
              {teamMembers.map((member) => (
                <div className="col-xl-4 col-lg-6 col-md-6" key={`${member.name}-${member.role}`}>
                  <TeamCard {...member} />
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
  return (
    <TemplatePageShell>
      <Breadcrumb title="Our Team" current="Our Team" bg="bg-01.webp" />
      <section className="rts-team-area inner2 rts-section-gap">
        <div className="section-inner mt--60">
          <div className="row g-40">
            {teamMembers.map((member) => (
              <div className="col-xxl-4 col-md-6" key={`${member.name}-${member.role}`}>
                <TeamCardTwo {...member} />
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
  return (
    <TemplatePageShell>
      <Breadcrumb title="Our Blog" current="Our Blog" bg="bg-02.webp" />
      <section className="rts-blog-area rts-section-gap">
        <div className="container">
          <div className="section-inner">
            <div className="row g-5">
              {blogs.map((blog, index) => (
                <div className="col-xl-4 col-lg-6" key={blog.slug}>
                  <div className="blog-wrapper2 white" style={{ '--heybuds-delay': `${0.3 + (index % 3) * 0.3}s` } as CSSProperties & { '--heybuds-delay': string }}>
                    <div className="blog-card">
                      <div className="blog-card__thumb">
                        <span className="blog-card__date">{blog.date}</span>
                        <a href={`/blog/${blog.slug}`}>
                          <img src={asset(`images/blog/${blog.image}`)} alt={blog.title} />
                        </a>
                      </div>
                      <div className="blog-card__content">
                        <p className="blog-card__tag">{blog.tag}</p>
                        <h2 className="h6 blog-card__title">
                          <a href={`/blog/${blog.slug}`}>{blog.title}</a>
                        </h2>
                        <p className="blog-card__desc">{blog.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </TemplatePageShell>
  );
}

type BlogPost = (typeof blogs)[number];

export function BlogArticleTemplatePage({ post }: { post: BlogPost }) {
  return (
    <TemplatePageShell>
      <Breadcrumb title={post.tag} current={post.title} bg="bg-02.webp" />
      <article className="heybuds-article rts-section-gap">
        <div className="container">
          <div className="heybuds-article__layout">
            <header className="heybuds-article__header">
              <p className="heybuds-article__eyebrow">{post.tag}</p>
              <h1>{post.title}</h1>
              <p className="heybuds-article__summary">{post.desc}</p>
              <div className="heybuds-article__meta">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
            </header>
            <div className="heybuds-article__image">
              <img src={asset(`images/blog/${post.image}`)} alt={post.title} />
            </div>
            <div className="heybuds-article__body">
              <p className="heybuds-article__lead">{post.intro}</p>
              {post.sections.map((section) => (
                <section key={section.heading}>
                  <h2>{section.heading}</h2>
                  <p>{section.body}</p>
                </section>
              ))}
              <section className="heybuds-article__takeaways">
                <h2>What to take from this</h2>
                <ul>
                  {post.takeaways.map((takeaway) => (
                    <li key={takeaway}>{takeaway}</li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </article>
    </TemplatePageShell>
  );
}

export function FaqTemplatePage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <TemplatePageShell>
      <Breadcrumb title="FAQ" current="FAQ" bg="bg-02.webp" />
      <section className="rts-faq-area rts-section-gap">
        <div className="container">
          <div className="section-title-area center-style">
            <p className="sub-title">
              <img src={asset('images/icon/sub-icon.svg')} alt="" /> Frequently Asked Questions
            </p>
            <h2 className="section-title animated-title mb-0">
              Got Questions? We've Got <span className="gradient-text">Answers.</span>
            </h2>
            <p className="desc">Learn how Hey Buds helps businesses automate conversations, capture more leads, and deliver exceptional customer experiences 24/7.</p>
          </div>
          <div className="section-inner mt--60">
            <div className="rts-accordion accordion-flush">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div className={`accordion-item${isOpen ? ' active' : ''}`} key={faq.question}>
                    <div className="accordion-header">
                      <button
                        type="button"
                        className={`accordion-button${isOpen ? '' : ' collapsed'}`}
                        aria-expanded={isOpen}
                        onClick={() => setOpenFaq(isOpen ? -1 : index)}
                      >
                        {String(index + 1).padStart(2, '0')}. {faq.question}
                      </button>
                    </div>
                    <div className={`accordion-collapse collapse${isOpen ? ' show' : ''}`}>
                      <div className="accordion-body">
                        <p className="desc">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </TemplatePageShell>
  );
}

export function ContactTemplatePage() {
  const businessTypes = ['Restaurants & Cafes', 'Clinics & Healthcare Providers', 'Educational Institutions', 'Real Estate Agencies', 'Service Businesses', 'E-commerce Stores', 'Professional Consultants'];
  const [contactStatus, setContactStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [contactMessage, setContactMessage] = useState('');

  async function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setContactStatus('error');
      setContactMessage('Form is not configured yet. Please add the Web3Forms access key.');
      return;
    }

    setContactStatus('submitting');
    setContactMessage('');

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append('access_key', accessKey);
    formData.append('subject', 'New Hey Buds Contact Form Submission');
    formData.append('from_name', 'Hey Buds Website');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const result = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Unable to submit the form.');
      }

      form.reset();
      setContactStatus('success');
      setContactMessage('Thanks. Your message has been sent successfully.');
    } catch (error) {
      setContactStatus('error');
      setContactMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    }
  }

  return (
    <TemplatePageShell>
      <Breadcrumb title="Let's Get In Touch" current="Contact Us" bg="bg-07.webp" />
      <section className="rts-contact-area rts-section-gap">
        <div className="container">
          <div className="rts-contact-layout">
            <div className="row g-5 align-items-center">
              <div className="col-lg-7">
                <div className="contact-info-card">
                  <h2 className="title">Ready To Assist You Anytime With Your Questions.</h2>
                  <div className="contact-info-list">
                    {[
                      ['fa-phone', 'Call', '+91 97634 10681', 'tel:+919763410681'],
                      ['fa-envelope', 'Email', 'info@heybuds.in', 'mailto:info@heybuds.in'],
                      ['fa-location-dot', 'Location', 'Pune, India', ''],
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
                  <form className="contact-form" onSubmit={handleContactSubmit}>
                    <input type="checkbox" name="botcheck" className="d-none" tabIndex={-1} autoComplete="off" />
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
                      <input type="tel" name="mobile" placeholder="Mobile" required />
                    </div>
                    <div className="single-input-wrapper input-with-icon">
                      <span className="icon">
                        <img src={asset('images/icon/message.svg')} alt="" />
                      </span>
                      <select name="businessType" defaultValue="" required aria-label="Business type">
                        <option value="" disabled>
                          Select Business Type
                        </option>
                        {businessTypes.map((businessType) => (
                          <option value={businessType} key={businessType}>
                            {businessType}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="single-input-wrapper input-with-icon">
                      <span className="icon">
                        <img src={asset('images/icon/envelop.svg')} alt="" />
                      </span>
                      <input type="email" name="email" placeholder="Email" required />
                    </div>
                    <div className="single-input-wrapper input-with-icon">
                      <span className="icon">
                        <img src={asset('images/icon/message.svg')} alt="" />
                      </span>
                      <textarea name="message" placeholder="Message" required />
                    </div>
                    <button type="submit" className="rts-btn btn-primary" disabled={contactStatus === 'submitting'}>
                      {contactStatus === 'submitting' ? 'Sending...' : 'Get In Touch'}
                    </button>
                    <p id="form-messages" role="status" aria-live="polite" className={contactStatus === 'error' ? 'text-danger' : 'text-success'}>
                      {contactMessage}
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </TemplatePageShell>
  );
}
