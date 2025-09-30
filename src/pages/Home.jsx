import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import About from '../components/sections/About';


export default function Home() {
  return (
    <div classNa
    me="min-h-screen bg-black text-white">
     <Navbar />
      <Hero />    
      <About />
    <Services /> 
      <Footer />
    </div>
  );
}