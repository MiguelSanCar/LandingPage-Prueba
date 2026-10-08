import { Icon } from './shared'
import './HeroVisual.css'

// Visual del hero: mini-dashboard con flujo de automatización.
const flow = [
  { icon: 'whatsapp', title: 'Nuevo mensaje', sub: 'WhatsApp · Lead web', tone: 'in' },
  { icon: 'sparkle', title: 'IA clasifica el lead', sub: 'Interés alto · 92/100', tone: 'ai' },
  { icon: 'calendar', title: 'Reunión agendada', sub: 'Jueves 11:00 · confirmada', tone: 'out' },
]

export default function HeroVisual() {
  return (
    <div className="hv" aria-hidden="true">
      <div className="hv__panel">
        <div className="hv__bar">
          <i /><i /><i />
          <span>Flujo · Captación y ventas</span>
          <b className="hv__live">● Activo</b>
        </div>

        <ul className="hv__flow">
          {flow.map((s, i) => (
            <li key={s.title} className={`hv__node hv__node--${s.tone}`} style={{ '--i': i }}>
              <span className="hv__icon"><Icon name={s.icon} size={20} /></span>
              <div>
                <strong>{s.title}</strong>
                <small>{s.sub}</small>
              </div>
              <Icon name="check" size={16} stroke={2.6} />
            </li>
          ))}
        </ul>

        <div className="hv__stats">
          <div><small>Respuesta media</small><strong>42 s</strong></div>
          <div><small>Leads este mes</small><strong>318</strong></div>
          <div className="hv__spark">
            <svg viewBox="0 0 100 36" preserveAspectRatio="none">
              <defs>
                <linearGradient id="hvg" x1="0" x2="1"><stop offset="0" stopColor="#ef4444" /><stop offset="1" stopColor="#fb7185" /></linearGradient>
              </defs>
              <path d="M0 30 L14 26 L28 28 L42 18 L56 20 L70 10 L84 12 L100 3" fill="none" stroke="url(#hvg)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      <div className="hv__float hv__float--a">
        <span className="hv__icon hv__icon--green"><Icon name="clock" size={18} /></span>
        <div><strong>+15 h / semana</strong><small>Tiempo recuperado</small></div>
      </div>
      <div className="hv__float hv__float--b">
        <span className="hv__icon"><Icon name="mail" size={18} /></span>
        <div><strong>Seguimiento enviado</strong><small>Presupuesto #204</small></div>
      </div>
    </div>
  )
}
