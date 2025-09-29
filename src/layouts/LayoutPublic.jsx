import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

export default function LayoutPublic({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
