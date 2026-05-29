import { HeroCarousel } from "./components/heroCarousel/HeroCarousel"
import { Competencies } from "./components/competencies/Competencies"
import { Protocol } from "./components/protocol/Protocol"

export function HomePage() {
  return (
    <>
      <HeroCarousel />
      <Competencies />
      <Protocol />
    </>
  )
}
