import Image from 'next/image';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: "Dra. Dahiana Olarte",
    specialty: "Odontología Integral y Estética",
    quote: "Alén implementó un sistema de captación que nos permite agendar pacientes de forma automática 24/7. Su enfoque en la conversión fue clave para nuestro crecimiento.",
    image: "/images/testimonials/dahiana.png", 
  },
  {
    name: "Dr. Óscar Rodríguez",
    specialty: "Cirujano Plástico y Microcirugía",
    quote: "Una inversión real. Su trabajo de SEO técnico y optimización nos llevó a los primeros lugares de Google, aumentando nuestra autoridad digital exponencialmente.",
    image: "/images/testimonials/oscar.png",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Confianza de Profesionales de Élite</h2>
      </div>

      <div className={styles.grid}>
        {testimonials.map((test, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.photoWrapper}>
              <div className={styles.glow} />
              <Image 
                src={test.image} 
                alt={test.name} 
                width={120} 
                height={120} 
                className={styles.photo}
                priority
              />
            </div>
            
            <div className={styles.content}>
              <svg className={styles.quoteIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017C10.4647 13 10.017 12.5523 10.017 12V5C10.017 4.44772 10.4647 4 11.017 4H20.017C21.1216 4 22.017 4.89543 22.017 6V15C22.017 18.866 18.883 22 15.017 22H14.017V21ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.017C5.46472 8 5.017 8.44772 5.017 9V12C5.017 12.5523 4.56929 13 4.017 13H2.017C1.46472 13 1.017 12.5523 1.017 12V5C1.017 4.44772 1.46472 4 2.017 4H11.017C12.1216 4 13.017 4.89543 13.017 6V15C13.017 18.866 9.88299 22 6.017 22H5.017V21Z" />
              </svg>
              <p className={styles.quote}>{test.quote}</p>
              <div className={styles.info}>
                <h3 className={styles.name}>{test.name}</h3>
                <p className={styles.specialty}>{test.specialty}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}