import { useState, useEffect, useRef } from 'react';

export default function Deals() {
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

  const deals = [
    {
      id: 1,
      category: 'Chocos',
      title: 'Mixed Fruits Chocolates Pack',
      price: '$25',
      originalPrice: '$30',
      quantity: '1 Pack',
      rating: 4,
      image: '🍫',
      label: 'NEW'
    },
    {
      id: 2,
      category: 'Juice',
      title: 'Organic Apple Juice Pack',
      price: '$15',
      quantity: '100 ml',
      stock: '3 Left',
      rating: 4,
      image: '🧃',
      label: 'HOT'
    },
    {
      id: 3,
      category: 'Juice',
      title: 'Mixed Almond nuts juice Pack',
      price: '$32',
      originalPrice: '$39',
      quantity: '250 g',
      rating: 4,
      image: '🥜',
      label: 'SALE'
    },
    {
      id: 4,
      category: 'Fruits',
      title: 'Fresh Mango Slice Juice',
      price: '$25',
      status: 'Out Of Stock',
      rating: 4,
      image: '🥭',
      label: 'SALE'
    }
  ];

  return (
    <section ref={sectionRef} className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              Day Of The <span className="text-blue-600">Deal</span>
            </h2>
            <p className="text-gray-600">Don't wait. The time will never be just right.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {deals.map((deal, index) => (
            <div
              key={deal.id}
              className={`bg-white border rounded-lg p-4 transition-all duration-300 ${
                isVisible ? 'animate-fade-slide-up' : 'opacity-0 translate-y-5'
              } ${
                hoveredCard === deal.id ? 'shadow-lg scale-105' : 'shadow-sm'
              }`}
              style={{ animationDelay: isVisible ? `${index * 150}ms` : '0ms' }}
              onMouseEnter={() => setHoveredCard(deal.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative mb-4">
                <div className="text-6xl text-center py-8">{deal.image}</div>
                <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  {deal.label}
                </div>
              </div>
              
              <div className="text-sm text-gray-500 mb-1">{deal.category}</div>
              <h3 className="font-semibold text-gray-800 mb-2">{deal.title}</h3>
              
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`text-sm ${i < deal.rating ? 'text-yellow-400' : 'text-gray-300'}`}>
                    ⭐
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-lg">{deal.price}</span>
                  {deal.originalPrice && (
                    <span className="text-gray-400 line-through text-sm">{deal.originalPrice}</span>
                  )}
                </div>
                <div className="text-sm text-gray-600">
                  {deal.quantity || deal.stock || deal.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}