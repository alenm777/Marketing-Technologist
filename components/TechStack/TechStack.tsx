import styles from './TechStack.module.css';

const techLogos = [
  "Next.js", 
  "WordPress", 
  "GoHighLevel", 
  "Meta Ads", 
  "Google Ads", 
  "Make.com", 
  "GTM", 
  "GA4", 
  "WhatsApp API", 
  "Stripe"
];

export default function TechStack() {
  return (
    <section className={styles.container}>
      <p className={styles.label}>TECNOLOGÍAS QUE DOMINO PARA TU NEGOCIO:</p>
      
      <div className={styles.slider}>
        <div className={styles.slideTrack}>
          {/* Duplicamos la lista para crear el efecto de bucle infinito perfecto */}
          {[...techLogos, ...techLogos].map((logo, index) => (
            <div key={index} className={styles.slide}>
              <span className={styles.logoName}>{logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}