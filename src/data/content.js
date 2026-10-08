// Todo el copy de la web vive aquí. Edita textos sin tocar los componentes.

export const BOOKING_URL = '#reservar' // Sustituir por enlace de Calendly / Cal.com

export const nav = [
  { label: 'Problemas', href: '#problemas' },
  { label: 'Beneficios', href: '#beneficios' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Casos de uso', href: '#casos' },
  { label: 'FAQ', href: '#faq' },
]

export const hero = {
  badge: 'Diagnóstico de automatización gratuito',
  title: 'Vende más y trabaja menos: tu negocio, funcionando en piloto automático',
  subtitle:
    'Implementamos automatizaciones e inteligencia artificial que responden a tus clientes al instante, hacen el seguimiento comercial por ti y conectan tus herramientas, sin que contrates a más personal.',
  primaryCta: 'Reserva una llamada',
  secondaryCta: 'Ver cómo funciona',
  note: 'Llamada de 30 min · Sin compromiso · Plan de acción incluido',
}

export const metrics = [
  { value: '+120', label: 'Procesos automatizados' },
  { value: '15 h', label: 'Ahorradas por semana, de media' },
  { value: '< 1 min', label: 'Tiempo de respuesta a leads' },
  { value: '+38 %', label: 'Más reuniones comerciales' },
]

export const problems = {
  eyebrow: 'El problema',
  title: 'Si tu equipo trabaja mucho pero el negocio no escala, el cuello de botella no son las personas',
  items: [
    { icon: 'clock', title: 'Leads que se enfrían', text: 'Un cliente escribe y nadie responde hasta el día siguiente. Para entonces ya habló con tu competencia.' },
    { icon: 'repeat', title: 'Tareas repetitivas a mano', text: 'Copiar datos, enviar recordatorios, actualizar hojas. Horas que no generan ni un euro.' },
    { icon: 'funnel', title: 'Seguimiento comercial irregular', text: 'Presupuestos que nadie retoma y oportunidades que se pierden por falta de tiempo, no de interés.' },
    { icon: 'link', title: 'Herramientas desconectadas', text: 'CRM, WhatsApp, email y calendario viven por separado. La información se duplica o se pierde.' },
  ],
}

export const benefits = {
  eyebrow: 'Beneficios',
  title: 'Más eficiencia sin ampliar plantilla',
  subtitle: 'Cada automatización está diseñada para un resultado de negocio medible, no para sumar tecnología.',
  items: [
    { icon: 'bolt', title: 'Respuesta inmediata', text: 'Atiende consultas por WhatsApp, email y web en segundos, a cualquier hora.' },
    { icon: 'target', title: 'Seguimiento que no falla', text: 'Cada lead recibe el contacto adecuado en el momento justo, hasta que decide.' },
    { icon: 'hourglass', title: 'Tiempo recuperado', text: 'Elimina las tareas manuales y dedica tu equipo a vender y a atender mejor.' },
    { icon: 'plug', title: 'Todo conectado', text: 'CRM, formularios, calendarios y bases de datos hablando entre sí, sin copiar y pegar.' },
    { icon: 'chart', title: 'Más ventas', text: 'Capta, cualifica y cierra con un proceso comercial que funciona todos los días.' },
    { icon: 'shield', title: 'Control y fiabilidad', text: 'Sistemas monitorizados, con avisos y soporte para que nada se rompa en silencio.' },
  ],
}

export const steps = {
  eyebrow: 'Cómo funciona',
  title: 'De la primera llamada a tu negocio automatizado en 3 pasos',
  items: [
    { n: '01', title: 'Diagnóstico gratuito', text: 'En una llamada analizamos tus procesos y detectamos dónde pierdes tiempo y ventas. Sales con un mapa claro de oportunidades.' },
    { n: '02', title: 'Diseño e implementación', text: 'Diseñamos y construimos las automatizaciones y agentes de IA sobre las herramientas que ya usas. Sin migraciones dolorosas.' },
    { n: '03', title: 'Medición y mejora', text: 'Monitorizamos resultados, ajustamos y escalamos lo que funciona. Tú ves el impacto en horas y en ventas.' },
  ],
}

export const useCases = {
  eyebrow: 'Casos de uso',
  title: 'Automatizaciones que ya funcionan en negocios como el tuyo',
  items: [
    { icon: 'inbox', title: 'Captación automática de leads', text: 'Formularios, anuncios y web conectados a tu CRM al instante.' },
    { icon: 'message', title: 'Seguimiento por email o WhatsApp', text: 'Secuencias personalizadas que se detienen cuando el cliente responde.' },
    { icon: 'calendar', title: 'Agendado automático de reuniones', text: 'El lead elige hueco y se confirma solo, con recordatorios incluidos.' },
    { icon: 'sparkle', title: 'Clasificación de leads con IA', text: 'Puntúa y prioriza oportunidades para que vendas primero a quien más probabilidad tiene.' },
    { icon: 'headset', title: 'Atención al cliente automatizada', text: 'Un agente de IA resuelve dudas frecuentes y escala a una persona cuando hace falta.' },
    { icon: 'file', title: 'Presupuestos y recordatorios', text: 'Envío, seguimiento y aviso de vencimiento sin que nadie lo tenga que recordar.' },
    { icon: 'sync', title: 'Sincronización CRM y herramientas', text: 'Datos coherentes entre CRM, facturación, hojas y herramientas internas.' },
  ],
}

// NOTA: testimonios de ejemplo. Sustituir por testimonios reales antes de publicar.
export const testimonials = {
  eyebrow: 'Testimonios',
  title: 'Negocios que dejaron de perseguir tareas',
  items: [
    { quote: 'Antes tardábamos medio día en responder a un lead. Ahora contesta en un minuto y llegamos a las reuniones con la información ya cualificada.', name: 'Laura Mendizábal', role: 'Directora · Agencia de marketing' },
    { quote: 'Recuperamos unas 12 horas semanales de administración. Lo mejor: no tuvimos que cambiar ninguna de las herramientas que ya usábamos.', name: 'Carlos Ibáñez', role: 'Fundador · Consultoría financiera' },
    { quote: 'El seguimiento de presupuestos era nuestro punto débil. Ahora ningún presupuesto se queda sin respuesta y las ventas lo han notado.', name: 'Marta Ruiz', role: 'Gerente · Reformas y construcción' },
  ],
}

export const faq = {
  eyebrow: 'FAQ',
  title: 'Preguntas frecuentes',
  items: [
    { q: '¿Qué incluye el diagnóstico gratuito?', a: 'Una llamada de unos 30 minutos donde revisamos tus procesos, identificamos tareas repetitivas y cuellos de botella, y te entregamos un plan priorizado de mejoras con IA y automatización. Sin compromiso.' },
    { q: '¿Tengo que cambiar las herramientas que ya uso?', a: 'No. Trabajamos sobre tu CRM, WhatsApp, email, calendario y bases de datos actuales, conectándolos entre sí.' },
    { q: '¿Cuánto tarda en estar funcionando?', a: 'Las primeras automatizaciones suelen estar operativas en 2 a 4 semanas, según la complejidad. Empezamos por lo que más impacto tiene.' },
    { q: '¿Necesito conocimientos técnicos?', a: 'Ninguno. Nos ocupamos del diseño, la implementación y el mantenimiento. Tú ves los resultados y decides qué escalar.' },
    { q: '¿Qué pasa si el agente de IA no sabe responder?', a: 'Lo configuramos para escalar a una persona de tu equipo con todo el contexto de la conversación, de modo que nunca se pierde un cliente.' },
    { q: '¿Para qué tipo de negocios funciona?', a: 'Pymes, agencias, consultores e infoproductores, en general cualquier negocio con procesos manuales y seguimiento comercial mejorable.' },
  ],
}

export const finalCta = {
  title: 'Descubre cuánto tiempo y cuántas ventas estás dejando escapar',
  text: 'Reserva tu diagnóstico gratuito. En 30 minutos sabrás qué automatizar primero y qué impacto puede tener en tu negocio.',
  cta: 'Reserva una llamada',
  note: 'Sin compromiso · Plazas limitadas cada semana',
}

export const footer = {
  tagline: 'Automatización e IA para negocios que quieren crecer sin más trabajo manual.',
  columns: [
    { title: 'Navegación', links: [{ label: 'Beneficios', href: '#beneficios' }, { label: 'Cómo funciona', href: '#como-funciona' }, { label: 'Casos de uso', href: '#casos' }, { label: 'FAQ', href: '#faq' }] },
    { title: 'Legal', links: [{ label: 'Aviso legal', href: '#' }, { label: 'Privacidad', href: '#' }, { label: 'Cookies', href: '#' }] },
    { title: 'Contacto', links: [{ label: 'hola@automatiza360.com', href: '#' }, { label: 'LinkedIn', href: '#' }, { label: 'Instagram', href: '#' }] },
  ],
}
