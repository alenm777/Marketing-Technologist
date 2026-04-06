import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  // Título optimizado para buscadores y clientes
  title: 'Marketing Technologist | Especialista en Automatización & Performance',
  description: 'Infraestructuras digitales de alta conversión, integración de CRM GoHighLevel y embudos de venta automatizados.',
  icons: {
    icon: '/favicon.ico',
  },
  // Esto ayuda a que se vea bien al compartir el link
  openGraph: {
    title: 'Marketing Technologist | Automatización & Ventas',
    description: 'Convirtiendo tráfico en activos digitales rentables.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        {/* El contenido de tu página (Hero, TechStack, etc.) */}
        {children}

        {/* --- ESTRUCTURA DE CAPTACIÓN: CHAT WIDGET GOHIGHLEVEL --- */}
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="69d41fe034c0449292cd0499" 
          strategy="lazyOnload" 
        />
      </body>
    </html>
  );
}