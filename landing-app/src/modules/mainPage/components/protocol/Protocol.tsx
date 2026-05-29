import './Protocol.css';
import { FaSearch, FaDraftingCompass, FaBolt, FaCheckCircle } from 'react-icons/fa';

interface Step {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: <FaSearch size={20} />,
    title: 'Consultation',
    description: 'Requirement analysis and architectural site feasibility study.',
  },
  {
    icon: <FaDraftingCompass size={20} />,
    title: 'Engineering',
    description: 'CAD blue-printing and custom component procurement.',
  },
  {
    icon: <FaBolt size={20} />,
    title: 'Execution',
    description: 'Precision installation and system-wide integration.',
  },
  {
    icon: <FaCheckCircle size={20} />,
    title: 'Certification',
    description: 'Rigorous safety testing and handover documentation.',
  },
];

export function Protocol() {
  return (
    <section className="deploy-section" id="process">
      <div className="deploy-label">Deployment Protocol</div>
      <h2 className="deploy-title">Engineering Excellence</h2>

      <div className="deploy-steps">
        {steps.map((step, i) => (
          <div key={i} className="deploy-step">
            {/* Connector line between steps */}
            {i < steps.length - 1 && <div className="deploy-connector" />}

            <div className="deploy-icon-wrap">
              <span className="deploy-icon">{step.icon}</span>
            </div>
            <h3 className="deploy-step-title">{step.title}</h3>
            <p className="deploy-step-desc">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}