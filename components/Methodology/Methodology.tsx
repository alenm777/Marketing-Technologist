import styles from './Methodology.module.css';

const steps = [
  {
    num: "01",
    title: "Auditoría & Estrategia",
    desc: "Analizamos tu embudo actual y detectamos los cuellos de botella donde estás perdiendo ventas."
  },
  {
    num: "02",
    title: "Infraestructura & Automatización", 
    desc: "Implementamos GoHighLevel o conectamos tu CRM actual con n8n para crear flujos de trabajo robustos."
  },
  {
    num: "03",
    title: "Escalado de Ventas", // Regresamos al enfoque original
    desc: "Optimizamos tus campañas y procesos para maximizar la conversión y bajar tu costo de adquisición."
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