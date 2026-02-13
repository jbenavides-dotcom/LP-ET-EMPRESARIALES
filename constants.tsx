
import React from 'react';
import { NavLink, Client } from './types';
import {
  Users,
  Target,
  Lightbulb,
  Heart,
  GraduationCap,
  Presentation,
  Coffee,
  Utensils,
  Footprints,
  Leaf,
  Flame,
} from 'lucide-react';

// ASSETS DE CLOUDINARY
const CDN_OLD = "https://res.cloudinary.com/dsylu9a7k/image/upload/f_auto,q_auto,w_800";
const CDN_NEW = "https://res.cloudinary.com/dkqocgknd/image/upload/f_auto,q_auto,w_800";

export const ASSETS = {
  HERO_BG: "https://res.cloudinary.com/dsylu9a7k/image/upload/f_auto,q_auto,w_1600/lpet/hero-aerial.png",
  EVENTOS: "https://res.cloudinary.com/dsylu9a7k/image/upload/f_auto,q_auto,w_1920/lpet/eventos.png",
  CAFETALES: `${CDN_OLD}/lpet/cafetales.png`,
  DEGUSTACION_CAFE: `${CDN_OLD}/lpet/degustacion-cafe.png`,
  COMIDA: `${CDN_OLD}/lpet/comida-farm-to-table.png`,
  CABANA: `${CDN_OLD}/lpet/cabana-interior.png`,
  CAMINATA: `${CDN_OLD}/lpet/caminata-bosque.png`,
  CASCADA: `${CDN_OLD}/lpet/cascada.png`,
  LAGUNA: `${CDN_OLD}/lpet/laguna-pedro-palo.png`,
  YOGA: `${CDN_OLD}/lpet/yoga.png`,
  HUERTA: `${CDN_OLD}/lpet/huerta.png`,
  CAFETALES_BG: `${CDN_OLD}/lpet/cafetales.png`,
  // Nuevas fotos
  PASO_1: `${CDN_NEW}/lpet-eventos/paso-1.png`,
  PASO_2: `${CDN_NEW}/lpet-eventos/paso-2.png`,
  PASO_3: `${CDN_NEW}/lpet-eventos/paso-3.png`,
  COFFEE_TOUR_NEW: `${CDN_NEW}/lpet-eventos/coffee-tour-guiado.png`,
  PIZZA_FOGATA_NEW: `${CDN_NEW}/lpet-eventos/pizza-y-fogata.png`,
  REUNIONES_1: `${CDN_NEW}/lpet-eventos/reuniones-productivas.png`,
  REUNIONES_2: `${CDN_NEW}/lpet-eventos/reuniones-productivas-2.png`,
};

// WHATSAPP RESERVAS
export const WHATSAPP_EVENTOS = "https://wa.me/573189565617?text=Hola%2C%20quiero%20cotizar%20un%20evento%20empresarial%20en%20La%20Palma%20%26%20El%20Tuc%C3%A1n";
export const BOOKING_URL = WHATSAPP_EVENTOS;

// CONTACTO
export const CONTACT_INFO = {
  email: "reservations@lapalmayeltucan.com",
  phone: "+573189565617",
  phoneDisplay: "(+57) 318 956 5617",
  address: "Zipacón, Cundinamarca, Colombia",
  googleMaps: "https://www.google.com/maps/search/La+Palma+y+El+Tucan+Hotel+Zipacon+Cundinamarca",
  whatsappReservas: "https://wa.me/573189565617",
};

// REDES SOCIALES
export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/lapalmayeltucan_hotel/",
  facebook: "https://www.facebook.com/lapalmayeltucanboutiquehotel/",
  tiktok: "https://www.tiktok.com/@lapalmayeltucan_hotel",
  linkedin: "https://www.linkedin.com/company/la-palma-el-tuc%C3%A1n-hotel/",
  website: "https://lapalmayeltucanhotel.com/"
};

// NAV
export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#hero' },
  { label: 'Espacios', href: '#spaces' },
  { label: 'Experiencias', href: '#activities' },
  { label: 'Ubicación', href: '#location' },
  { label: 'Contacto', href: '#footer' },
];

// TIPOS DE EVENTO
export const EVENT_TYPES = [
  {
    title: "Reuniones Estratégicas",
    description: "Juntas directivas y sesiones de planeación en un entorno que inspira claridad y visión.",
    icon: <Target className="w-6 h-6" />,
  },
  {
    title: "Team Building",
    description: "Outdoor training y dinámicas de equipo en bosque de niebla y cafetales.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: "Retiros de Liderazgo",
    description: "Espacios de desconexión para reconectar equipos directivos con su propósito.",
    icon: <Lightbulb className="w-6 h-6" />,
  },
  {
    title: "Bienestar Corporativo",
    description: "Jornadas de yoga, naturaleza y mindfulness para el equilibrio de tu equipo.",
    icon: <Heart className="w-6 h-6" />,
  },
  {
    title: "Capacitaciones",
    description: "Talleres y sesiones de formación en un ambiente que potencia el aprendizaje.",
    icon: <GraduationCap className="w-6 h-6" />,
  },
  {
    title: "Convenciones",
    description: "Sesiones de planeación y encuentros corporativos con infraestructura completa.",
    icon: <Presentation className="w-6 h-6" />,
  },
];

