import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Deals from './components/Deals';
import CategoryCards from './components/CategoryCards';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Deals />
      <CategoryCards />
    </div>
  );
}

export default App;