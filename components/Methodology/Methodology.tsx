import styles from './Methodology.module.css';

const steps = [
  {
    num: "01",
    title: "Auditoría & Estrategia",
    desc: "Analizo tu infraestructura actual, detecto fugas de leads y diseño un embudo a medida para tu nicho específico."
  },
  {
    num: "02",
    title: "Implementación Tech",
    desc: "Despliegue de LPs de alta velocidad, integración de CRM (GHL) y automatización de flujos de nutrición 24/7."
  },
  {
    num: "03",
    title: "Escalado & Optimización",
    desc: "Lanzamiento de campañas de performance (Meta/Google) y ajuste basado en datos para maximizar tu ROI."
  }
];

export default function Methodology() {
  return (
    // Añadimos id="metodologia" para que el botón del Hero pueda "apuntar" aquí
    <section id="metodologia" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>MÉTODO PROBADO</span>
          <h2 className={styles.title}>Cómo escalamos tu negocio</h2>
        </div>

        <div className={styles.grid}>
          {steps.map((step, index) => (
            <div key={index} className={styles.card}>
              <span className={styles.number}>{step.num}</span>
              <h3 className={styles.cardTitle}>{step.title}</h3>
              <p className={styles.cardDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}