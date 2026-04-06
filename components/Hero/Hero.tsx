import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <span className={styles.badge}>Marketing Technologist & Full Stack</span>
        <h1 className={styles.title}>
          Desarrollo infraestructuras que <span className={styles.highlight}>convierten visitas en ventas</span>.
        </h1>
        <p className={styles.description}>
          Especialista en WordPress de alto rendimiento, automatizaciones con GoHighLevel e ingeniería de datos para crecimiento de negocios.
        </p>
        
        <div className={styles.actions}>
          {/* BOTÓN PRIMARIO: El objetivo principal es que te escriban */}
          <a 
            href="https://wa.link/qmebe6" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.primaryBtn}
          >
            Contactar
          </a>

          {/* BOTÓN SECUNDARIO: Navegación interna a la metodología */}
          <a href="#metodologia" className={styles.secondaryBtn}>
            Ver Metodología
          </a>
        </div>
      </div>
    </section>
  );
}