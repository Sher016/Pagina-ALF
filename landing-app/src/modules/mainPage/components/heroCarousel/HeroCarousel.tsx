import { useHeroCarousel } from "./HeroCarousel.hook";
import './HeroCarousel.css';

export function HeroCarousel() {
  const { slides, slide, goTo ,current, animating} = useHeroCarousel();
  return (
    <section className="hero-carousel">
      {slides.map((s, i) => (
        <div
          key={i}
          className={`hero-bg ${i === current ? 'active' : ''}`}
          style={{ backgroundImage: `url(${s.image})` }}
        />
      ))}

      <div className="hero-overlay" />
      <div className={`hero-content ${animating ? 'fade-out' : 'fade-in'}`}>
        {slide.tag && <span className="hero-tag">{slide.tag}</span>}
        <h1 className="hero-title">
          {slide.title}{' '}
          <span className="hero-highlight">{slide.highlight}</span>
          <br />
          {slide.subtitle}
        </h1>
        <div className="hero-actions">
          <a href={slide.primaryCta.href} className="hero-btn primary">
            {slide.primaryCta.label}
          </a>
          <a href={slide.secondaryCta.href} className="hero-btn secondary">
            {slide.secondaryCta.label}
          </a>
        </div>
      </div>

      <div className="hero-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero-dot ${i === current ? 'active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="hero-progress">
        <div key={current} className="hero-progress-bar" />
      </div>
    </section>
  );
}
