import { HeroCarousel } from "./components/heroCarousel/HeroCarousel"
import { Competencies } from "./components/competencies/Competencies"
import { Protocol } from "./components/protocol/Protocol"
import {Testimonials } from "./components/testimonials/Testimonials"
import { FAQ } from "./components/faq/Faq"
import { Coverage } from "./components/coverage/Coverage"

export function HomePage() {
  return (
    <>
      <HeroCarousel />
      <Competencies />
      <Protocol />
      <Testimonials />
      <FAQ />
      <Coverage />
    </>
  )
}