// JOURNEY DE LA EXPERIENCIA
export const JOURNEY_STEPS = [
  {
    number: "01",
    title: "Llegada y Desconexión",
    description: "El viaje de 90 minutos desde Bogotá por carreteras históricas comienza la transformación. Tu equipo empieza a soltar la rutina urbana antes de llegar.",
    image: ASSETS.PASO_1,
  },
  {
    number: "02",
    title: "Trabajo con Propósito",
    description: "Espacios de reunión rodeados de naturaleza que promueven creatividad, escucha activa y pensamiento estratégico. Las mejores ideas nacen aquí.",
    image: ASSETS.PASO_2,
  },
  {
    number: "03",
    title: "Coffee Tour y Degustación",
    description: "El café como herramienta de conexión. Recorrido por cafetales, proceso de producción y degustación de variedades premiadas internacionalmente.",
    image: ASSETS.PASO_3,
  },
  {
    number: "04",
    title: "Almuerzo Farm-to-Table",
    description: "Cocina artesanal con ingredientes de nuestra huerta orgánica. Una pausa que nutre el cuerpo y fortalece los vínculos del equipo.",
    image: ASSETS.COMIDA,
  },
  {
    number: "05",
    title: "Naturaleza y Reconexión",
    description: "Caminatas por el bosque de niebla, yoga al aire libre o noche de pizza y fogata. El cierre perfecto que consolida la experiencia.",
    image: ASSETS.CAMINATA,
  },
];

// ACTIVIDADES
export const ACTIVITIES = [
  { label: "Coffee Tour Guiado", image: ASSETS.COFFEE_TOUR_NEW, icon: <Coffee className="w-5 h-5" /> },
  { label: "Degustación de Cafés de Especialidad", image: ASSETS.DEGUSTACION_CAFE, icon: <Coffee className="w-5 h-5" /> },
  { label: "Almuerzo Farm-to-Table", image: ASSETS.LAGUNA, icon: <Utensils className="w-5 h-5" /> },
  { label: "Caminatas Ecológicas", image: ASSETS.CASCADA, icon: <Footprints className="w-5 h-5" /> },
  { label: "Yoga y Bienestar", image: ASSETS.YOGA, icon: <Leaf className="w-5 h-5" />, rotate: true },
  { label: "Pizza y Fogata", image: ASSETS.PIZZA_FOGATA_NEW, icon: <Flame className="w-5 h-5" /> },
];

// CLIENTES
export const CLIENTS: Client[] = [
  { name: "Bavaria", category: "multinacional" },
  { name: "Mastercard", category: "multinacional" },
  { name: "McDonald's", category: "multinacional" },
  { name: "Bayer", category: "multinacional" },
  { name: "Sanofi", category: "multinacional" },
  { name: "Team Foods", category: "multinacional" },
  { name: "Havas", category: "multinacional" },
  { name: "Skandia", category: "multinacional" },
  { name: "Convatec", category: "multinacional" },
  { name: "Geopark", category: "multinacional" },
  { name: "Specialized", category: "multinacional" },
  { name: "YPO", category: "otro" },
  { name: "USAID", category: "gobierno" },
  { name: "PNUD", category: "gobierno" },
  { name: "Federación Nacional de Cafeteros", category: "gobierno" },
  { name: "Asociación Diplomática y Consular", category: "gobierno" },
  { name: "Root Capital", category: "ong" },
  { name: "Re:wild", category: "ong" },
  { name: "Fundación Bolívar Davivienda", category: "ong" },
  { name: "Biodiversal", category: "ong" },
  { name: "Carnalite", category: "otro" },
  { name: "Hidrocasare", category: "otro" },
  { name: "Libertario", category: "otro" },
  { name: "El Green Hub", category: "otro" },
];

// DIRECCIONES
export const DIRECTIONS = [
  "Salida desde Bogotá por Calle 13 o Carrera 80 hacia Cachipay.",
  "Punto de referencia: Restaurante San Angelo Gourmet (antes de Cachipay).",
  "Desvío en el cruce de Macondo (500 mts).",
  "Paso por el cruce del Camino Real (Km 3.7 - Fundación Erika Verde).",
  "A 1km aprox. encontrarás el desvío señalizado hacia el hotel.",
];

// DATOS DE SOSTENIBILIDAD
export const SUSTAINABILITY_STATS = [
  { value: "70%", label: "Energía Solar" },
  { value: "100%", label: "Materiales Compostables" },
  { value: "100+", label: "Familias Cafeteras" },
  { value: "2.500", label: "Personas Impactadas" },
];
