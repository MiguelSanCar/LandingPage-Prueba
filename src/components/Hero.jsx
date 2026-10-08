import { hero, BOOKING_URL } from '../data/content'
import { Icon } from './shared'
import HeroVisual from './HeroVisual'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__glow hero__glow--a" />
      <div className="hero__glow hero__glow--b" />
      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="hero__badge">
            <span className="hero__dot" /> {hero.badge}
          </span>
          <h1 className="hero__title">
            Vende más y trabaja menos: <span className="grad-text">tu negocio en piloto automático</span>
          </h1>
          <p className="hero__subtitle">{hero.subtitle}</p>
          <div className="hero__actions">
            <a href={BOOKING_URL} className="btn btn--primary btn--lg">
              {hero.primaryCta} <Icon name="arrow" size={18} />
            </a>
            <a href="#como-funciona" className="btn btn--ghost btn--lg">{hero.secondaryCta}</a>
          </div>
          <p className="hero__note"><Icon name="check" size={16} stroke={2.4} /> {hero.note}</p>
        </div>
        <HeroVisual />
      </div>
    </section>
  )
}
