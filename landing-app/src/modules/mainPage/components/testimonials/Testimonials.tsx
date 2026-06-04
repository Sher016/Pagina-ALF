import './Testimonials.css';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  stars?: number;
  initials?: string;
  featured?: boolean;
}

const testimonials: Testimonial[] = [
  {
    quote:
      'La precisión que ALF trajo a nuestro centro de datos regional fue incomparable. Su ingeniería no solo resolvió los problemas — dejó toda nuestra infraestructura a prueba de futuro.',
    author: 'Carlos Restrepo',
    role: 'CEO, Nexus Data Systems',
    initials: 'CR',
    featured: true,
  },
  {
    quote:
      'Dominio inigualable de la automatización residencial. Mi propiedad funciona como un reloj suizo.',
    author: 'Estate Owner',
    role: 'Palm Springs',
    stars: 5,
  },
  {
    quote:
      'Cero tiempo de inactividad durante toda la actualización de nuestra red eléctrica. Ejecución técnica de élite.',
    author: 'Project Lead',
    role: 'Helix Manufacturing',
    stars: 5,
  },
  {
    quote:
      'El equipo de ALF completó la instalación fotovoltaica en tiempo récord. Profesionalismo total desde el primer día.',
    author: 'Gerente de Planta',
    role: 'Industrias del Norte S.A.',
    stars: 5,
  },
];

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="t-stars">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  );
}

export function Testimonials() {
  const featured = testimonials.find((t) => t.featured);
  const rest = testimonials.filter((t) => !t.featured);

  return (
    <section className="t-section" id="testimonials">
      <div className="t-inner">

        {/* Left — featured */}
        <div className="t-left">
          <h2 className="t-title">Lo que dicen<br />nuestros clientes</h2>

          {featured && (
            <div className="t-featured">
              <span className="t-quote-mark">"</span>
              <blockquote className="t-featured-quote">
                "{featured.quote}"
              </blockquote>
              <div className="t-featured-author">
                <div className="t-avatar">{featured.initials}</div>
                <div>
                  <span className="t-author-name">{featured.author}</span>
                  <span className="t-author-role">{featured.role}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right — grid */}
        <div className="t-right">
          {rest.map((t, i) => (
            <div key={i} className="t-card">
              {t.stars && <Stars count={t.stars} />}
              <p className="t-card-quote">"{t.quote}"</p>
              <span className="t-card-author">— {t.author}, {t.role}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}