import './TeamSection.css';
import { TeamMemberCard } from './components/TeamMemberCard';
import  type { TeamMember } from './components/TeamMemberCard';


const members: TeamMember[] = [
  {
    name: 'Carlos Méndez',
    role: 'Director de Ingeniería',
    description: 'Ex-consultor aeroespacial especializado en sistemas eléctricos de alta tensión.',
    linkedin: '#',
  },
  {
    name: 'Andrés Torres',
    role: 'Integrador de Sistemas',
    description: 'Experto en ecosistemas IoT y protocolos avanzados de automatización.',
    linkedin: '#',
  },
  {
    name: 'Luis Ramírez',
    role: 'Especialista en Energías Renovables',
    description: 'Pionero en microrredes industriales sostenibles y tecnología de baterías.',
    linkedin: '#',
  },
];

export function TeamSection() {
  return (
    <section className="team-section" id="team">
      <div className="team-header">
        <div className="team-header-left">
          <span className="team-label">Nuestro Equipo</span>
          <h2 className="team-title">Los expertos que<br />mantienen la red<br />en marcha</h2>
          <p className="team-subtitle">
            Liderado por arquitectos eléctricos veteranos con más de
            50 años de experiencia técnica colectiva.
          </p>
        </div>
        <a href="/contact" className="team-cta">Únete a nuestro equipo →</a>
      </div>

      <div className="team-about">
        <div className="team-about-desc">
          <p>
            En <strong>Volt & Vector</strong> combinamos ingeniería de precisión con
            tecnología de vanguardia para transformar la infraestructura eléctrica
            residencial e industrial. Cada proyecto es una oportunidad de construir
            sistemas más seguros, eficientes y sostenibles.
          </p>
        </div>
        <div className="team-mv">
          <div className="team-mv-item">
            <span className="team-mv-label">Misión</span>
            <p className="team-mv-text">
              Proveer soluciones eléctricas integrales con los más altos estándares
              de calidad, seguridad y sostenibilidad, generando valor real para
              nuestros clientes y sus comunidades.
            </p>
          </div>
          <div className="team-mv-divider" />
          <div className="team-mv-item">
            <span className="team-mv-label">Visión</span>
            <p className="team-mv-text">
              Ser la empresa de ingeniería eléctrica de referencia en Colombia,
              reconocida por liderar la transición hacia infraestructuras inteligentes
              y energías renovables.
            </p>
          </div>
        </div>
      </div>
      <div className="team-grid">
        {members.map((member, i) => (
          <TeamMemberCard key={i} member={member} />
        ))}
      </div>

    </section>
  );
}