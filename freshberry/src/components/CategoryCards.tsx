import { useState, useEffect, useRef } from 'react';

export default function CategoryCards() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const products = [
    {
      id: 1,
      category: 'Snacks',
      title: 'Ground Nuts Oil Pack',
      price: '$15',
      originalPrice: '$22',
      quantity: '500g',
      rating: 4,
      image: '🥜',
      label: 'NEW'
    },
    {
      id: 2,
      category: 'Fruit',
      title: 'Red Cherry Serbia',
      price: '$6',
      originalPrice: '$8',
      quantity: '250g',
      rating: 4,
      image: '🍒'
    },
    {
      id: 3,
      category: 'Leaves',
      title: 'Fresh Coriander',
      price: '$1',
      status: 'Out Of Stock',
      rating: 4,
      image: '🌿'
    },
    {
      id: 4,
      category: 'Chips',
      title: 'Crunchy Potato Chips',
      price: '$25',
      status: 'Out Of Stock',
      rating: 4,
      image: '🥔'
    }
  ];

  return (
    <section ref={sectionRef} className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              New <span className="text-blue-600">Arrivals</span>
            </h2>
            <p className="text-gray-600">Shop online for new arrivals and get free shipping!</p>
          </div>
          <div className="flex flex-wrap items-center space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-blue-600 hover:underline">All</a>
            <span className="text-gray-400">/</span>
            <a href="#" className="text-gray-600 hover:text-blue-600">Snack & Spices</a>
            <span className="text-gray-400">/</span>
            <a href="#" className="text-gray-600 hover:text-blue-600">Fruits</a>
            <span className="text-gray-400">/</span>
            <a href="#" className="text-gray-600 hover:text-blue-600">Vegetables</a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`bg-white border rounded-lg p-4 transition-all duration-300 ${
                isVisible ? 'animate-fade-slide-up' : 'opacity-0 translate-y-5'
              } ${
                hoveredCard === product.id ? 'shadow-lg scale-105' : 'shadow-sm'
              }`}
              style={{ animationDelay: isVisible ? `${index * 150}ms` : '0ms' }}
              onMouseEnter={() => setHoveredCard(product.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative mb-4">
                <div className="text-6xl text-center py-8">{product.image}</div>
                {product.label && (
                  <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                    {product.label}
                  </div>
                )}
                {hoveredCard === product.id && (
                  <div className="absolute bottom-2 right-2 flex space-x-2">
                    <button className="bg-white shadow-md p-2 rounded-full hover:bg-gray-100">❤️</button>
                    <button className="bg-white shadow-md p-2 rounded-full hover:bg-gray-100">👁️</button>
                    <button className="bg-white shadow-md p-2 rounded-full hover:bg-gray-100">⚖️</button>
                    <button className="bg-white shadow-md p-2 rounded-full hover:bg-gray-100">🛒</button>
                  </div>
                )}
              </div>
              
              <div className="text-sm text-gray-500 mb-1">{product.category}</div>
              <h3 className="font-semibold text-gray-800 mb-2">{product.title}</h3>
              
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`text-sm ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`}>
                    ⭐
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-lg">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-gray-400 line-through text-sm">{product.originalPrice}</span>
                  )}
                </div>
                <div className="text-sm text-gray-600">
                  {product.quantity || product.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}