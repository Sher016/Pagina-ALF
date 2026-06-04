import './Protocol.css';
import { steps } from './Protocol.data';

export function Protocol() {
  return (
    <section className="deploy-section" id="process">
      <div className="deploy-label">Protocolo de Despliegue</div>
      <h2 className="deploy-title">Excelencia en Ingeniería</h2>

      <div className="deploy-steps">
        {steps.map(({ icon: Icon, title, description }, i) => (
          <div key={i} className="deploy-step">
            {i < steps.length - 1 && <div className="deploy-connector" />}
            <div className="deploy-icon-wrap">
              <span className="deploy-icon"><Icon size={20} /></span>
            </div>
            <h3 className="deploy-step-title">{title}</h3>
            <p className="deploy-step-desc">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}