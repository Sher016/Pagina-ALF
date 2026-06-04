import './Coverage.css';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { zones } from './Coverage.data';

export function Coverage() {
  return (
    <section className="coverage-section" id="coverage">
      <div className="coverage-header">
        <span className="coverage-label">Cobertura</span>
        <h2 className="coverage-title">¿Dónde trabajamos?</h2>
        <p className="coverage-subtitle">
          Atendemos Medellín y toda el área metropolitana con técnicos certificados.
        </p>
      </div>

      <div className="coverage-content">
        <div className="coverage-map">
          <MapContainer
            center={[6.2442, -75.5812]}
            zoom={11}
            scrollWheelZoom={false}
            style={{ height: '100%', width: '100%', borderRadius: '16px' }}
          >
            <TileLayer
              attribution='&copy; OpenStreetMap'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {zones.map((zone) => (
              <CircleMarker
                key={zone.name}
                center={[zone.lat, zone.lng]}
                radius={10}
                pathOptions={{
                  color: '#8DC63F',
                  fillColor: '#8DC63F',
                  fillOpacity: 0.6,
                }}
              >
                <Popup>{zone.name}</Popup>
              </CircleMarker>
            ))}
          </MapContainer>
        </div>

        <div className="coverage-zones">
          {zones.map((zone) => (
            <div key={zone.name} className="coverage-zone-item">
              <span className="coverage-zone-dot" />
              <span>{zone.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}