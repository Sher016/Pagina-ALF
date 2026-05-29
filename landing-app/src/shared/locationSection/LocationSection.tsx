import "./LocationSection.css";

export function LocationSection() {
  return (
    <section className="location-section">
      <h2 className="location-title">Ubicación</h2>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4880.139183598412!2d-75.56153802418403!3d6.2530096262458805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428f6d209dc25%3A0x36ba4491f92a3240!2sCl.%2059%20%2342-27%2C%20La%20Candelaria%2C%20Medell%C3%ADn%2C%20La%20Candelaria%2C%20Medell%C3%ADn%2C%20Antioquia!5e1!3m2!1ses!2sco!4v1780041642588!5m2!1ses!2sco"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación Volt & Vector"
        ></iframe>
      </div>
    </section>
  );
}
