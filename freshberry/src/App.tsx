import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Deals from './components/Deals';
import CategoryCards from './components/CategoryCards';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Deals />
      <CategoryCards />
      <Footer />
    </div>
  );
}

export default App;