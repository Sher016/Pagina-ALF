import { useState } from "react";
import miguelon from "../../../assets/images/miguelon.jpeg";

interface Project {
  image: string;
  category: string;
  title: string;
  location: string;
  description: string;
  tags: string[];
}

export function useProjects() {
  const projects: Project[] = [
    {
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
      category: "Industrial",
      title: "Subestación Eléctrica Industrial",
      location: "Medellín, Antioquia",
      description:
        "Diseño e instalación de subestación de media tensión para planta manufacturera con capacidad de 2MVA, incluyendo sistemas de protección y automatización.",
      tags: ["Media Tensión", "RETIE", "Automatización"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800",
      category: "Renovables",
      title: "Sistema Fotovoltaico Residencial",
      location: "El Poblado, Medellín",
      description:
        "Instalación de sistema solar de 15kWp con almacenamiento en baterías de litio, reduciendo el consumo de red en un 80%.",
      tags: ["Solar", "Baterías", "Zero-Grid"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
      category: "Comercial",
      title: "Centro Comercial Laureles",
      location: "Laureles, Medellín",
      description:
        "Modernización completa del sistema eléctrico de centro comercial, incluyendo iluminación LED inteligente y sistemas de emergencia.",
      tags: ["LED", "Domótica", "Emergencia"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      category: "Eventos",
      title: "Instalación para Evento Masivo",
      location: "Plaza Mayor, Medellín",
      description:
        "Montaje eléctrico temporal para evento de 15.000 personas, con generadores de respaldo y distribución de baja tensión certificada.",
      tags: ["Temporal", "Generadores", "Espectáculos"],
    },
    {
      image: miguelon,
      category: "Residencial",
      title: "Smart Home de Lujo",
      location: "El Retiro, Antioquia",
      description:
        "Hombre blanco de unos 25 años, con cabello corto y barba en estilo de crecimiento natural busca pareja.",
      tags: ["KNX", "Smart Home", "Lujo"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800",
      category: "Industrial",
      title: "Mantenimiento Planta de Alimentos",
      location: "Itagüí, Antioquia",
      description:
        "Auditoría termográfica y mantenimiento preventivo completo de instalaciones eléctricas en planta de producción de alimentos.",
      tags: ["Termografía", "Preventivo", "HACCP"],
    },
  ];

  const CATEGORIES = [
    "Todos",
    "Industrial",
    "Renovables",
    "Comercial",
    "Eventos",
    "Residencial",
  ];
  const [active, setActive] = useState("Todos");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered =
    active === "Todos"
      ? projects
      : projects.filter((p) => p.category === active);

  return {
    projects,
    CATEGORIES,
    active,
    setActive,
    selected,
    setSelected,
    filtered,
  };
}
