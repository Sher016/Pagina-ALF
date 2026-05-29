import "./ContactForm.css";

export default function ContactForm() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        
        {/* Datos de contacto */}
        <div className="contact-info">
          <h2 className="contact-title">Nuestro Datos</h2>
          <p><strong>Dirección:</strong> Medellín, Antioquia</p>
          <p><strong>Email:</strong> proyectos@inselectricas.com</p>
          <p><strong>Teléfono:</strong> +57 319 351 1711</p>

          <div className="social-links">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>

        <div className="contact-form">
          <h2 className="form-title">
            Completa el formulario y recibe asesoría personalizada sobre tu Proyecto. ¡Hagámoslo juntos!
          </h2>
          <form>
            <div className="form-row">
              <input type="text" placeholder="Nombre" />
              <input type="text" placeholder="Apellidos" />
            </div>
            <input type="tel" placeholder="Teléfono" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Déjanos tu mensaje" rows={4}></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  );
}
