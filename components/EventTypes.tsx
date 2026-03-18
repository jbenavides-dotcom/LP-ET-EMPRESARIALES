
import React from 'react';
import { EVENT_TYPES } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useI18n, TranslationKey } from '../i18n';

const EVENT_TYPE_KEYS: { titleKey: TranslationKey; descKey: TranslationKey }[] = [
  { titleKey: 'event_1_title', descKey: 'event_1_desc' },
  { titleKey: 'event_2_title', descKey: 'event_2_desc' },
  { titleKey: 'event_3_title', descKey: 'event_3_desc' },
  { titleKey: 'event_4_title', descKey: 'event_4_desc' },
  { titleKey: 'event_5_title', descKey: 'event_5_desc' },
  { titleKey: 'event_6_title', descKey: 'event_6_desc' },
];

const EventTypes: React.FC = () => {
  const reveal = useScrollReveal();
  const { t } = useI18n();

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div ref={reveal.ref} className={`max-w-7xl mx-auto px-4 sm:px-6 ${reveal.isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-dark mb-4 sm:mb-6">{t('events_title')}</h2>
          <p className="text-neutral-600 font-light text-sm sm:text-base">{t('events_subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {EVENT_TYPES.map((event, idx) => (
            <div key={idx} className="group bg-brand-light p-6 sm:p-8 rounded-2xl hover:bg-brand-pink hover:shadow-2xl transition-all duration-500">
              <div className="w-12 h-12 rounded-xl bg-brand-pink/10 flex items-center justify-center text-brand-pink mb-4 sm:mb-6 group-hover:bg-white/20 group-hover:text-white transition-all">
                {event.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-serif text-brand-dark mb-2 sm:mb-3 group-hover:text-white transition-colors">
                {t(EVENT_TYPE_KEYS[idx].titleKey)}
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                {t(EVENT_TYPE_KEYS[idx].descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventTypes;
