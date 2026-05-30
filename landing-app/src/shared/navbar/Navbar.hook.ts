export interface NavLink {
  label: string;
  type: "scroll" | "navigate";
  path: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Servicios", type: "navigate", path: "/" },
  { label: "Procesos", type: "scroll", path: "#process" },
  { label: "Industria", type: "scroll", path: "#industry" },
  { label: "Nosotros", type: "scroll", path: "/about" },
  { label: "Contacto", type: "navigate", path: "/contact" },
];

const WHATSAPP_LINK =
  "https://wa.me/573227864198?text=Hola%20eléctricos,%20quiero%20hablar%20con%20un%20asesor%20para%20los%20servicios%20de%20un%20electricista";

export function useNavbar() {
  return { navLinks: NAV_LINKS, WHATSAPP_LINK };
}