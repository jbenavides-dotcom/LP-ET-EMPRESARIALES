
import React from 'react';
import { SUSTAINABILITY_STATS, ASSETS } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Sustainability: React.FC = () => {
  const reveal = useScrollReveal();

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-brand-green text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10">
        <img src={ASSETS.CAFETALES} alt="" role="presentation" className="w-full h-full object-cover" loading="lazy" />
      </div>
      <div ref={reveal.ref} className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 ${reveal.isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 items-center">
          <div>
            <h4 className="text-white/60 text-xs uppercase tracking-[0.4em] font-bold mb-3 sm:mb-4">Sostenibilidad</h4>
            <h2 className="text-3xl sm:text-4xl font-serif mb-4 sm:mb-6 leading-tight">
              Tu evento también puede <br className="hidden sm:block" /><span className="italic text-brand-beige">generar impacto positivo</span>
            </h2>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed font-light mb-6 sm:mb-8">
              Al elegir La Palma & El Tucán, tu empresa apoya un modelo de agricultura regenerativa que cuida el suelo, el agua y las comunidades cafeteras de la región.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/90 text-sm">
                <div className="w-2 h-2 rounded-full bg-brand-beige"></div>
                100% de respaldo energético solar
              </li>
              <li className="flex items-center gap-3 text-white/90 text-sm">
                <div className="w-2 h-2 rounded-full bg-brand-beige"></div>
                Programa zero waste con materiales compostables
              </li>
              <li className="flex items-center gap-3 text-white/90 text-sm">
                <div className="w-2 h-2 rounded-full bg-brand-beige"></div>
                Iluminación LED inteligente en todas las instalaciones
              </li>
              <li className="flex items-center gap-3 text-white/90 text-sm">
                <div className="w-2 h-2 rounded-full bg-brand-beige"></div>
                Green Travel Award Winner
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {SUSTAINABILITY_STATS.map((stat, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10 text-center">
                <span className="text-3xl sm:text-4xl font-serif font-bold text-brand-beige block mb-2">{stat.value}</span>
                <span className="text-white/60 text-xs uppercase tracking-widest font-bold">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
