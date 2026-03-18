
import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

export type Lang = 'es' | 'en';

// ─────────────────────────────────────────────
// TRANSLATIONS
// ─────────────────────────────────────────────
const translations = {
  es: {
    // ── NAVBAR ──
    nav_cta: 'Cotizar Evento',
    nav_cta_mobile: 'Cotizar Evento por WhatsApp',
    nav_home: 'Home',
    nav_spaces: 'Espacios',
    nav_activities: 'Experiencias',
    nav_location: 'Ubicación',
    nav_contact: 'Contacto',
    nav_open_menu: 'Abrir menú',
    nav_close_menu: 'Cerrar menú',

    // ── HERO ──
    hero_badge: 'A 90 Minutos de Bogotá',
    hero_h1: 'Eventos empresariales',
    hero_h1_italic: 'que fortalecen equipos y decisiones',
    hero_subtitle: 'En una finca cafetera de clase mundial, a solo 90 minutos de Bogotá, Colombia',
    hero_desc: 'Un entorno natural y regenerativo para reuniones estratégicas, team building y retiros de liderazgo.',
    hero_capacity: 'Hasta 40 personas',
    hero_location: 'Zipacón, Cundinamarca',
    hero_cta: 'Cotizar Mi Evento Empresarial',
    hero_img_alt: 'Eventos corporativos en La Palma & El Tucán',

    // ── WHY SECTION ──
    why_eyebrow: '¿Por qué elegirnos?',
    why_title: 'No es solo un lugar para reunirse',
    why_subtitle: 'Es un entorno que transforma la forma en que tu equipo piensa, colabora y se conecta.',
    why_1_title: '90 minutos de Bogotá',
    why_1_text: 'Acceso fácil sin perder la sensación de estar lejos de todo.',
    why_2_title: 'Hasta 40 personas',
    why_2_text: 'Ideal para equipos directivos y grupos ejecutivos.',
    why_3_title: '20 cabañas privadas',
    why_3_text: 'Alojamiento exclusivo entre cafetales para tu equipo.',
    why_4_title: 'Reuniones estratégicas',
    why_4_text: 'Espacios equipados con tecnología y luz natural.',
    why_5_title: 'Finca galardonada',
    why_5_text: 'Reconocimientos internacionales en café de especialidad.',
    why_6_title: '100% personalizable',
    why_6_text: 'Experiencias diseñadas según los objetivos de tu empresa.',
    why_7_title: 'Operación sostenible',
    why_7_text: '70% energía solar y programa zero waste certificado.',

    // ── EVENT TYPES ──
    events_title: 'Tu evento, a tu medida',
    events_subtitle: 'Acompañamos el diseño de tu experiencia, de acuerdo a las necesidades de tu organización, alineados con los objetivos de tu empresa.',
    event_1_title: 'Reuniones Estratégicas',
    event_1_desc: 'Juntas directivas y sesiones de planeación en un entorno que inspira claridad y visión.',
    event_2_title: 'Team Building',
    event_2_desc: 'Outdoor training y dinámicas de equipo en bosque de niebla y cafetales.',
    event_3_title: 'Retiros de Liderazgo',
    event_3_desc: 'Espacios de desconexión para reconectar equipos directivos con su propósito.',
    event_4_title: 'Bienestar Corporativo',
    event_4_desc: 'Jornadas de yoga, naturaleza y mindfulness para el equilibrio de tu equipo.',
    event_5_title: 'Capacitaciones',
    event_5_desc: 'Talleres y sesiones de formación en un ambiente que potencia el aprendizaje.',
    event_6_title: 'Convenciones',
    event_6_desc: 'Sesiones de planeación y encuentros corporativos con infraestructura completa.',

    // ── SPACES ──
    spaces_eyebrow: 'Infraestructura',
    spaces_title: 'Infraestructura pensada para',
    spaces_title_italic: 'reuniones productivas',
    spaces_subtitle: 'Espacios cómodos, funcionales y conectados, pensados para reuniones estratégicas, trabajo profundo y conversaciones que transforman.',
    facility_1_title: 'Espacios para pensar con claridad',
    facility_1_label: 'Hasta 40 personas, rodeadas de naturaleza.',
    facility_2_title: 'Conectividad sin romper la experiencia',
    facility_2_label: 'Internet disponible en áreas comunes.',
    facility_3_title: 'Reuniones que fluyen',
    facility_3_label: 'Proyector y equipo audiovisual listos.',
    facility_4_title: 'Cocina que suma al encuentro',
    facility_4_label: 'Alimentación artesanal farm-to-table.',
    facility_5_title: 'Café de especialidad, siempre',
    facility_5_label: 'Estación permanente para pausas y conversaciones.',
    facility_6_title: 'Descanso real, en medio del café',
    facility_6_label: '20 cabañas privadas entre cafetales.',
    spaces_img1_alt: 'Reuniones productivas en La Palma & El Tucán',
    spaces_img2_alt: 'Espacios para eventos empresariales',

    // ── EXPERIENCE JOURNEY ──
    journey_eyebrow: 'La Experiencia',
    journey_title: 'Una experiencia que tu equipo no va a olvidar',
    journey_subtitle: 'Cada momento está diseñado para generar conexión, creatividad e impacto.',
    journey_step_label: 'Paso',
    journey_1_title: 'Llegada y Desconexión',
    journey_1_desc: 'El viaje de 90 minutos desde Bogotá por carreteras históricas comienza la transformación. Tu equipo empieza a soltar la rutina urbana antes de llegar.',
    journey_2_title: 'Trabajo con Propósito',
    journey_2_desc: 'Espacios de reunión rodeados de naturaleza que promueven creatividad, escucha activa y pensamiento estratégico. Las mejores ideas nacen aquí.',
    journey_3_title: 'Coffee Tour y Degustación',
    journey_3_desc: 'El café como herramienta de conexión. Recorrido por cafetales, proceso de producción y degustación de variedades premiadas internacionalmente.',
    journey_4_title: 'Almuerzo Farm-to-Table',
    journey_4_desc: 'Cocina artesanal con ingredientes de nuestra huerta orgánica. Una pausa que nutre el cuerpo y fortalece los vínculos del equipo.',
    journey_5_title: 'Naturaleza y Reconexión',
    journey_5_desc: 'Caminatas por el bosque de niebla, yoga al aire libre o noche de pizza y fogata. El cierre perfecto que consolida la experiencia.',

    // ── ACTIVITIES ──
    activities_eyebrow: 'Experiencias',
    activities_title: 'Actividades para tu equipo',
    activities_subtitle: 'Complementa tu evento con experiencias que fortalecen los vínculos y crean recuerdos.',
    activity_1_label: 'Coffee Tour Guiado',
    activity_2_label: 'Degustación de Cafés de Especialidad',
    activity_3_label: 'Almuerzo Farm-to-Table',
    activity_4_label: 'Caminatas Ecológicas',
    activity_5_label: 'Yoga y Bienestar',
    activity_6_label: 'Pizza y Fogata',

    // ── CLIENTS ──
    clients_eyebrow: 'Confianza',
    clients_title: 'Empresas que ya vivieron la experiencia',
    clients_subtitle: 'Multinacionales, organizaciones internacionales y empresas líderes han elegido La Palma & El Tucán para sus eventos.',
    clients_categories: 'Multinacionales • Gobierno • ONGs • Redes Ejecutivas',

    // ── SUSTAINABILITY ──
    sustain_eyebrow: 'Sostenibilidad',
    sustain_title: 'Tu evento también puede',
    sustain_title_italic: 'generar impacto positivo',
    sustain_desc: 'Al elegir La Palma & El Tucán, tu empresa apoya un modelo de agricultura regenerativa que cuida el suelo, el agua y las comunidades cafeteras de la región.',
    sustain_li_1: '100% de respaldo energético solar',
    sustain_li_2: 'Programa zero waste con materiales compostables',
    sustain_li_3: 'Iluminación LED inteligente en todas las instalaciones',
    sustain_li_4: 'Green Travel Award Winner',
    sustain_stat_1_label: 'Energía Solar',
    sustain_stat_2_label: 'Materiales Compostables',
    sustain_stat_3_label: 'Familias Cafeteras',
    sustain_stat_4_label: 'Personas Impactadas',

    // ── LOCATION ──
    location_title: 'Ubicación Estratégica',
    location_desc: 'Estamos en Zipacón, Cundinamarca. Un refugio de paz a solo 90 minutos de Bogotá, ideal para desconectar a tu equipo.',
    location_cta: 'Ver en Google Maps',
    location_cta_aria: 'Ver ubicación en Google Maps',

    // ── CTA FINAL ──
    cta_badge: 'Espacios Limitados',
    cta_title: 'Hagamos realidad',
    cta_title_italic: 'tu próximo evento',
    cta_subtitle: 'Cada evento en La Palma & El Tucán es una experiencia a medida. Cuéntanos qué necesitas y diseñamos la propuesta perfecta para tu equipo.',
    cta_button: 'Solicitar Cotización por WhatsApp',
    cta_button_aria: 'Solicitar cotización por WhatsApp',
    cta_email_prefix: 'O escríbenos a',
    cta_img_alt: 'Reserva tu evento empresarial en La Palma & El Tucán',

    // ── FOOTER ──
    footer_brand_sub: 'HOTEL',
    footer_desc: 'Eventos empresariales en una finca cafetera galardonada internacionalmente. Zipacón, Cundinamarca, a 90 minutos de Bogotá.',
    footer_explore: 'Explora',
    footer_contact: 'Contacto',
    footer_home: 'Home',
    footer_spaces: 'Espacios',
    footer_activities: 'Experiencias',
    footer_location: 'Ubicación',
    footer_award: 'Green Travel Award Winner',
    footer_sustain: 'Sustainability First',
    footer_rights: 'Todos los derechos reservados.',

    // ── FLOATING BUTTON ──
    floating_aria: 'Cotizar evento por WhatsApp',
  },

  en: {
    // ── NAVBAR ──
    nav_cta: 'Get a Quote',
    nav_cta_mobile: 'Get a Quote on WhatsApp',
    nav_home: 'Home',
    nav_spaces: 'Spaces',
    nav_activities: 'Experiences',
    nav_location: 'Location',
    nav_contact: 'Contact',
    nav_open_menu: 'Open menu',
    nav_close_menu: 'Close menu',

    // ── HERO ──
    hero_badge: '90 Minutes from Bogotá',
    hero_h1: 'Corporate events',
    hero_h1_italic: 'that strengthen teams and decisions',
    hero_subtitle: 'At a world-class coffee farm, just 90 minutes from Bogotá, Colombia',
    hero_desc: 'A natural and regenerative environment for strategic meetings, team building and leadership retreats.',
    hero_capacity: 'Up to 40 people',
    hero_location: 'Zipacón, Cundinamarca',
    hero_cta: 'Get My Corporate Event Quote',
    hero_img_alt: 'Corporate events at La Palma & El Tucán',

    // ── WHY SECTION ──
    why_eyebrow: 'Why choose us?',
    why_title: 'More than just a meeting place',
    why_subtitle: 'An environment that transforms the way your team thinks, collaborates and connects.',
    why_1_title: '90 minutes from Bogotá',
    why_1_text: 'Easy access without losing the feeling of being far from everything.',
    why_2_title: 'Up to 40 people',
    why_2_text: 'Ideal for executive teams and leadership groups.',
    why_3_title: '20 private cabins',
    why_3_text: 'Exclusive accommodation among coffee fields for your team.',
    why_4_title: 'Strategic meeting spaces',
    why_4_text: 'Spaces equipped with technology and natural light.',
    why_5_title: 'Award-winning farm',
    why_5_text: 'International recognition in specialty coffee.',
    why_6_title: '100% customizable',
    why_6_text: "Experiences designed around your company's objectives.",
    why_7_title: 'Sustainable operation',
    why_7_text: '70% solar energy and certified zero-waste program.',

    // ── EVENT TYPES ──
    events_title: 'Your event, your way',
    events_subtitle: "We partner in designing your experience according to your organization's needs, aligned with your company's objectives.",
    event_1_title: 'Strategic Meetings',
    event_1_desc: 'Board meetings and planning sessions in an environment that inspires clarity and vision.',
    event_2_title: 'Team Building',
    event_2_desc: 'Outdoor training and team dynamics in cloud forest and coffee fields.',
    event_3_title: 'Leadership Retreats',
    event_3_desc: 'Disconnection spaces to reconnect executive teams with their purpose.',
    event_4_title: 'Corporate Wellness',
    event_4_desc: "Yoga, nature and mindfulness sessions for your team's balance.",
    event_5_title: 'Training & Workshops',
    event_5_desc: 'Training sessions and workshops in an environment that enhances learning.',
    event_6_title: 'Conventions',
    event_6_desc: 'Planning sessions and corporate gatherings with full infrastructure.',

    // ── SPACES ──
    spaces_eyebrow: 'Infrastructure',
    spaces_title: 'Infrastructure designed for',
    spaces_title_italic: 'productive meetings',
    spaces_subtitle: 'Comfortable, functional and connected spaces designed for strategic meetings, deep work and transformational conversations.',
    facility_1_title: 'Spaces to think clearly',
    facility_1_label: 'Up to 40 people, surrounded by nature.',
    facility_2_title: 'Connectivity without breaking the experience',
    facility_2_label: 'Internet available in common areas.',
    facility_3_title: 'Meetings that flow',
    facility_3_label: 'Projector and audiovisual equipment ready.',
    facility_4_title: 'Cuisine that enhances the gathering',
    facility_4_label: 'Artisan farm-to-table food.',
    facility_5_title: 'Specialty coffee, always',
    facility_5_label: 'Permanent station for breaks and conversations.',
    facility_6_title: 'Real rest, among the coffee',
    facility_6_label: '20 private cabins among coffee fields.',
    spaces_img1_alt: 'Productive meetings at La Palma & El Tucán',
    spaces_img2_alt: 'Spaces for corporate events',

    // ── EXPERIENCE JOURNEY ──
    journey_eyebrow: 'The Experience',
    journey_title: 'An experience your team will never forget',
    journey_subtitle: 'Every moment is designed to generate connection, creativity and impact.',
    journey_step_label: 'Step',
    journey_1_title: 'Arrival and Disconnection',
    journey_1_desc: 'The 90-minute journey from Bogotá along historic roads begins the transformation. Your team starts leaving behind the urban routine before arriving.',
    journey_2_title: 'Purposeful Work',
    journey_2_desc: 'Meeting spaces surrounded by nature that promote creativity, active listening and strategic thinking. The best ideas are born here.',
    journey_3_title: 'Coffee Tour and Tasting',
    journey_3_desc: 'Coffee as a connection tool. A tour through coffee fields, the production process and tasting internationally awarded varieties.',
    journey_4_title: 'Farm-to-Table Lunch',
    journey_4_desc: 'Artisan cuisine with ingredients from our organic garden. A pause that nourishes the body and strengthens team bonds.',
    journey_5_title: 'Nature and Reconnection',
    journey_5_desc: 'Hikes through the cloud forest, outdoor yoga or a pizza and bonfire night. The perfect closing that consolidates the experience.',

    // ── ACTIVITIES ──
    activities_eyebrow: 'Experiences',
    activities_title: 'Activities for your team',
    activities_subtitle: 'Complement your event with experiences that strengthen bonds and create lasting memories.',
    activity_1_label: 'Guided Coffee Tour',
    activity_2_label: 'Specialty Coffee Tasting',
    activity_3_label: 'Farm-to-Table Lunch',
    activity_4_label: 'Ecological Hikes',
    activity_5_label: 'Yoga & Wellness',
    activity_6_label: 'Pizza & Bonfire',

    // ── CLIENTS ──
    clients_eyebrow: 'Trust',
    clients_title: 'Companies that have already experienced it',
    clients_subtitle: 'Multinationals, international organizations and leading companies have chosen La Palma & El Tucán for their events.',
    clients_categories: 'Multinationals • Government • NGOs • Executive Networks',

    // ── SUSTAINABILITY ──
    sustain_eyebrow: 'Sustainability',
    sustain_title: 'Your event can also',
    sustain_title_italic: 'create positive impact',
    sustain_desc: 'By choosing La Palma & El Tucán, your company supports a regenerative agriculture model that cares for the soil, water and coffee-growing communities of the region.',
    sustain_li_1: '100% solar energy backup',
    sustain_li_2: 'Zero-waste program with compostable materials',
    sustain_li_3: 'Smart LED lighting throughout all facilities',
    sustain_li_4: 'Green Travel Award Winner',
    sustain_stat_1_label: 'Solar Energy',
    sustain_stat_2_label: 'Compostable Materials',
    sustain_stat_3_label: 'Coffee-Growing Families',
    sustain_stat_4_label: 'People Impacted',

    // ── LOCATION ──
    location_title: 'Strategic Location',
    location_desc: 'We are located in Zipacón, Cundinamarca. A peaceful retreat just 90 minutes from Bogotá, ideal for disconnecting your team.',
    location_cta: 'View on Google Maps',
    location_cta_aria: 'View location on Google Maps',

    // ── CTA FINAL ──
    cta_badge: 'Limited Spots',
    cta_title: "Let's bring to life",
    cta_title_italic: 'your next event',
    cta_subtitle: 'Every event at La Palma & El Tucán is a tailored experience. Tell us what you need and we will design the perfect proposal for your team.',
    cta_button: 'Request a Quote on WhatsApp',
    cta_button_aria: 'Request quote on WhatsApp',
    cta_email_prefix: 'Or write to us at',
    cta_img_alt: 'Book your corporate event at La Palma & El Tucán',

    // ── FOOTER ──
    footer_brand_sub: 'HOTEL',
    footer_desc: 'Corporate events at an internationally acclaimed coffee farm. Zipacón, Cundinamarca, 90 minutes from Bogotá.',
    footer_explore: 'Explore',
    footer_contact: 'Contact',
    footer_home: 'Home',
    footer_spaces: 'Spaces',
    footer_activities: 'Experiences',
    footer_location: 'Location',
    footer_award: 'Green Travel Award Winner',
    footer_sustain: 'Sustainability First',
    footer_rights: 'All rights reserved.',

    // ── FLOATING BUTTON ──
    floating_aria: 'Get event quote on WhatsApp',
  },
} as const;

export type TranslationKey = keyof typeof translations.es;

// ─────────────────────────────────────────────
// CONTEXT
// ─────────────────────────────────────────────
interface I18nContextValue {
  lang: Lang;
  t: (key: TranslationKey) => string;
  toggleLang: () => void;
}

const I18nContext = createContext<I18nContextValue | null>(null);

const LS_KEY = 'lpet-empresariales-lang';

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    try {
      const stored = localStorage.getItem(LS_KEY);
      if (stored === 'es' || stored === 'en') return stored;
    } catch {}
    return 'es';
  });

  const toggleLang = useCallback(() => {
    setLang(prev => {
      const next: Lang = prev === 'es' ? 'en' : 'es';
      try { localStorage.setItem(LS_KEY, next); } catch {}
      return next;
    });
  }, []);

  const t = useCallback((key: TranslationKey): string => {
    return (translations[lang] as Record<string, string>)[key] ?? key;
  }, [lang]);

  return (
    <I18nContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used inside I18nProvider');
  return ctx;
}
