import './Footer.css'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">ALF electricals</div>
      <div className="footer-links">
        <a href="#privacy">Privacy Policy</a>
        <a href="#terms">Terms of Service</a>
      </div>
      <div className="footer-social">
        <span className="footer-social-label">Síguenos</span>
        <a href="#" aria-label="Twitter">🐦</a>
        <a href="#" aria-label="LinkedIn">💼</a>
        <a href="#" aria-label="Facebook">📘</a>
      </div>
    </footer>
  )
}
