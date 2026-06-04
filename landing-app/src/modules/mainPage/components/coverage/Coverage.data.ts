interface Zone {
  name: string;
  lat: number;
  lng: number;
}

export const zones: Zone[] = [
  { name: 'Medellín', lat: 6.2442, lng: -75.5812 },
  { name: 'Bello', lat: 6.3394, lng: -75.5585 },
  { name: 'Itagüí', lat: 6.1847, lng: -75.5997 },
  { name: 'Envigado', lat: 6.1700, lng: -75.5867 },
  { name: 'Sabaneta', lat: 6.1514, lng: -75.6175 },
  { name: 'La Estrella', lat: 6.1561, lng: -75.6430 },
  { name: 'Copacabana', lat: 6.3494, lng: -75.5120 },
  { name: 'Girardota', lat: 6.3769, lng: -75.4447 },
];