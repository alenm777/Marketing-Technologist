import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            {/* Cambia M.Technologist por Tu Nombre si prefieres */}
            <h2 className={styles.logo}>Alén Muñoz</h2>
            <p>Estratega en Automatización & Performance.</p>
          </div>
          
          <div className={styles.contact}>
            <p className={styles.label}>¿TIENES UN PROYECTO?</p>
            {/* Cambia esto por tu email real */}
            <a href="mailto:hola@tuweb.com" className={styles.email}>alenmunoz.dev@gmail.com</a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {currentYear} • Construido con Next.js & GHL by Alén Muñoz</p>
          
          <div className={styles.socials}>
            {/* Reemplaza con tus links reales */}
            <a href="https://www.linkedin.com/in/al%C3%A9n-mu%C3%B1oz-107560231/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://wa.link/qmebe6" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
        </div>
      </div>
    </footer>
  );
}