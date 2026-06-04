import "./ContactForm.css";
import { useContactForm } from "./ContactForm.hook";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { LoadingButton } from "../../../shared/loadingButton/LoadingButton";
import { SuccessModal } from "../../../shared/succesModal/SuccessModal";
import { PhoneInputCustom } from "./phoneInputCustom/PhoneInputCustom";

export default function ContactForm() {
  const { form, status, handleChange, handleSubmit, setStatus, setForm } =
    useContactForm();

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2 className="contact-title">Nuestros Datos</h2>
          <p>
            <strong>Dirección:</strong> Medellín, Antioquia
          </p>
          <p>
            <strong>Email:</strong> proyectos@inselectricas.com
          </p>
          <p>
            <strong>Teléfono:</strong> +57 319 351 1711
          </p>
          <div className="social-links">
            <a href="#" aria-label="Facebook">
              <FaFacebook size={20} />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram size={20} />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        <div className="contact-form">
          <h2 className="form-title">
            Completa el formulario y recibe asesoría personalizada. ¡Hagámoslo
            juntos!
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                name="nombre"
                type="text"
                placeholder="Nombre"
                value={form.nombre}
                onChange={handleChange}
                required
              />
              <input
                name="apellidos"
                type="text"
                placeholder="Apellidos"
                value={form.apellidos}
                onChange={handleChange}
                required
              />
            </div>
            <PhoneInputCustom
              value={form.telefono}
              onChange={(value:any) =>
                setForm((prev) => ({ ...prev, telefono: value }))
              }
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="mensaje"
              placeholder="Déjanos tu mensaje"
              rows={4}
              value={form.mensaje}
              onChange={handleChange}
              required
            />

            <LoadingButton loading={status === "loading"} label="Enviar" />

            {status === "error" && (
              <p className="form-feedback error">
                ✗ Hubo un error. Intenta por WhatsApp.
              </p>
            )}

            <SuccessModal
              isOpen={status === "success"}
              onClose={() => setStatus("idle")}
            />
          </form>
        </div>
      </div>
    </section>
  );
}
