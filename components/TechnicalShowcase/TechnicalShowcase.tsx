"use client";
import { useState } from 'react';
import Image from 'next/image';
import styles from './TechnicalShowcase.module.css';

const technicalItems = [
  {
    title: "Infraestructura de Microservicios",
    desc: "Diseño de lógica avanzada para captación y nutrición de leads integrada con CRM y APIs externas.",
    image: "/images/testimonials/1.png",
    side: "left"
  },
  {
    title: "Automatización de Workflows",
    desc: "Optimización de infraestructura para tiendas online con gestión centralizada de stock, CRM y ventas.",
    image: "/images/testimonials/CO4.png",
    side: "right"
  },
  {
    title: "Dashboards en Tiempo Real",
    desc: "Desarrollo de interfaces interactivas para el monitoreo y análisis de métricas de negocio en tiempo real.",
    image: "/images/testimonials/DT1.png",
    side: "left"
  }
];

export default function TechnicalShowcase() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section className={styles.section}>
      <h2 className={styles.mainTitle}>Ingeniería y Soluciones Técnicas</h2>
      <div className={styles.container}>
        {technicalItems.map((item, index) => (
          <div key={index} className={`${styles.row} ${item.side === 'right' ? styles.reverse : ''}`}>
            <div 
              className={styles.imageBox} 
              onClick={() => setSelectedImg(item.image)} // Abre la imagen
            >
              <Image 
                src={item.image} 
                alt={item.title} 
                width={800} 
                height={600} 
                className={styles.img}
              />
              <div className={styles.zoomOverlay}>🔍 Click para ampliar</div>
            </div>
            <div className={styles.textBox}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL / LIGHTBOX */}
      {selectedImg && (
        <div className={styles.lightbox} onClick={() => setSelectedImg(null)}>
          <div className={styles.lightboxContent}>
            <Image 
              src={selectedImg} 
              alt="Ampliada" 
              fill
              className={styles.expandedImg}
            />
            <span className={styles.close}>&times;</span>
          </div>
        </div>
      )}
    </section>
  );
}