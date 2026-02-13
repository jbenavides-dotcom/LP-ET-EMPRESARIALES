
import React from 'react';
import { MapPin, Users, Home, Award, Leaf, Settings, Monitor } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const WHY_ITEMS = [
  { icon: <MapPin className="w-4 h-4" />, text: "A solo 90 minutos de Bogotá" },
  { icon: <Users className="w-4 h-4" />, text: "Capacidad hasta 40 personas (ideal para equipos directivos)" },
  { icon: <Home className="w-4 h-4" />, text: "20 cabañas privadas para alojamiento exclusivo" },
  { icon: <Monitor className="w-4 h-4" />, text: "Espacios equipados para reuniones estratégicas" },
  { icon: <Award className="w-4 h-4" />, text: "Finca cafetera galardonada internacionalmente" },
  { icon: <Settings className="w-4 h-4" />, text: "Experiencias personalizables según objetivos" },
  { icon: <Leaf className="w-4 h-4" />, text: "Operación sostenible (70% energía solar, zero waste)" },
];

const WhySection: React.FC = () => {
  const reveal = useScrollReveal();

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-brand-light">
      <div ref={reveal.ref} className={`max-w-7xl mx-auto px-4 sm:px-6 ${reveal.isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h4 className="text-brand-pink text-xs uppercase tracking-[0.4em] font-bold mb-3 sm:mb-4">¿Por qué elegirnos?</h4>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-dark mb-4 sm:mb-6">No es solo un lugar para reunirse</h2>
          <p className="text-neutral-600 font-light text-base sm:text-lg">Es un entorno que transforma la forma en que tu equipo piensa, colabora y se conecta.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {WHY_ITEMS.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 bg-white p-4 sm:p-5 rounded-xl shadow-sm">
              <div className="w-8 h-8 rounded-full bg-brand-pink/10 flex items-center justify-center flex-shrink-0 text-brand-pink">
                {item.icon}
              </div>
              <span className="text-neutral-700 text-sm">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
