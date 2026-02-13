
import React from 'react';
import { ASSETS } from '../constants';
import { Monitor, Wifi, Users, Coffee, Utensils, Home } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const FACILITIES = [
  { icon: <Users className="w-5 h-5" />, title: "Espacios para pensar con claridad", label: "Hasta 40 personas, rodeadas de naturaleza." },
  { icon: <Wifi className="w-5 h-5" />, title: "Conectividad sin romper la experiencia", label: "Internet disponible en áreas comunes." },
  { icon: <Monitor className="w-5 h-5" />, title: "Reuniones que fluyen", label: "Proyector y equipo audiovisual listos." },
  { icon: <Utensils className="w-5 h-5" />, title: "Cocina que suma al encuentro", label: "Alimentación artesanal farm-to-table." },
  { icon: <Coffee className="w-5 h-5" />, title: "Café de especialidad, siempre", label: "Estación permanente para pausas y conversaciones." },
  { icon: <Home className="w-5 h-5" />, title: "Descanso real, en medio del café", label: "20 cabañas privadas entre cafetales." },
];

const Spaces: React.FC = () => {
  const reveal = useScrollReveal();

  return (
    <section id="spaces" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div ref={reveal.ref} className={`max-w-7xl mx-auto px-4 sm:px-6 ${reveal.isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                <img src={ASSETS.REUNIONES_1} alt="Reuniones productivas en La Palma & El Tucán" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[3/4] translate-y-6 sm:translate-y-10">
                <img src={ASSETS.REUNIONES_2} alt="Espacios para eventos empresariales" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          </div>

          <div>
            <span className="text-brand-pink text-xs uppercase tracking-[0.4em] font-bold mb-3 sm:mb-4 block">Infraestructura</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-brand-dark mb-4 sm:mb-6 leading-tight">
              Infraestructura pensada para <br className="hidden sm:block" /><span className="italic text-brand-pink">reuniones productivas</span>
            </h2>
            <p className="text-neutral-600 text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed font-light">
              Espacios cómodos, funcionales y conectados, pensados para reuniones estratégicas, trabajo profundo y conversaciones que transforman.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {FACILITIES.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-brand-light p-3 sm:p-4 rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-brand-pink/10 flex items-center justify-center text-brand-pink flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-sm font-bold text-brand-dark block">{item.title}</span>
                    <span className="text-xs text-neutral-500">{item.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spaces;
