import { useState, useEffect, useCallback } from "react";
import img1 from '../../../../assets/images/1.jpg'
import img2 from '../../../../assets/images/2.jpg'
import img3 from '../../../../assets/images/3.jpg'

export function useHeroCarousel() {
  interface Slide {
    image: string;
    tag?: string;
    title: string;
    highlight: string;
    subtitle: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  }

  const slides: Slide[] = [
    {
      image: img1,
      tag: "System Online",
      title: "Precision",
      highlight: "Engineering",
      subtitle: "For The Modern Grid.",
      primaryCta: { label: "View Blueprint", href: "#services" },
      secondaryCta: { label: "Nuestro Portfolio", href: "/projects" },
    },
    {
      image: img2,
      tag: "Industrial Grade",
      title: "Sustainable",
      highlight: "Infrastructure",
      subtitle: "Built For The Future.",
      primaryCta: { label: "Explore Services", href: "#services" },
      secondaryCta: { label: "Contact Us", href: "/contact" },
    },
    {
      image: img3,
      tag: "Certified Experts",
      title: "Safety &",
      highlight: "Precision",
      subtitle: "On Every Project.",
      primaryCta: { label: "Get a Quote", href: "/contact" },
      secondaryCta: { label: "Our Process", href: "#process" },
    },
  ];

  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (animating) return;
      setAnimating(true);
      setTimeout(() => {
        setCurrent(index);
        setAnimating(false);
      }, 400);
    },
    [animating],
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next]);

  const slide = slides[current];

  return { slides, slide, goTo, current, animating };
}
