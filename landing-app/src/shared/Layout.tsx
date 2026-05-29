import { Outlet } from "react-router-dom"
import { Navbar } from "./navbar/Navbar.tsx"
import { Footer } from "./footer/Footer.tsx"

interface LayoutProps {
  children?: React.ReactNode
}

export function Layout({ children }: LayoutProps = {}) {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="content">
        {children || <Outlet />}
      </main>
      <Footer />
    </div>
  )
}
