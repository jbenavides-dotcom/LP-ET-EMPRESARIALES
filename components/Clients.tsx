
import React from 'react';
import { CLIENTS } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Clients: React.FC = () => {
  const reveal = useScrollReveal();

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-white">
      <div ref={reveal.ref} className={`max-w-7xl mx-auto px-4 sm:px-6 ${reveal.isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h4 className="text-brand-pink text-xs uppercase tracking-[0.4em] font-bold mb-3 sm:mb-4">Confianza</h4>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-dark mb-4 sm:mb-6">Empresas que ya vivieron la experiencia</h2>
          <p className="text-neutral-600 font-light text-sm sm:text-base">Multinacionales, organizaciones internacionales y empresas líderes han elegido La Palma & El Tucán para sus eventos.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
          {CLIENTS.map((client, idx) => (
            <span
              key={idx}
              className="px-4 sm:px-6 py-2.5 sm:py-3 bg-brand-light rounded-full text-sm font-medium text-brand-dark border border-brand-beige/30 hover:bg-brand-pink hover:text-white hover:border-brand-pink transition-all cursor-default"
            >
              {client.name}
            </span>
          ))}
        </div>

        <div className="mt-10 sm:mt-14 text-center">
          <p className="text-neutral-400 text-xs uppercase tracking-widest font-bold">
            Multinacionales &bull; Gobierno &bull; ONGs &bull; Redes Ejecutivas
          </p>
        </div>
      </div>
    </section>
  );
};

export default Clients;
