/* eslint-disable jsx-a11y/no-redundant-roles */
import myimage from '../images/linkdin profile.png';


const FacebookIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="#1877F2" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
    <defs>
      <linearGradient id="igGradient" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%"   stopColor="#f09433" />
        <stop offset="25%"  stopColor="#e6683c" />
        <stop offset="50%"  stopColor="#dc2743" />
        <stop offset="75%"  stopColor="#cc2366" />
        <stop offset="100%" stopColor="#bc1888" />
      </linearGradient>
    </defs>
    <path fill="url(#igGradient)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="#0A66C2" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GitHubIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="#f8fafc" aria-hidden="true">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const socialLinks = [
  { icon: <FacebookIcon />,  label: 'Facebook',  href: 'https://www.facebook.com/kaveesha.desilva98' },
  { icon: <InstagramIcon />, label: 'Instagram', href: 'https://www.instagram.com/kaveesha_desilva_?igsh=N3N3aHoyNHlsdHF2&utm_source=qr' },
  { icon: <LinkedInIcon />,  label: 'LinkedIn',  href: 'https://www.linkedin.com/in/kaveeshadesilva' },
  { icon: <GitHubIcon />,    label: 'GitHub',    href: 'https://github.com/KMDS21' },
];

const navLinks = [
  { label: 'Home',     href: '#home' },
  { label: 'About',    href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
];

const Navbar = () => (
  <nav className="portfolio-nav" role="navigation" aria-label="Main navigation">
    <div className="portfolio-nav__inner">
      <a href="#home" className="portfolio-nav__brand" aria-label="Back to top">
        Portfolio
      </a>
      <ul className="portfolio-nav__links" role="list">
        {navLinks.map(({ label, href }) => (
          <li key={href}>
            <a href={href} className="portfolio-nav__link">{label}</a>
          </li>
        ))}
      </ul>
      <a
        href="/Kaveesha_De_Silva_CV.pdf"
        download
        className="portfolio-nav__cv-btn"
        aria-label="Download CV"
      >
        <DownloadIcon />
        Download CV
      </a>
      <label className="portfolio-nav__hamburger" aria-label="Open menu" htmlFor="nav-toggle">
        <span /><span /><span />
      </label>
      <input type="checkbox" id="nav-toggle" className="portfolio-nav__toggle" aria-hidden="true" />
      <ul className="portfolio-nav__drawer" role="list">
        {navLinks.map(({ label, href }) => (
          <li key={href}>
            <a href={href} className="portfolio-nav__drawer-link">{label}</a>
          </li>
        ))}
        <li>
          <a href="/Kaveesha_De_Silva_CV.pdf" download className="portfolio-nav__drawer-cv">
            <DownloadIcon /> Download CV
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

const Home = () => (
  <>
    <Navbar />

    <section id="home" className="hero-section" aria-label="Hero introduction">

      <div className="hero-bg-orb hero-bg-orb--blue"   aria-hidden="true" />
      <div className="hero-bg-orb hero-bg-orb--indigo" aria-hidden="true" />
      <div className="hero-bg-orb hero-bg-orb--cyan"   aria-hidden="true" />

      <div className="hero-bg-particles" aria-hidden="true">
        {Array.from({ length: 22 }).map((_, i) => (
          <span key={i} className="hero-bg-particle" style={{
            left:              `${(i * 47 + 11) % 100}%`,
            top:               `${(i * 31 + 7)  % 100}%`,
            animationDelay:    `${(i * 0.4) % 6}s`,
            animationDuration: `${4 + (i % 4)}s`,
            width:  i % 3 === 0 ? '3px' : '2px',
            height: i % 3 === 0 ? '3px' : '2px',
          }} />
        ))}
      </div>

      <div className="hero-section__container">

        <div className="hero-content">

          <div className="hero-content__availability-badge" aria-label="Availability status">
            <span className="hero-content__availability-dot" aria-hidden="true" />
            Available for opportunities
          </div>

          <h1 className="hero-content__heading">
            Hi, I'm <br /><span className="hero-content__name-gradient">Kaveesha De Silva</span>
          </h1>

          <p className="hero-content__role">Aspiring Software Engineer</p>

          <p className="hero-content__bio">
            Information Technology undergraduate pursuing BICT (Hons) with
            specialisation in Software System Technology at University of Kelaniya.
          </p>

          <div className="hero-content__cta-group">
            <a href="#projects" className="hero-cta hero-cta--primary">
              View Projects →
            </a>
            <a href="#contact" className="hero-cta hero-cta--outline">
              Get In Touch
            </a>
          </div>

          <div className="hero-social-links" aria-label="Social media profiles">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="hero-social-card"
                aria-label={`Visit ${label} profile`}
              >
                <span className="hero-social-card__icon">{icon}</span>
                <span className="hero-social-card__label">{label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="hero-portrait-column">
          <img
            src={myimage}
            alt="Kaveesha De Silva portrait"
            className="hero-portrait"
          />
        </div>

      </div>
    </section>

    <style>{`

      .portfolio-nav {
        position: fixed;
        top: 0; left: 0; right: 0;
        z-index: 100;
        background: rgba(8, 13, 26, 0.88);
        backdrop-filter: blur(14px);
        border-bottom: 1px solid rgba(59,130,246,0.12);
      }

      .portfolio-nav__inner {
        max-width: 1400px;
        margin: 0 auto;
        padding: 0 5vw;
        height: 64px;
        display: flex;
        align-items: center;
        gap: 2rem;
        position: relative;
      }

      .portfolio-nav__brand {
        font-size: 1.25rem;
        font-weight: 800;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        background: linear-gradient(135deg, #2563eb 0%, #60a5fa 60%, #93c5fd 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-decoration: none;
        flex-shrink: 0;
      }

      .portfolio-nav__links {
        display: flex;
        gap: 2rem;
        list-style: none;
        margin: 0; padding: 0;
        flex: 1;
        justify-content: center;
      }

      .portfolio-nav__link {
        color: #94a3b8;
        text-decoration: none;
        font-size: 0.875rem;
        font-weight: 500;
        letter-spacing: 0.03em;
        transition: color 0.2s;
      }
      .portfolio-nav__link:hover { color: #e2e8f0; }

      .portfolio-nav__cv-btn {
        display: inline-flex;
        align-items: center;
        gap: 0.45rem;
        padding: 0.5rem 1.2rem;
        border-radius: 9999px;
        font-size: 0.82rem;
        font-weight: 600;
        letter-spacing: 0.02em;
        text-decoration: none;
        color: #93c5fd;
        border: 1.5px solid rgba(59,130,246,0.4);
        background: rgba(37,99,235,0.1);
        flex-shrink: 0;
        transition: background 0.2s, border-color 0.2s, color 0.2s, transform 0.2s, box-shadow 0.2s;
      }
      .portfolio-nav__cv-btn:hover {
        background: rgba(37,99,235,0.22);
        border-color: rgba(96,165,250,0.7);
        color: #bfdbfe;
        transform: translateY(-1px);
        box-shadow: 0 4px 16px rgba(37,99,235,0.25);
      }

      .portfolio-nav__toggle { display: none; }
      .portfolio-nav__hamburger {
        display: none;
        flex-direction: column;
        gap: 5px;
        cursor: pointer;
        padding: 4px;
        flex-shrink: 0;
      }
      .portfolio-nav__hamburger span {
        display: block;
        width: 24px; height: 2px;
        background: #94a3b8;
        border-radius: 2px;
        transition: all 0.3s;
      }

      .portfolio-nav__drawer {
        display: none;
        position: absolute;
        top: 64px; left: 0; right: 0;
        background: rgba(8,13,26,0.98);
        border-bottom: 1px solid rgba(59,130,246,0.15);
        flex-direction: column;
        padding: 1rem 5vw 1.5rem;
        list-style: none;
        margin: 0;
        gap: 0.25rem;
        z-index: 99;
      }
      .portfolio-nav__drawer-link {
        display: block;
        padding: 0.65rem 0;
        color: #94a3b8;
        text-decoration: none;
        font-size: 1rem;
        font-weight: 500;
        border-bottom: 1px solid rgba(59,130,246,0.08);
        transition: color 0.2s;
      }
      .portfolio-nav__drawer-link:hover { color: #e2e8f0; }

      .portfolio-nav__drawer-cv {
        display: inline-flex;
        align-items: center;
        gap: 0.45rem;
        margin-top: 1rem;
        padding: 0.6rem 1.4rem;
        border-radius: 9999px;
        font-size: 0.9rem;
        font-weight: 600;
        text-decoration: none;
        color: #93c5fd;
        border: 1.5px solid rgba(59,130,246,0.4);
        background: rgba(37,99,235,0.1);
      }

      #nav-toggle:checked ~ .portfolio-nav__drawer { display: flex; }
      #nav-toggle:checked + .portfolio-nav__hamburger span:nth-child(1) {
        transform: translateY(7px) rotate(45deg);
      }
      #nav-toggle:checked + .portfolio-nav__hamburger span:nth-child(2) { opacity: 0; }
      #nav-toggle:checked + .portfolio-nav__hamburger span:nth-child(3) {
        transform: translateY(-7px) rotate(-45deg);
      }

      .hero-section {
        position: relative;
        overflow: hidden;
        min-height: 100vh;
        display: flex;
        align-items: center;
        padding: 80px 5vw 0;
        background: #080d1a;
      }

      .hero-bg-orb {
        position: absolute;
        border-radius: 50%;
        filter: blur(90px);
        pointer-events: none;
        z-index: 0;
      }
      .hero-bg-orb--blue {
        width: 650px; height: 650px;
        top: -140px; right: -80px;
        background: radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 70%);
        animation: orb-drift-a 14s ease-in-out infinite alternate;
      }
      .hero-bg-orb--indigo {
        width: 520px; height: 520px;
        bottom: -120px; left: -100px;
        background: radial-gradient(circle, rgba(99,102,241,0.16) 0%, transparent 70%);
        animation: orb-drift-b 18s ease-in-out infinite alternate-reverse;
      }
      .hero-bg-orb--cyan {
        width: 340px; height: 340px;
        top: 45%; left: 38%;
        background: radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%);
        animation: orb-drift-a 11s ease-in-out infinite alternate;
      }
      @keyframes orb-drift-a {
        from { transform: translate(0, 0)    scale(1); }
        to   { transform: translate(32px, 22px) scale(1.1); }
      }
      @keyframes orb-drift-b {
        from { transform: translate(0, 0)      scale(1); }
        to   { transform: translate(-28px, 18px) scale(1.08); }
      }

      .hero-bg-particles {
        position: absolute;
        inset: 0;
        z-index: 0;
        pointer-events: none;
      }
      .hero-bg-particle {
        position: absolute;
        border-radius: 50%;
        background: #60a5fa;
        opacity: 0;
        animation: particle-rise linear infinite;
      }
      @keyframes particle-rise {
        0%   { transform: translateY(0);    opacity: 0; }
        15%  { opacity: 0.35; }
        85%  { opacity: 0.35; }
        100% { transform: translateY(-70px); opacity: 0; }
      }

      .hero-section__container {
        position: relative;
        z-index: 1;
        width: 100%;
        max-width: 1400px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 5fr 7fr;
        gap: 2rem;
        align-items: center;
      }

      .hero-content {
        display: flex;
        flex-direction: column;
      }

      .hero-content__availability-badge {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.45rem 1.1rem;
        border-radius: 0.6rem;
        font-size: 0.8rem;
        font-weight: 600;
        color: #e2e8f0;
        background: #0f172a;
        border: 1px solid rgba(59,130,246,0.2);
        width: fit-content;
        margin-bottom: 1.5rem;
        box-shadow: 0 2px 12px rgba(0,0,0,0.4);
      }

      .hero-content__availability-dot {
        width: 7px; height: 7px;
        border-radius: 50%;
        background: #4ade80;
        flex-shrink: 0;
        animation: dot-pulse 2s ease-in-out infinite;
      }
      @keyframes dot-pulse {
        0%, 100% { box-shadow: 0 0 0 0   rgba(74,222,128,0.55); }
        50%       { box-shadow: 0 0 0 5px rgba(74,222,128,0); }
      }

      .hero-content__heading {
        font-size: clamp(2rem, 4.5vw, 4rem);
        font-weight: 800;
        line-height: 1.15;
        color: #f8fafc;
        margin: 0;
        white-space: nowrap;
      }

      .hero-content__name-gradient {
        background: linear-gradient(135deg, #2563eb 0%, #60a5fa 50%, #93c5fd 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        white-space: nowrap;
      }

      .hero-content__role {
        font-size: clamp(1rem, 1.8vw, 1.25rem);
        font-weight: 600;
        color: #60a5fa;
        margin: 0.75rem 0 0;
      }

      .hero-content__bio {
        font-size: clamp(0.875rem, 1.3vw, 1rem);
        line-height: 1.8;
        color: #64748b;
        max-width: 480px;
        margin: 1.25rem 0 0;
        text-align: justify;
      }

      .hero-content__cta-group {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        margin-top: 2rem;
      }

      .hero-cta {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.85rem 2rem;
        border-radius: 9999px;
        font-size: 0.9rem;
        font-weight: 600;
        text-decoration: none;
        transition: background 0.2s, border-color 0.2s, color 0.2s, transform 0.2s, box-shadow 0.2s;
      }
      .hero-cta--primary {
        background: #2563eb;
        color: #fff;
      }
      .hero-cta--primary:hover {
        background: #1d4ed8;
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(37,99,235,0.35);
      }
      .hero-cta--outline {
        background: transparent;
        color: #94a3b8;
        border: 1.5px solid rgba(148,163,184,0.4);
      }
      .hero-cta--outline:hover {
        border-color: #e2e8f0;
        color: #e2e8f0;
        transform: translateY(-2px);
      }

      .hero-social-links {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        margin-top: 2.5rem;
      }

      .hero-social-card {
        width: 80px; height: 80px;
        border-radius: 1rem;
        border: 1px solid rgba(59,130,246,0.2);
        background: rgba(15,23,42,0.6);
        backdrop-filter: blur(8px);
        text-decoration: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.4rem;
        transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s;
      }
      .hero-social-card:hover {
        border-color: rgba(59,130,246,0.5);
        transform: translateY(-4px);
        box-shadow: 0 8px 24px rgba(37,99,235,0.2);
      }
      .hero-social-card__icon {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .hero-social-card__label {
        font-size: 0.62rem;
        color: #64748b;
        font-weight: 500;
        letter-spacing: 0.04em;
      }

      .hero-portrait-column {
        display: flex;
        justify-content: center;
        align-items: flex-end;
      }

      .hero-portrait {
        width: min(680px, 100%);
        height: auto;
        object-fit: contain;
        display: block;
        filter: drop-shadow(0 24px 60px rgba(37,99,235,0.25));
      }

      @media (max-width: 1024px) {
        .hero-content__heading,
        .hero-content__name-gradient { white-space: normal; }
        .hero-section__container { grid-template-columns: 1fr 1fr; }
        .portfolio-nav__cv-btn { display: none; }
        .portfolio-nav__hamburger { display: flex; }
        .portfolio-nav__links { display: none; }
      }

      @media (max-width: 900px) {
        .hero-section__container { grid-template-columns: 1fr; gap: 2rem; }
        .hero-portrait-column { order: -1; }
        .hero-portrait { width: min(380px, 72vw); }
        .hero-content { align-items: center; text-align: center; }
        .hero-content__heading { white-space: normal; font-size: clamp(2rem, 6vw, 3rem); }
        .hero-content__name-gradient { white-space: normal; }
        .hero-content__bio { max-width: 100%; }
        .hero-content__cta-group,
        .hero-social-links { justify-content: center; }
      }

      @media (max-width: 480px) {
        .hero-portrait { width: min(260px, 75vw); }
        .hero-cta { padding: 0.75rem 1.5rem; font-size: 0.85rem; }
        .hero-social-card { width: 68px; height: 68px; }
      }

      @media (prefers-reduced-motion: reduce) {
        .hero-bg-orb,
        .hero-bg-particle,
        .hero-content__availability-dot,
        .hero-cta,
        .hero-social-card,
        .portfolio-nav__link,
        .portfolio-nav__cv-btn { animation: none; transition: none; }
      }
    `}</style>
  </>
);

export default Home;