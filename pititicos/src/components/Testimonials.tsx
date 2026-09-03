"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "Roupas de altíssima qualidade e um atendimento impecável! Minha filha amou os vestidos, o tecido é super macio e confortável para brincar.",
    name: "Mariana Costa",
    role: "Mãe da Alice • São Joaquim da Barra",
    initials: "MC",
  },
  {
    id: "2",
    quote:
      "A melhor loja infantil de São Joaquim da Barra. Sempre que preciso de presentes ou peças especiais para o meu filho, encontro opções lindas e duráveis.",
    name: "Ana Paula Ramos",
    role: "Mãe do Theo • São Joaquim da Barra",
    initials: "AR",
  },
  {
    id: "3",
    quote:
      "Atendimento nota 10 pelo WhatsApp! Me mandaram fotos dos looks, tiraram todas as dúvidas e a experiência foi maravilhosa. Super recomendo!",
    name: "Fernanda Lima",
    role: "Cliente Pititicos",
    initials: "FL",
  },
];

export function Testimonials() {
  return (
    <section id="sobre" className="relative py-14 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-xl mb-8 sm:mb-12">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className="w-6 h-[1px] bg-apricot" />
            <span className="font-body font-semibold text-[12px] sm:text-[13px] leading-[19.5px] tracking-[0.18em] uppercase text-purple">
              Prova social
            </span>
          </div>

          {/* Title */}
          <h2 className="mt-2.5 sm:mt-3.5 font-display font-bold text-ink text-[clamp(1.75rem,3.8vw,2.4rem)] leading-tight tracking-tight">
            Quem conhece a Pititicos, volta!
          </h2>
        </div>

        {/* Testimonials Grid (1 Col on Mobile, 3 Cols on Tablet/Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {testimonials.map((item, idx) => (
            <motion.figure
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl sm:rounded-[24px] bg-lavender-soft border border-[var(--brand-border)] shadow-[0_2px_12px_-4px_rgba(81,36,94,0.04)] hover:shadow-[0_12px_28px_-8px_rgba(81,36,94,0.12)] transition-all duration-300"
            >
              <div>
                {/* 5 Stars Rating */}
                <div className="flex items-center gap-1 text-apricot" aria-label="Avaliação 5 de 5 estrelas">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#E99A55" className="text-apricot" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="mt-4 font-body text-[14px] sm:text-[15px] leading-relaxed text-ink/85">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
              </div>

              {/* Author figcaption */}
              <figcaption className="mt-6 pt-4 border-t border-[var(--brand-border)] flex items-center gap-3">
                <div className="grid place-items-center w-10 h-10 rounded-full bg-purple/10 text-purple font-display font-bold text-sm shrink-0">
                  {item.initials}
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-bold text-[15px] text-ink leading-snug">
                    {item.name}
                  </span>
                  <span className="font-body text-[12px] text-muted-fg leading-tight">
                    {item.role}
                  </span>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* Footer Note */}
        <p className="mt-6 sm:mt-8 font-body text-xs text-muted-fg">
          Espaço de depoimentos — avaliações e experiências reais de famílias que compram na Pititicos.
        </p>
      </div>
    </section>
  );
}
