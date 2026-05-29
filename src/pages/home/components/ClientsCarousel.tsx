import React, { useState, useRef, useEffect } from 'react';

const ClientsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [mobileCurrentIndex, setMobileCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const clientLogos = [
    {
      id: 1,
      image: 'https://static.readdy.ai/image/57af4532deb8c43acc9a197f5fa4a2a2/cdfbbbe8b6ac2e2df44abd6630f98b4d.jpeg',
      alt: 'Cliente 1'
    },
    {
      id: 2,
      image: 'https://static.readdy.ai/image/57af4532deb8c43acc9a197f5fa4a2a2/5c60814841ceb7d09986e5030e684126.jpeg',
      alt: 'Cliente 2'
    },
    {
      id: 3,
      image: 'https://static.readdy.ai/image/57af4532deb8c43acc9a197f5fa4a2a2/58416fb11253102badf4f0f77cbf14d4.jpeg',
      alt: 'Cliente 3'
    },
    {
      id: 4,
      image: 'https://static.readdy.ai/image/57af4532deb8c43acc9a197f5fa4a2a2/264bb3f9a8e6f2c6d9b36a280aba097e.jpeg',
      alt: 'Cliente 4'
    },
    {
      id: 5,
      image: 'https://static.readdy.ai/image/57af4532deb8c43acc9a197f5fa4a2a2/d314c3b194ad7177cfdd2f4411d10049.png',
      alt: 'Cliente 5'
    },
    {
      id: 6,
      image: 'https://storage.readdy-site.link/project_files/adc1edda-8bbe-43b4-83d8-590917cd7995/a626c9c3-5cfb-4f27-a247-a2e73b8a80de_liceu-.png?v=76966bab7e4ed0617d63d46a2b726cb3',
      alt: 'Liceu'
    }
  ];

  // Duplicar os logos para criar o efeito infinito
  const duplicatedLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  // Auto-scroll functionality para desktop
  useEffect(() => {
    if (!isPaused && !isDragging) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % clientLogos.length);
      }, 5000); // 5s desktop

      return () => clearInterval(interval);
    }
  }, [isPaused, isDragging, clientLogos.length]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.touches[0].pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (containerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - (containerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setTimeout(() => setIsPaused(false), 2000); // Resume after 2 seconds
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setTimeout(() => setIsPaused(false), 2000); // Resume after 2 seconds
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 3000);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % clientLogos.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 3000);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + clientLogos.length) % clientLogos.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 3000);
  };

  // Funções para o carrossel mobile
  const nextMobileSlide = () => {
    setMobileCurrentIndex((prevIndex) => (prevIndex + 1) % clientLogos.length);
  };

  const prevMobileSlide = () => {
    setMobileCurrentIndex((prevIndex) => (prevIndex - 1 + clientLogos.length) % clientLogos.length);
  };

  return (
    <div className="relative overflow-hidden">
      {/* Desktop Version - Auto scroll */}
      <div className="hidden md:block">
        <div className={`flex ${isPaused ? '' : 'animate-scroll'}`}>
          {duplicatedLogos.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className="flex-shrink-0 mx-4 md:mx-8 w-40 h-24 md:w-48 md:h-32 flex items-center justify-center bg-white/5 rounded-xl border border-white/10 hover:border-green-500/30 transition-all duration-300 hover:bg-white/10"
            >
              <img
                src={client.image}
                alt={client.alt}
                className="max-w-full max-h-full object-contain filter brightness-90 hover:brightness-100 transition-all duration-300 rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Version - Manual carousel */}
      <div className="block md:hidden">
        <div className="relative">
          {/* Imagem atual */}
          <div className="flex justify-center">
            <div className="w-32 h-20 flex items-center justify-center bg-white/5 rounded-xl border border-white/10">
              <img
                src={clientLogos[mobileCurrentIndex].image}
                alt={clientLogos[mobileCurrentIndex].alt}
                className="max-w-full max-h-full object-contain filter brightness-90 rounded-lg"
              />
            </div>
          </div>
          
          {/* Botões de navegação */}
          <button
            onClick={prevMobileSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-black/50 text-gray-100 rounded-full hover:bg-black/70 transition-all duration-300 cursor-pointer"
          >
            <i className="ri-arrow-left-s-line text-lg"></i>
          </button>
          
          <button
            onClick={nextMobileSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-black/50 text-gray-100 rounded-full hover:bg-black/70 transition-all duration-300 cursor-pointer"
          >
            <i className="ri-arrow-right-s-line text-lg"></i>
          </button>
          
          {/* Indicadores */}
          <div className="flex justify-center mt-4 space-x-2">
            {clientLogos.map((_, index) => (
              <button
                key={index}
                onClick={() => setMobileCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  index === mobileCurrentIndex 
                    ? 'bg-green-500' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Gradientes nas bordas para efeito de fade - apenas desktop */}
      <div className="hidden md:block absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-gray-900 to-transparent pointer-events-none z-10"></div>
      <div className="hidden md:block absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-gray-900 to-transparent pointer-events-none z-10"></div>
    </div>
  );
};

export default ClientsCarousel;
