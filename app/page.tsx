import Hero from '../components/Hero/Hero';
import styles from './page.module.css'
import Methodology from '../components/Methodology/Methodology';
import Projects from '../components/Projects/Projects';
import TechStack from '../components/TechStack/TechStack';
import Testimonials from '../components/Testimonials/Testimonials';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <TechStack />
      <Methodology />
      <Testimonials /> 
      <Projects />
      <Footer />
    </main>
  );
}