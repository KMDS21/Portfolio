import profileImg from '../images/linkdin profile.jpg';
import A1 from '../images/A1.jpeg';
import A2 from '../images/A2.jpeg';
import A3 from '../images/A3.jpeg';
import A4 from '../images/A4.jpeg';
import A5 from '../images/A5.jpeg';
import A6 from '../images/A6.jpeg';

const photoCards = [
  { src: A1, alt: 'Work photo 1' },
  { src: A2, alt: 'Work photo 2' },
  { src: A3, alt: 'Work photo 3' },
  { src: A4, alt: 'Work photo 4' },
  { src: A5, alt: 'Work photo 5' },
  { src: A6, alt: 'Work photo 6' },
];

const About = () => (
  <>
    <section id="about" className="about-section">

      <div className="about-bg-orb about-bg-orb--blue"   aria-hidden="true" />
      <div className="about-bg-orb about-bg-orb--indigo" aria-hidden="true" />

      <div className="about-section__container">

        <div className="about-top-grid">

          <div className="about-bio">
            <p className="about-bio__eyebrow">Get to know me</p>
            <h2 className="about-bio__heading">About Me</h2>
            <div className="about-bio__divider" aria-hidden="true" />
            <p className="about-bio__body">
              Motivated and detail oriented Information Technology undergraduate pursuing a
              BICT (Hons) degree with specialisation in Software System Technology at the
              University of Kelaniya. Skilled in Flutter, Firebase, IoT, and real-time systems.
            </p>
            <p className="about-bio__body">
              Currently serving as President of the Information Technology Students' Association,
              leading initiatives that bridge academic learning with industry exposure and hands-on
              project experience.
            </p>
          </div>

          <div className="about-photo-frame">
            <div className="about-photo-frame__inner-border" aria-hidden="true" />
            <img
              src={profileImg}
              alt="Kaveesha De Silva"
              className="about-photo-frame__image"
            />
          </div>

        </div>

        <div className="about-carousel" aria-label="Work photo gallery">
          <div className="about-carousel__track">
            {[...photoCards, ...photoCards].map((card, i) => (
              <div className="about-carousel__card" key={i} aria-hidden={i >= photoCards.length}>
                <img
                  src={card.src}
                  alt={card.alt}
                  className="about-carousel__card-img"
                  loading="lazy"
                />
                <div className="about-carousel__card-shimmer" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>

    <style>{`

      .about-section {
        position: relative;
        overflow: hidden;
        padding: 7rem 0 6rem;
        background: #080d1a;
      }

      .about-bg-orb {
        position: absolute;
        border-radius: 50%;
        filter: blur(90px);
        pointer-events: none;
        z-index: 0;
      }
      .about-bg-orb--blue {
        width: 500px; height: 500px;
        top: -80px; left: -100px;
        background: radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%);
        animation: about-orb-a 14s ease-in-out infinite alternate;
      }
      .about-bg-orb--indigo {
        width: 420px; height: 420px;
        bottom: 0; right: -80px;
        background: radial-gradient(circle, rgba(99,102,241,0.13) 0%, transparent 70%);
        animation: about-orb-b 18s ease-in-out infinite alternate-reverse;
      }
      @keyframes about-orb-a {
        from { transform: translate(0, 0); }
        to   { transform: translate(30px, 25px); }
      }
      @keyframes about-orb-b {
        from { transform: translate(0, 0); }
        to   { transform: translate(-25px, -20px); }
      }

      .about-section__container {
        position: relative;
        z-index: 1;
        max-width: 1400px;
        margin: 0 auto;
        padding: 0 5vw;
        display: flex;
        flex-direction: column;
        gap: 4rem;
      }

      .about-top-grid {
        display: grid;
        grid-template-columns: 7fr 5fr;
        gap: 4rem;
        align-items: flex-start;
      }

      .about-bio {
        display: flex;
        flex-direction: column;
      }

      .about-bio__eyebrow {
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        color: #3b82f6;
        margin: 0 0 0.75rem;
      }

      .about-bio__heading {
        font-size: clamp(2.2rem, 4vw, 3.4rem);
        font-weight: 800;
        color: #f8fafc;
        margin: 0 0 1.25rem;
        line-height: 1.1;
      }

      .about-bio__divider {
        width: 48px;
        height: 3px;
        border-radius: 2px;
        background: linear-gradient(90deg, #2563eb, #60a5fa);
        margin-bottom: 1.75rem;
      }

      .about-bio__body {
        font-size: clamp(0.9rem, 1.4vw, 1rem);
        line-height: 1.85;
        color: #94a3b8;
        margin: 0 0 1.1rem;
        max-width: 560px;
        text-align: justify;
      }
      .about-bio__body:last-child { margin-bottom: 0; }

      .about-photo-frame {
        position: relative;
        border-radius: 1.25rem;
        overflow: hidden;
        width: 80%;
        height: 100%;
        background: #0f172a;
        box-shadow: 0 24px 60px rgba(0,0,0,0.45);
      }
      .about-photo-frame__inner-border {
        position: absolute;
        inset: 0;
        border-radius: 1.25rem;
        border: 1px solid rgba(59,130,246,0.2);
        z-index: 2;
        pointer-events: none;
      }
      .about-photo-frame__image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top center;
        display: block;
        border-radius: 1.25rem;
        transition: transform 0.3s ease;
      }
      .about-photo-frame:hover .about-photo-frame__image {
        transform: scale(1.06);
      }

      .about-carousel {
        width: 100%;
        overflow: hidden;
        position: relative;
        padding: 0.5rem 0;
      }
      .about-carousel::before,
      .about-carousel::after {
        content: '';
        position: absolute;
        top: 0; bottom: 0;
        width: 80px;
        z-index: 2;
        pointer-events: none;
      }
      .about-carousel::before {
        left: 0;
        background: linear-gradient(to right, #080d1a 0%, transparent 100%);
      }
      .about-carousel::after {
        right: 0;
        background: linear-gradient(to left, #080d1a 0%, transparent 100%);
      }

      .about-carousel__track {
        display: flex;
        gap: 1.25rem;
        width: max-content;
        animation: carousel-scroll 80s linear infinite;
      }
      .about-carousel__track:hover {
        animation-play-state: paused;
      }

      @keyframes carousel-scroll {
        from { transform: translateX(0); }
        to   { transform: translateX(-50%); }
      }

      .about-carousel__card {
        position: relative;
        width: 260px;
        height: 190px;
        border-radius: 1rem;
        overflow: hidden;
        flex-shrink: 0;
        background: #041230;
        border: 1px solid rgba(59,130,246,0.15);
        box-shadow: 0 8px 24px rgba(4, 13, 56, 0.35);
        transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s;
      }
      .about-carousel__card:hover {
        border-color: rgba(255, 255, 255, 0.45);
        box-shadow: 0 12px 36px rgba(4, 21, 56, 0.22);
        transform: translateY(-4px) scale(1.02);
      }

      .about-carousel__card-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: transform 0.4s ease;
      }
      .about-carousel__card:hover .about-carousel__card-img {
        transform: scale(1.02);
      }

      .about-carousel__card-shimmer {
        position: absolute;
        inset: 0;
        background: linear-gradient(
          135deg,
          transparent 40%,
          rgba(150, 247, 94, 0.06) 50%,
          transparent 60%
        );
        pointer-events: none;
      }

      @media (max-width: 900px) {
        .about-top-grid {
          grid-template-columns: 1fr;
          gap: 2.5rem;
        }
        .about-photo-frame {
          max-width: 300px;
          margin: 0 auto;
          aspect-ratio: 1 / 1;
        }
        .about-bio {
          align-items: center;
          text-align: center;
        }
        .about-bio__divider {
          margin-left: auto;
          margin-right: auto;
        }
        .about-bio__body { max-width: 100%; }
        .about-carousel__card {
          width: 200px;
          height: 140px;
        }
      }

      @media (max-width: 500px) {
        .about-carousel__card {
          width: 1000px;
          height: 115px;
        }
        .about-section { padding: 5rem 0 4rem; }
      }

      @media (prefers-reduced-motion: reduce) {
        .about-carousel__track { animation: none; }
        .about-photo-frame__image,
        .about-carousel__card,
        .about-carousel__card-img,
        .about-bg-orb { transition: none; animation: none; }
      }
    `}</style>
  </>
);

export default About;