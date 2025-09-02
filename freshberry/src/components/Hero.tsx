export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-gray-50 to-blue-50 py-12 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="text-sm text-gray-600 mb-2 animate-fade-slide-up" style={{ animationDelay: '200ms' }}>Flat 30% Off</div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 animate-fade-slide-up" style={{ animationDelay: '400ms' }}>
              Explore <span className="text-blue-600">Healthy</span>
              <br />& Fresh Fruits
            </h1>
            <button className="border-2 border-gray-800 px-6 py-3 rounded-lg hover:bg-gray-800 hover:text-white transition-colors animate-fade-slide-up" style={{ animationDelay: '600ms' }}>
              Shop Now
            </button>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative w-full h-64 md:h-96 bg-gradient-to-br from-blue-200 to-purple-300 rounded-full flex items-center justify-center">
              <div className="text-6xl md:text-8xl">🫐</div>
              <div className="absolute top-4 right-8 text-2xl">🦋</div>
              <div className="absolute bottom-8 left-4 text-xl">🫐</div>
              <div className="absolute top-12 left-12 text-lg">🫐</div>
              <div className="absolute bottom-4 right-12 text-xl">🫐</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}