
import './ThemeToggle.css'
import { useThemeToggle } from './ThemeToggle.hook'

export function ThemeToggle() {
  const { theme, toggleTheme } = useThemeToggle()

  return (
    <button
      className={`theme-toggle ${theme === 'light' ? 'light' : ''}`}
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      title={theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}
    >
      <span className="theme-toggle__track">
        <span className="theme-toggle__thumb">
          {theme === 'dark' ? '🌙' : '☀️'}
        </span>
      </span>
    </button>
  )
}