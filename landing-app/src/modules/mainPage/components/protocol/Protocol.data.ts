import { FaSearch, FaDraftingCompass, FaBolt, FaCheckCircle } from 'react-icons/fa';
import type { IconType } from 'react-icons';

export interface Step {
  icon: IconType;
  title: string;
  description: string;
}

export const steps: Step[] = [
  {
    icon: FaSearch,
    title: 'Consultoría',
    description: 'Análisis de requerimientos y estudio de viabilidad arquitectónica del sitio.',
  },
  {
    icon: FaDraftingCompass,
    title: 'Ingeniería',
    description: 'Planos CAD y adquisición de componentes personalizados.',
  },
  {
    icon: FaBolt,
    title: 'Ejecución',
    description: 'Instalación de precisión e integración de sistemas completos.',
  },
  {
    icon: FaCheckCircle,
    title: 'Certificación',
    description: 'Pruebas rigurosas de seguridad y documentación de entrega.',
  },
];