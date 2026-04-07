import styles from './Projects.module.css';

const projects = [
  { 
    title: "Condominio Las Palmas", 
    cat: "Inmobiliaria", 
    desc: "Embudo de ventas para lotes de lujo con captación segmentada.",
    stack: ["WordPress", "GHL CRM", "Meta API"],
    flow: "Meta Ads → Landing → GHL Automation",
    link: "https://proyectocondominiolaspalmas.com/lotes-exclusivos-las-palmas/" 
  },
  { 
    title: "Parcelación Al Bosque", 
    cat: "Inmobiliaria", 
    desc: "Estrategia de reserva online y nutrición automática de prospectos.",
    stack: ["WordPress", "GTM", "GHL"],
    flow: "Google Search → Landing → Lead Nurturing",
    link: "https://parcelacionalbosque.com/reserva-lote-al-bosque/" 
  },
  { 
    title: "Probien Colombia", 
    cat: "Medicina Regenerativa", 
    desc: "Tratamientos de regeneración dérmica de alta calidad.",
    stack: ["Next.js", "GA4", "Performance Opt."],
    flow: "Inbound Marketing → LP → High-Ticket Sale",
    link: "http://probiencolombia.com/desafio-hqs/" 
  },
  { 
    title: "Origen Co", 
    cat: "Vida Sostenible", 
    desc: "Refugios sostenibles: libertad y naturaleza sin trámites bancarios.",
    stack: ["WordPress", "SEO", "CRO"],
    flow: "Organic/Social → Landing → Lifestyle Sale",
    link: "https://origenco.online/refugio-sostenible/" 
  },
  { 
    title: "Arte Meddical", 
    cat: "Cirugía Plástica", 
    desc: "Diseño persuasivo y flujos de captación para estética quirúrgica.",
    stack: ["WordPress", "Vitals Opt.", "Google Ads"],
    flow: "Search Ads → LP → WhatsApp Conversion",
    link: "https://artemeddical.com/cirugia-plastica-extranjeras/" 
  },
  { 
    title: "Dra. Dahiana Olarte", 
    cat: "Odontología", 
    desc: "Sistema de agendamiento automático vía WhatsApp & GHL.",
    stack: ["GHL", "WhatsApp API", "Landing Page"],
    flow: "Social Media → LP → Appointment Booking",
    link: "https://dradahianaolarte.com/diseno-sonrisa-natural-sin-dolor-whatsapp/" 
  },
];

export default function Projects() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Casos de Estudio</h2>
        <p className={styles.subtitle}>
          Implementaciones técnicas diseñadas para maximizar el retorno de inversión (ROI) en nichos de alta demanda.
        </p>
      </div>
      
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <a 
            key={index} 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.card}
          >
            <div className={styles.cardHeader}>
              <span className={styles.category}>{project.cat}</span>
              <span className={styles.badge}>Performance & Lead Automation</span>
            </div>
            
            <div className={styles.info}>
              <h3>{project.title}</h3>
              <p className={styles.description}>{project.desc}</p>
              
              <div className={styles.stack}>
                {project.stack.map(tech => (
                  <span key={tech} className={styles.techTag}>{tech}</span>
                ))}
              </div>

              <div className={styles.flowBox}>
                <small>FLUJO DE CONVERSIÓN:</small>
                <p className={styles.flowText}>{project.flow}</p>
              </div>

              <span className={styles.linkText}>Visitar Proyecto Vivo ↗</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}