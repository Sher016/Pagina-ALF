import "./App.css"
import { HomePage } from "./modules/mainPage/HomePage"
import { Layout } from "./shared/Layout"

function App() {
  return (
    <Layout>
      <section className="hero">  
        <HomePage />
      </section>
    </Layout>
  )
}

export default App

