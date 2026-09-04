"use client";

import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";

interface GoogleReview {
  id: string;
  quote: string;
  highlightWords?: string[];
  name: string;
  source: string;
  avatar:
    | { type: "initials"; text: string; bg: string }
    | { type: "image"; src: string };
  rating: number;
}

const googleReviews: GoogleReview[] = [
  {
    id: "1",
    quote:
      "Experiência maravilhosa!! Todos simpáticos e atenciosos,produtos de primeira linha e com preço justo.",
    name: "Mariluci Tavares",
    source: "Google Meu Negócio",
    avatar: {
      type: "initials",
      text: "M",
      bg: "bg-[#D81B60] text-white",
    },
    rating: 5,
  },
  {
    id: "2",
    quote:
      "Ótima loja, atendimento impecável, todas meninas são super simpáticas.",
    name: "Aline Cardoso",
    source: "Google Meu Negócio",
    avatar: {
      type: "initials",
      text: "C",
      bg: "bg-[#00897B] text-white",
    },
    rating: 5,
  },
  {
    id: "3",
    quote:
      "Excelente, ótimo atendimento, produtos de qualidade e ótimo preços",
    name: "Laís Scarpeline",
    source: "Google Meu Negócio",
    avatar: {
      type: "initials",
      text: "L",
      bg: "bg-[#8E24AA] text-white",
    },
    rating: 5,
  },
];

function GoogleGIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
        fill="#EA4335"
      />
    </svg>
  );
}

const GOOGLE_MAPS_SEARCH_URL =
  "https://www.google.com/maps/search/?api=1&query=Pititicos+São+Joaquim+da+Barra";

export function Testimonials() {
  return (
    <section id="avaliacoes" className="relative py-14 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-xl">
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

          {/* Google Score Badge */}
          <a
            href={GOOGLE_MAPS_SEARCH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3.5 p-3 sm:px-4 sm:py-3 rounded-2xl bg-white border border-[var(--brand-border)] shadow-xs hover:shadow-md hover:border-purple/30 transition-all duration-300 shrink-0 self-start md:self-auto"
          >
            <GoogleGIcon className="w-6 h-6 shrink-0" />
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-bold text-sm text-ink leading-none">5.0</span>
                <div className="flex items-center gap-0.5 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} fill="#FBBF24" className="text-amber-400" />
                  ))}
                </div>
              </div>
              <span className="font-body text-[11px] text-muted-fg font-medium leading-tight mt-0.5 group-hover:text-purple transition-colors">
                Avaliações no Google Meu Negócio
              </span>
            </div>
            <ExternalLink size={14} className="text-muted-fg group-hover:text-purple ml-1 transition-colors" />
          </a>
        </div>

        {/* Testimonials Grid (1 Col on Mobile, 3 Cols on Tablet/Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {googleReviews.map((item, idx) => (
            <motion.figure
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl sm:rounded-[24px] bg-lavender-soft border border-[var(--brand-border)] shadow-[0_2px_12px_-4px_rgba(81,36,94,0.04)] hover:shadow-[0_12px_28px_-8px_rgba(81,36,94,0.12)] transition-all duration-300"
            >
              <div>
                {/* 5 Stars Rating + Google Mini Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1" aria-label="Avaliação 5 de 5 estrelas">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#FBBF24" className="text-amber-400" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-medium text-muted-fg/80">
                    <GoogleGIcon className="w-3.5 h-3.5" />
                    <span>Google</span>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="mt-4 font-body text-[14px] sm:text-[15px] leading-relaxed text-ink/90 font-medium">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
              </div>

              {/* Author figcaption */}
              <figcaption className="mt-6 pt-4 border-t border-[var(--brand-border)] flex items-center gap-3">
                {item.avatar.type === "initials" ? (
                  <div
                    className={`grid place-items-center w-10 h-10 rounded-full font-display font-bold text-sm shrink-0 shadow-xs ${item.avatar.bg}`}
                  >
                    {item.avatar.text}
                  </div>
                ) : (
                  <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
                    <img
                      src={item.avatar.src}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="flex flex-col">
                  <span className="font-display font-bold text-[14px] text-ink leading-snug">
                    {item.name}
                  </span>
                  <span className="font-body text-[11px] text-muted-fg leading-tight flex items-center gap-1">
                    Verificada no Google • São Joaquim da Barra
                  </span>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* Footer Link & Callout */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[var(--brand-border)]">
          <p className="font-body text-xs text-muted-fg">
            Avaliações e experiências reais de clientes registradas no Google Maps.
          </p>
          <a
            href={GOOGLE_MAPS_SEARCH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-body font-semibold text-xs text-purple hover:text-deep-purple hover:underline transition-colors"
          >
            <span>Ver todos os comentários do Google</span>
            <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
