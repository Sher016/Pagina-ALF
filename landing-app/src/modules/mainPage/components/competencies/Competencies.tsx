import './Competencies.css';
import { FaHome, FaSolarPanel, FaIndustry, FaShieldAlt } from 'react-icons/fa';

interface Competency {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags?: string[];
  image?: string;
  featured?: boolean;
}

const competencies: Competency[] = [
  {
    icon: <FaHome size={22} />,
    title: 'Smart Home Automation',
    description:
      'Invisible integration of light, climate, and security systems tailored for luxury living.',
    image: '/images/competencies/smart-home.jpg',
    featured: true,
  },
  {
    icon: <FaSolarPanel size={22} />,
    title: 'Renewable Systems',
    description:
      'Photovoltaic arrays and battery storage solutions that redefine energy independence.',
    tags: ['Zero-Grid Impact', 'High-Density Storage'],
  },
  {
    icon: <FaIndustry size={22}/>,
    title: 'Industrial Grid Maintenance',
    description:
      'Preventative engineering for enterprise-scale manufacturing and data centers.',
  },
  {
    icon: <FaShieldAlt size={22} />,
    title: 'Safety & Precision Audits',
    description:
      'Thermographic imaging and ultrasonic testing to identify failures before they occur.',
    image: '/images/competencies/thermal.jpg',
    featured: true,
  },
];

export function Competencies() {
  return (
    <section className="core-section" id="services">
      <div className="core-header">
        <h2 className="core-title">Core Competencies</h2>
        <p className="core-subtitle">
          From autonomous residential systems to heavy-duty industrial maintenance,
          we provide end-to-end electrical mastery.
        </p>
      </div>

      <div className="core-grid">
        {competencies.map((item, i) => (
          <div key={i} className={`core-card ${item.featured ? 'featured' : ''}`}>
            <span className="core-icon">{item.icon}</span>
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

            {item.image && (
              <div className="core-card-image">
                <img src={item.image} alt={item.title} loading="lazy" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}