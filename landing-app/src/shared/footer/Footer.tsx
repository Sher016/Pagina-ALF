import './Footer.css'
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-col footer-brand-col">
          <img
            src="/src/assets/images/LogoRemoved.png"
            alt="ALF Ingeniería Eléctrica"
            className="footer-logo"
          />
          <p className="footer-desc">
            Soluciones eléctricas integrales para proyectos residenciales,
            comerciales e industriales. Certificados RETIE.
          </p>
          <div className="footer-social">
            <a href="#" aria-label="LinkedIn"><FaLinkedin size={18} /></a>
            <a href="#" aria-label="Facebook"><FaFacebook size={18} /></a>
            <a href="#" aria-label="Instagram"><FaInstagram size={18} /></a>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Navegación</h4>
          <ul className="footer-links">
            <li><a href="/">Servicios</a></li>
            <li><a href="#process">Procesos</a></li>
            <li><a href="#industry">Industria</a></li>
            <li><a href="#team">Equipo</a></li>
            <li><a href="/contact">Contacto</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Servicios</h4>
          <ul className="footer-links">
            <li><a href="#">Automatización residencial</a></li>
            <li><a href="#">Energías renovables</a></li>
            <li><a href="#">Mantenimiento industrial</a></li>
            <li><a href="#">Auditorías eléctricas</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Contacto</h4>
          <ul className="footer-contact">
            <li>
              <FaMapMarkerAlt size={14} />
              <span>Medellín, Antioquia, Colombia</span>
            </li>
            <li>
              <FaPhone size={14} />
              <a href="tel:+573227864198">+57 322 786 4198</a>
            </li>
            <li>
              <FaEnvelope size={14} />
              <a href="mailto:contacto@alfelectrica.com">contacto@alfelectrica.com</a>
            </li>
            <li>
              <FaWhatsapp size={14} />
              <a href="https://wa.me/573227864198" target="_blank" rel="noopener noreferrer">
                WhatsApp directo
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} ALF Ingeniería Eléctrica. Todos los derechos reservados.</span>
        <div className="footer-legal">
          <a href="#privacy">Política de privacidad</a>
          <a href="#terms">Términos de servicio</a>
        </div>
      </div>
    </footer>
  )
}
