'use client';

import { FormEvent, useState } from 'react';
import type { CSSProperties } from 'react';
import { blogs, faqs, features, navLinks, pagesMenu, plans, services, steps } from '../data/site-content';
import { useEntryAnimations } from '../hooks/use-entry-animations';
import { ArrowIcon, Logo, SubTitle, asset } from './widgets';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  useEntryAnimations();

  function handleNewsletter(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <>
      <header className="header-style-one header--sticky">
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
                      <a className="main-element without-arrow" href="/services">
                        Services
                      </a>
                    </li>
                    <li className="menu-item">
                      <a className="main-element without-arrow" href="/blog">
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
                  <button
                    type="button"
                    className="menu-btn menu-btn-toggle hamburger-open-btn radius-6"
                    aria-label="Open mobile menu"
                    onClick={() => setMenuOpen(true)}
                  >
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

      <main id="home">
        <section className="rts-banner-area-three">
          <div className="container">
            <div className="banner-inner">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="left-content-area">
                    <ul>
                      <li>
                        <img src={asset('images/icon/check-n.svg')} alt="" /> 10-Day Free Trial
                      </li>
                      <li>
                        <img src={asset('images/icon/check-n.svg')} alt="" /> No Credit Card
                      </li>
                    </ul>
                    <div className="section-title-area">
                      <h1 className="section-title">
                        {['AI Employees', 'For', 'Every', 'Business', 'That', 'Think', 'Like', 'Humans', 'Work', 'Like', 'Machines.'].map((word, index) => (
                          <span className="headline-word" style={{ '--word-index': index } as CSSProperties & { '--word-index': number }} key={`${word}-${index}`}>
                            {index === 0 ? <span className="gradient-text">{word}</span> : word}
                          </span>
                        ))}
                      </h1>
                    </div>
                    <p className="desc">AI employees that answer customers, book appointments, qualify leads, and follow up automatically — 24/7.</p>
                    <div className="button-area">
                      <a href="#services" className="rts-btn btn-primary">
                        Start Free Trial
                        <ArrowIcon />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="right-content-area">
                    <div className="banner-hero">
                      <img src={asset('images/banner/02.webp')} width="640" alt="Smiling customer using Hey Buds AI chat support" />
                    </div>
                    <div className="banner-chat-area">
                      <div className="chat chat-one">
                        <img src={asset('images/banner/bot-01.webp')} width="72" alt="" />
                        <div className="content">
                          <p className="text">Hi, I can help answer customer questions instantly.</p>
                        </div>
                      </div>
                      <div className="chat chat-two">
                        <img src={asset('images/banner/user-01.webp')} width="72" alt="" />
                        <div className="content">
                          <p className="text">Great, route high-priority issues to my team.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="rts-services-area area-3 rts-section-gap" id="services">
          <div className="container">
            <div className="section-title-area center-style">
              <SubTitle>Our Services</SubTitle>
              <h2 className="section-title animated-title mb-0">
                Smart AI Solutions for <br /> <span className="gradient-text">Every Conversation</span>
              </h2>
            </div>
            <div className="section-inner mt--60">
              <div className="row g-5">
                <div className="col-lg-5">
                  <div className="left-content-area">
                    {services.map((service) => (
                      <div className="service-wrapper2" key={service.title}>
                        <div className="content-area">
                          <h3 className="title">{service.title}</h3>
                          <p className="desc">{service.desc}</p>
                        </div>
                        <div className="image-area">
                          <img src={asset(`images/${service.image}`)} alt="" width={service.width} />
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
                        <p className="desc">
                          Reduce response time and provide instant solutions 24/7. Our AI chatbots handle FAQs, complaints, and service can focus on complex cases.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="rts-features-area area-3 rts-section-gap element-move" id="features">
          <div className="container">
            <div className="section-title-area">
              <SubTitle>Feature</SubTitle>
              <h2 className="section-title animated-title mb-0">
                Features That Make Our <br /> <span className="gradient-text">AI Employee Smarter</span>
              </h2>
            </div>
            <div className="section-inner mt--60">
              <div className="row g-5">
                {features.map((feature, index) => (
                  <div className="col-lg-4 col-md-6" key={feature.title}>
                    <div className="feature-wrapper3">
                      <div className="icon">
                        <img src={asset(`images/feature/icon/${String(index + 1).padStart(2, '0')}.svg`)} alt="" />
                      </div>
                      <h3 className="h6 title">{feature.title}</h3>
                      <p className="desc">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="shape-area moving-wrapper">
            <div className="shape moving-img">
              <img src={asset('images/feature/shape-01.webp')} width="718" alt="" />
            </div>
            <div className="shape" />
            <div className="shape" />
          </div>
        </section>

        <section className="rts-customer-area rts-section-gap">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="customer-left-image-area">
                  <img src={asset('images/customer/01.webp')} alt="Customer support dashboard" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="customer-right-content-area">
                  <div className="section-title-area">
                    <SubTitle>Customer Support</SubTitle>
                    <h2 className="section-title mb--0">
                      <span className="gradient-text">Support Customers </span>On Multiple Channels
                    </h2>
                  </div>
                  <p className="desc">Our chatbots easily integrate with websites, apps, social media, and CRMs. No complicated setup, just smooth and efficient automation for your business.</p>
                  <a href="#pricing" className="rts-btn border-btn">
                    Start Free Trial
                    <ArrowIcon white />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="rts-pricing-area rts-section-gapBottom" id="pricing">
          <div className="container">
            <div className="section-title-area d-flex justify-content-between align-items-end">
              <div className="left">
                <SubTitle>Our Pricing</SubTitle>
                <h2 className="section-title animated-title mb-0">
                  Future Ready <span className="gradient-text">Plans</span>
                </h2>
              </div>
              <div className="right">
                <p className="desc">Whether you are a startup, a growing business, or an enterprise, our AI automation plans scale with you.</p>
              </div>
            </div>
            <div className="section-inner mt--60">
              {plans.map((plan) => (
                <div className={`pricing-wrapper${plan.highlighted ? ' mid' : ''}`} key={plan.name}>
                  <div className="price">
                    <span className="price-amount">{plan.price}</span>
                    {plan.period ? <span className="price-period">{plan.period}</span> : null}
                  </div>
                  <ul className="feature-list">
                    {plan.features.map((feature) => (
                      <li key={feature}>
                        <img src={asset(`images/icon/${plan.checks}`)} alt="" /> {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="button-area">
                    <a href="/contact" className="rts-btn border-btn">
                      {plan.cta}
                      <ArrowIcon white />
                    </a>
                  </div>
                  <h3 className="tag">
                    <span className="gradient-text">{plan.name}</span>
                  </h3>
                  <div className="shape">
                    <img src={asset(`images/pricing/${plan.shape}`)} alt="" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rts-working-process-area area-1">
          <div className="container">
            <div className="section-title-area center-style">
              <SubTitle>Our Approach</SubTitle>
              <h2 className="section-title animated-title mb-0">
                Building Smarter <span className="gradient-text">Customer Experiences</span>
              </h2>
            </div>
            <div className="section-inner mt--60">
              <div className="line">
                <img src={asset('images/working-process/line.svg')} alt="" />
              </div>
              <div className="row g-5">
                {steps.map(([tag, title, desc], index) => (
                  <div className="col-lg-4 col-sm-6" key={tag}>
                    <div className="working-process-wrapper">
                      <span className="tag">{tag}</span>
                      <div className="icon">
                        <img src={asset(`images/working-process/${String(index + 1).padStart(2, '0')}.svg`)} alt="" />
                      </div>
                      <h3 className="h6 title">{title}</h3>
                      <p className="desc">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-shape">
            <span className="shape" />
            <span className="shape" />
          </div>
        </section>

        <section className="rts-testimonials-area area-3">
          <div className="container">
            <div className="section-title-area center-style">
              <SubTitle>Industries</SubTitle>
              <h2 className="section-title animated-title mb-0">
                Industries <span className="gradient-text">We Serve</span>
              </h2>
            </div>
            <div className="section-inner mt--60">
              <div className="row g-39">
                <div className="col-lg-6">
                  <div className="left-image-area ext-images">
                    <img src={asset('images/testimonials/01.webp')} alt="HeyBuds customer" />
                    <div className="counter-area">
                      <h2 className="title">5★</h2>
                      <p className="text">Trusted Across Multiple Industries</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="row g-5">
                    <div className="col-12">
                      <div className="heybuds-industries-card">
                        {/* <h3>Industries We Serve</h3> */}
                        <ul>
                        <li>
                          <span><i className="fa-solid fa-utensils" /></span> Restaurants &amp; Cafés
                        </li>
                        <li>
                          <span><i className="fa-solid fa-stethoscope" /></span> Healthcare &amp; Clinics
                        </li>
                        <li>
                          <span><i className="fa-solid fa-graduation-cap" /></span> Schools &amp; Educational Institutions
                        </li>
                        <li>
                          <span><i className="fa-solid fa-building" /></span> Real Estate
                        </li>
                        <li>
                          <span><i className="fa-solid fa-cart-shopping" /></span> E-Commerce
                        </li>
                        <li>
                          <span><i className="fa-solid fa-briefcase" /></span> Service Businesses
                        </li>
                      </ul>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="heybuds-trust-card">
                        <h3>Trusted Across Multiple Industries</h3>
                        <p className="heybuds-trust-card__stars">★★★★★</p>
                        <p>Helping businesses automate conversations, capture leads, and improve customer experience.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="rts-faq-area rts-section-gap" id="faq">
          <div className="container">
            <div className="section-inner">
              <div className="row g-5">
                <div className="col-lg-6">
                  <div className="left-faq-content-area">
                    <div className="section-title-area">
                      <SubTitle>Frequently Asked Questions</SubTitle>
                      <h2 className="section-title animated-title mb-0">
                        Got Questions? <br /> We've Got <span className="gradient-text">Answers.</span>
                      </h2>
                    </div>
                    <p className="desc">Learn how Hey Buds helps businesses automate conversations, capture more leads, and deliver exceptional customer experiences 24/7.</p>
                    <div className="transparent-text gradient-text-stroke cw">FAQ</div>
                  </div>
                </div>
                <div className="col-lg-6">
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
            </div>
          </div>
        </section>

        <section className="rts-blog-area rts-section-gap">
          <div className="container">
            <div className="section-title-area d-flex align-items-end justify-content-between">
              <div className="left">
                <SubTitle>Latest Blog</SubTitle>
                <h2 className="section-title animated-title mb-0">
                  Our Latest <span className="gradient-text">Blog</span>
                </h2>
              </div>
              <div className="right">
                <div className="button-area">
                  <a href="#contact" className="rts-btn border-btn">
                    More Articles
                  </a>
                </div>
              </div>
            </div>
            <div className="section-inner mt--60">
              <div className="row g-5">
                {blogs.map((blog) => (
                  <div className="col-lg-4" key={blog.title}>
                    <article className="blog-wrapper2 white">
                      <div className="blog-card">
                        <div className="blog-card__thumb">
                          <span className="blog-card__date">10, March, 2026</span>
                          <a href={`/blog/${blog.slug}`}>
                            <img src={asset(`images/blog/${blog.image}`)} alt={blog.title} />
                          </a>
                        </div>
                        <div className="blog-card__content">
                          <p className="blog-card__tag">{blog.tag}</p>
                          <h3 className="h6 blog-card__title">
                            <a href={`/blog/${blog.slug}`}>{blog.title}</a>
                          </h3>
                          <p className="blog-card__desc">{blog.desc}</p>
                        </div>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="rts-footer-area-one pt--90 pb--0" id="contact">
        <div className="footer-contact-bar">
          <div className="container">
            <div className="footer-contact-bar__inner">
              <div className="footer-contact-bar__item">
                <div className="footer-contact-bar__icon">
                  <i className="fa-solid fa-phone" />
                </div>
                <div className="footer-contact-bar__content">
                  <h2 className="h6 label">Call</h2>
                  <a href="tel:+919763410681" className="value">
                    9763410681
                  </a>
                </div>
              </div>
              <div className="footer-contact-bar__item">
                <div className="footer-contact-bar__icon">
                  <i className="fa-solid fa-envelope" />
                </div>
                <div className="footer-contact-bar__content">
                  <h2 className="h6 label">Work with us</h2>
                  <a href="mailto:info@heybuds.in" className="value">
                    info@heybuds.in
                  </a>
                </div>
              </div>
              <div className="footer-contact-bar__item">
                <div className="footer-contact-bar__icon">
                  <i className="fa-solid fa-location-dot" />
                </div>
                <div className="footer-contact-bar__content">
                  <h2 className="h6 label">Our Location</h2>
                  <span className="value">Pune</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="footer-inner">
            <div className="single-footer-widget-one logo-area">
              <Logo footer />
              <p className="desc">Hey Buds helps businesses deploy AI Employees that answer questions, capture leads, automate conversations, and support customers 24/7 across websites, WhatsApp, and digital channels.</p>
              <ul className="social-area">
                <li>
                  <a href="#" aria-label="Facebook">
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Twitter">
                    <i className="fa-brands fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="LinkedIn">
                    <i className="fa-brands fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Instagram">
                    <i className="fa-brands fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="single-footer-widget-one essential-links">
              <h2 className="title">Quick Links</h2>
              <ul>
                {navLinks.slice(0, 5).map((link) => (
                  <li key={link.href}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="single-footer-widget-one essential-links">
              <h2 className="title">Services</h2>
              <ul>
                <li>
                  <a href="#services">AI Sales Agents</a>
                </li>
                <li>
                  <a href="#features">AI Support Agents</a>
                </li>
                <li>
                  <a href="#features">AI Appointment Assistants</a>
                </li>
                <li>
                  <a href="#features">Custom AI Solutions</a>
                </li>
              </ul>
            </div>
            <div className="single-footer-widget-one get-in-touch">
              <h2 className="title">Let's Build Your AI Employee</h2>
              <form className="newsletter-form" onSubmit={handleNewsletter}>
                <input type="email" placeholder="Enter Email Address" required aria-label="Email address" />
                <button type="submit" aria-label="Subscribe">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.33635 9.29486C6.19658 9.621 5.84714 9.80736 5.49771 9.73747C5.14828 9.66759 4.89203 9.36475 4.89203 8.99202V4.89202H0.79203C0.442598 4.89202 0.139757 4.65906 0.0698708 4.30963C-1.55345e-05 3.9602 0.186348 3.61077 0.512484 3.471L8.71248 0.116451C8.99203 -2.6688e-05 9.31817 0.0698597 9.52783 0.279519C9.73748 0.489178 9.80737 0.815314 9.69089 1.09486L6.33635 9.29486Z" fill="white" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="copyright-area-start">
                <p>© 2026 Hey Buds AI. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-shape-area">
          <img src={asset('images/footer/bg-shape-01.webp')} alt="" />
          <img src={asset('images/footer/bg-shape-02.webp')} alt="" />
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
          <div className="follow-us">
            <ul>
              <li>
                <a href="#" aria-label="Facebook">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="#" aria-label="Twitter">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#" aria-label="Instagram">
                  <i className="fab fa-instagram" />
                </a>
              </li>
              <li>
                <a href="#" aria-label="LinkedIn">
                  <i className="fa-brands fa-linkedin-in" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <button type="button" aria-label="Close mobile menu overlay" className={`heybuds-overlay${menuOpen ? ' show' : ''}`} onClick={() => setMenuOpen(false)} />
    </>
  );
}
