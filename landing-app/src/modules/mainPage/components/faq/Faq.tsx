import './Faq.css';
import { useState } from 'react';
import { faqs } from './Faq.data';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(prev => prev === i ? null : i);

  return (
    <section className="faq-section" id="faq">
      <div className="faq-inner">
        <div className="faq-header">
          <span className="faq-label">Soporte</span>
          <h2 className="faq-title">Preguntas<br />Frecuentes</h2>
          <p className="faq-subtitle">
            Todo lo que necesitas saber antes de contactarnos.
          </p>
          <a href="/contact" className="faq-cta">
            ¿Tienes otra pregunta? →
          </a>
        </div>

        <div className="faq-list">
          {faqs.map((item: any, i: number) => (
            <div
              key={i}
              className={`faq-item ${openIndex === i ? 'open' : ''}`}
              onClick={() => toggle(i)}
            >
              <div className="faq-question">
                <span>{item.question}</span>
                <span className="faq-chevron">{openIndex === i ? '−' : '+'}</span>
              </div>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}