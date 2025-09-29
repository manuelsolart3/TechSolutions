import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function LayoutPublic({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}