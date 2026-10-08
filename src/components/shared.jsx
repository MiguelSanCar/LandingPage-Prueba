import { useEffect, useRef, useState } from 'react'

const PATHS = {
  clock: 'M12 7v5l3 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  repeat: 'M17 2l4 4-4 4M3 11V9a3 3 0 013-3h15M7 22l-4-4 4-4M21 13v2a3 3 0 01-3 3H3',
  funnel: 'M3 4h18l-7 8v6l-4 2v-8L3 4z',
  link: 'M10 14a5 5 0 007 0l3-3a5 5 0 00-7-7l-1 1M14 10a5 5 0 00-7 0l-3 3a5 5 0 007 7l1-1',
  bolt: 'M13 2L4 14h7l-1 8 9-12h-7l1-8z',
  target: 'M12 21a9 9 0 100-18 9 9 0 000 18zM12 16a4 4 0 100-8 4 4 0 000 8zM12 12h.01',
  hourglass: 'M6 2h12M6 22h12M7 2v4l5 6-5 6v4M17 2v4l-5 6 5 6v4',
  plug: 'M9 2v6M15 2v6M6 8h12v4a6 6 0 01-12 0V8zM12 18v4',
  chart: 'M3 3v18h18M7 15l4-4 3 3 5-6',
  shield: 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3zM9 12l2 2 4-4',
  inbox: 'M22 12h-6l-2 3h-4l-2-3H2M5 5h14l3 7v7H2v-7l3-7z',
  message: 'M21 12a8 8 0 01-11.6 7.1L3 21l1.9-6.4A8 8 0 1121 12z',
  calendar: 'M7 2v4M17 2v4M3 9h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z',
  sparkle: 'M12 3l2.2 5.8L20 11l-5.8 2.2L12 19l-2.2-5.8L4 11l5.8-2.2L12 3z',
  headset: 'M4 14v-2a8 8 0 0116 0v2M4 14h3v5H4zM17 14h3v5h-3zM20 19a4 4 0 01-4 3h-3',
  file: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM14 2v6h6M9 13h6M9 17h6',
  sync: 'M21 12a9 9 0 01-15.5 6.2L3 16M3 12a9 9 0 0115.5-6.2L21 8M21 3v5h-5M3 21v-5h5',
  arrow: 'M5 12h14M13 6l6 6-6 6',
  check: 'M5 13l4 4L19 7',
  plus: 'M12 5v14M5 12h14',
  mail: 'M3 6h18v12H3zM3 7l9 7 9-7',
  whatsapp: 'M20 12a8 8 0 01-11.8 7L4 20l1.1-4A8 8 0 1120 12z',
  db: 'M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6',
  form: 'M5 3h14v18H5zM9 8h6M9 12h6M9 16h3',
}

export function Icon({ name, size = 22, stroke = 1.8 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={PATHS[name]} />
    </svg>
  )
}

export function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <Reveal className="section-head">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </Reveal>
  )
}

/** Anima la entrada del contenido al hacer scroll. `delay` en ms. */
export function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) { setVisible(true); return }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); io.disconnect() }
    }, { threshold: 0.15 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ '--delay': `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  )
}
