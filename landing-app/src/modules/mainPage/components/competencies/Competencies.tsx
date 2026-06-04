import './Competencies.css';

interface Competency {
  icon: string;
  title: string;
  description: string;
  tags?: string[];
  featured?: boolean;
}

const competencies: Competency[] = [
  {
    icon: '/src/assets/icons/icon-event.svg',
    title: 'Instalaciones Temporales para Eventos',
    description: 'Montaje y desmontaje de infraestructura eléctrica segura y certificada para eventos de cualquier escala.',
    featured: true,
  },
  {
    icon: '/src/assets/icons/icon-lighting.svg',
    title: 'Iluminación Escénica y Técnica',
    description: 'Diseño e instalación de sistemas de iluminación profesional para escenarios, auditorios y espacios de entretenimiento.',
    tags: ['Iluminación LED', 'Control DMX'],
  },
  {
    icon: '/src/assets/icons/icon-power.svg',
    title: 'Conexiones de Alta Potencia',
    description: 'Suministro y conexión de energía de alta potencia para escenarios, producciones y eventos de gran formato.',
    tags: ['Alta tensión', 'Generadores'],
  },
  {
    icon: '/src/assets/icons/icon-residential.svg',
    title: 'Instalaciones Eléctricas Residenciales',
    description: 'Proyectos eléctricos residenciales certificados RETIE, desde diseño hasta entrega, con los más altos estándares de seguridad.',
    featured: true,
  },
];

export function Competencies() {
  return (
    <section className="core-section" id="services">
      <div className="core-header">
        <h2 className="core-title">Nuestros Servicios</h2>
        <p className="core-subtitle">
          Soluciones eléctricas integrales para eventos, residencias e industria,
          con certificación RETIE y tecnología de vanguardia.
        </p>
      </div>

      <div className="core-grid">
        {competencies.map((item, i) => (
          <div key={i} className={`core-card ${item.featured ? 'featured' : ''}`}>
            <span className="core-icon">
              <img src={item.icon} alt={item.title} className="core-icon-svg" />
            </span>
            <h3 className="core-card-title">{item.title}</h3>
            <p className="core-card-desc">{item.description}</p>

            {item.tags && (
              <ul className="core-tags">
                {item.tags.map((tag) => (
                  <li key={tag} className="core-tag">
                    <span className="core-tag-dot" />
                    {tag}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}