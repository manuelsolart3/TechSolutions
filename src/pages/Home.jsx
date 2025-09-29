import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import About from '../components/sections/About';
import CTA from '../components/sections/CTA';

export default function Home() {
  return (
    <div className="bg-black">
      <Hero />
      <Services />
      <About />
      <CTA />
    </div>
  );
}