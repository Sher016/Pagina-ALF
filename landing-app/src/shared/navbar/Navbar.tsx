import "./Navbar.css";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { useNavbar } from "./Navbar.hook.ts";
import type { NavLink } from "./Navbar.hook.ts";
import { Link } from "react-router-dom";
import { ThemeToggle } from "../themeToggle/ThemeToggle.tsx";

function NavLinkItem({
  link,
  className,
  onClick,
}: {
  link: NavLink;
  className: string;
  onClick?: () => void;
}) {
  if (link.type === "scroll") {
    return (
      <a href={link.path} className={className} onClick={onClick}>
        {link.label}
      </a>
    );
  }

  if (link.path.includes("#")) {
    const [path, hash] = link.path.split("#");
    return (
      <a
        href={link.path}
        className={className}
        onClick={(e) => {
          e.preventDefault();
          window.location.href = `${path}#${hash}`;
          onClick?.();
        }}
      >
        {link.label}
      </a>
    );
  }

  return (
    <Link to={link.path} className={className} onClick={onClick}>
      {link.label}
    </Link>
  );
}

export function Navbar() {
  const { navLinks, WHATSAPP_LINK } = useNavbar();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="site-header">
        {/* <div className="brand">
          <img
            src="/src/assets/images/LogoRemoved.png"
            alt="ALF Ingeniería Eléctrica"
            className="brand-logo"
          />
        </div> */}
        <Link to="/" className="brand">
          <img
            src="/src/assets/images/LogoRemoved.png"
            alt="ALF Ingeniería Eléctrica"
            className="brand-logo"
          />
        </Link>

        <nav className="nav-links desktop-nav">
          {navLinks.map((link) => (
            <NavLinkItem key={link.label} link={link} className="nav-link" />
          ))}
        </nav>
        <div className="header-actions">
          <ThemeToggle />

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button desktop-cta"
          >
            <FaWhatsapp size={20} style={{ marginRight: "0.5rem" }} />
            Adquirir servicio
          </a>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <nav className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <NavLinkItem
            key={link.label}
            link={link}
            className="mobile-nav-link"
            onClick={closeMenu}
          />
        ))}
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-cta-button"
          onClick={closeMenu}
        >
          <FaWhatsapp size={18} style={{ marginRight: "0.5rem" }} />
          Asesoría Gratis
        </a>
        <div className="mobile-theme-toggle">
          <ThemeToggle />
        </div>
      </nav>
    </>
  );
}
