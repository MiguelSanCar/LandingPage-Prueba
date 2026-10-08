import { useState } from 'react'
import {
  metrics, problems, benefits, steps, useCases, testimonials, faq, finalCta, footer, BOOKING_URL,
} from '../data/content'
import { Icon, Reveal, SectionHeader } from './shared'
import './Sections.css'

export function Metrics() {
  return (
    <section className="metrics">
      <div className="container metrics__grid">
        {metrics.map((m, i) => (
          <Reveal key={m.label} delay={i * 80} className="metric">
            <strong className="grad-text">{m.value}</strong>
            <span>{m.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export function Problems() {
  return (
    <section id="problemas" className="section">
      <div className="container">
        <SectionHeader eyebrow={problems.eyebrow} title={problems.title} />
        <div className="grid grid--4">
          {problems.items.map((p, i) => (
            <Reveal key={p.title} delay={i * 80} className="card">
              <span className="icon-box icon-box--warn"><Icon name={p.icon} /></span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Benefits() {
  return (
    <section id="beneficios" className="section section--alt">
      <div className="container">
        <SectionHeader eyebrow={benefits.eyebrow} title={benefits.title} subtitle={benefits.subtitle} />
        <div className="grid grid--3">
          {benefits.items.map((b, i) => (
            <Reveal key={b.title} delay={(i % 3) * 80} className="card">
              <span className="icon-box"><Icon name={b.icon} /></span>
              <h3>{b.title}</h3>
              <p>{b.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function HowItWorks() {
  return (
    <section id="como-funciona" className="section">
      <div className="container">
        <SectionHeader eyebrow={steps.eyebrow} title={steps.title} />
        <ol className="steps">
          {steps.items.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 120} className="step">
              <span className="step__n">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </ol>
        <Reveal className="center-cta">
          <a href={BOOKING_URL} className="btn btn--primary btn--lg">
            Empieza por el diagnóstico gratuito <Icon name="arrow" size={18} />
          </a>
        </Reveal>
      </div>
    </section>
  )
}

export function UseCases() {
  return (
    <section id="casos" className="section section--alt">
      <div className="container">
        <SectionHeader eyebrow={useCases.eyebrow} title={useCases.title} />
        <div className="usecases">
          {useCases.items.map((u, i) => (
            <Reveal key={u.title} delay={(i % 4) * 70} className="usecase">
              <span className="icon-box"><Icon name={u.icon} /></span>
              <div>
                <h3>{u.title}</h3>
                <p>{u.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader eyebrow={testimonials.eyebrow} title={testimonials.title} />
        <div className="grid grid--3">
          {testimonials.items.map((t, i) => (
            <Reveal as="figure" key={t.name} delay={i * 100} className="card quote">
              <div className="quote__stars" aria-label="5 de 5 estrellas">★★★★★</div>
              <blockquote>“{t.quote}”</blockquote>
              <figcaption>
                <span className="avatar">{t.name.split(' ').map((w) => w[0]).join('')}</span>
                <div><strong>{t.name}</strong><small>{t.role}</small></div>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="section section--alt">
      <div className="container container--narrow">
        <SectionHeader eyebrow={faq.eyebrow} title={faq.title} />
        <div className="faq">
          {faq.items.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={f.q} className={`faq__item ${isOpen ? 'is-open' : ''}`}>
                <button className="faq__q" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? -1 : i)}>
                  {f.q}
                  <Icon name="plus" size={20} />
                </button>
                <div className="faq__a"><div><p>{f.a}</p></div></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function FinalCTA() {
  return (
    <section id="reservar" className="section">
      <div className="container">
        <Reveal className="final">
          <h2>{finalCta.title}</h2>
          <p>{finalCta.text}</p>
          <a href={BOOKING_URL} className="btn btn--primary btn--lg">
            {finalCta.cta} <Icon name="arrow" size={18} />
          </a>
          <small>{finalCta.note}</small>
        </Reveal>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a href="#" className="logo"><span className="logo__mark">A</span>Automatiza<span className="logo__360">360</span></a>
          <p>{footer.tagline}</p>
        </div>
        {footer.columns.map((c) => (
          <div key={c.title}>
            <h4>{c.title}</h4>
            <ul>{c.links.map((l) => <li key={l.label}><a href={l.href}>{l.label}</a></li>)}</ul>
          </div>
        ))}
      </div>
      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} Automatiza360. Todos los derechos reservados.</span>
      </div>
    </footer>
  )
}
