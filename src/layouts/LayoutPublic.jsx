import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function LayoutPublic({ children }) {
  return (
    <div className="w-full min-h-screen bg-black text-white">
      <Navbar />
      <main className="w-full">{children}</main>
      <Footer />
    </div>
  );
}