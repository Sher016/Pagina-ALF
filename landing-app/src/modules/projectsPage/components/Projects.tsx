import "./Projects.css";
import { useProjects } from "./Projects.hook.ts";

export function Projects() {
  const { CATEGORIES, filtered, active, setActive, selected, setSelected } =
    useProjects();
  return (
    <section className="projects-section" id="projects">
   
      <div className="projects-header">
        <div>
          <span className="projects-label">Portafolio</span>
          <h2 className="projects-title">Proyectos Realizados</h2>
          <p className="projects-subtitle">
            Cada proyecto es una muestra de nuestro compromiso con la calidad y
            la innovación.
          </p>
        </div>
      </div>

      <div className="projects-filters">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`projects-filter ${active === cat ? "active" : ""}`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>


      <div className="projects-grid">
        {filtered.map((project, i) => (
          <div
            key={i}
            className="project-card"
            onClick={() => setSelected(project)}
          >
            <div className="project-card-image">
              <img src={project.image} alt={project.title} loading="lazy" />
              <span className="project-category">{project.category}</span>
            </div>
            <div className="project-card-info">
              <h3 className="project-title">{project.title}</h3>
              <span className="project-location">📍 {project.location}</span>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

  
      {selected && (
        <div
          className="project-modal-overlay"
          onClick={() => setSelected(null)}
        >
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="project-modal-close"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>
            <div className="project-modal-image">
              <img src={selected.image} alt={selected.title} />
              <span className="project-category">{selected.category}</span>
            </div>
            <div className="project-modal-body">
              <h3 className="project-modal-title">{selected.title}</h3>
              <span className="project-location">📍 {selected.location}</span>
              <p className="project-modal-desc">{selected.description}</p>
              <div className="project-tags">
                {selected.tags.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <a href="/contact" className="project-modal-cta">
                Solicitar proyecto similar →
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
