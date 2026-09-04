"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { waLink } from "@/lib/site";

interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  span2?: boolean;
}

const categories: Category[] = [
  {
    id: "meninas",
    name: "Meninas",
    description: "Looks delicados, confortáveis e cheios de personalidade.",
    image: "/categories/cat-meninas.png",
  },
  {
    id: "meninos",
    name: "Meninos",
    description: "Peças resistentes e estilosas para brincar sem parar.",
    image: "/categories/cat-meninos.png",
  },
  {
    id: "bebes",
    name: "Bebês",
    description: "Tecidos suaves e aconchego para os primeiros momentos.",
    image: "/categories/cat-bebes.png",
    span2: true,
  },
  {
    id: "calcados",
    name: "Calçados",
    description: "Do primeiro passo às grandes descobertas.",
    image: "/categories/cat-calcados.png",
  },
  {
    id: "acessorios",
    name: "Acessórios",
    description: "Pequenos detalhes que completam cada look.",
    image: "/categories/cat-acessorios.png",
  },
];

export function Categories() {
  return (
    <section id="categorias" className="relative py-14 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-xl mb-8 sm:mb-12">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className="w-6 h-[1px] bg-apricot" />
            <span className="font-body font-semibold text-[12px] sm:text-[13px] leading-[19.5px] tracking-[0.18em] uppercase text-purple">
              Categorias
            </span>
          </div>

          {/* Title */}
          <h2 className="mt-2.5 sm:mt-3.5 font-display font-bold text-ink text-[clamp(1.75rem,4vw,2.5rem)] leading-tight tracking-tight">
            Para cada fase da infância
          </h2>

          {/* Description */}
          <p className="mt-2.5 sm:mt-3.5 font-body text-[14px] sm:text-[17px] leading-relaxed text-muted-fg">
            Encontre peças para acompanhar os pequenos em todos os momentos.
          </p>
        </div>

        {/* Categories Grid (2 Columns on mobile: 2 items, 1 full-width item, 2 items) */}
        <div className="grid grid-cols-2 gap-3.5 sm:gap-5 md:gap-6">
          {categories.map((cat, idx) => (
            <motion.a
              key={cat.id}
              href={waLink(`Olá! Gostaria de ver as opções de ${cat.name} disponíveis na Pititicos.`)}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className={`group relative rounded-2xl sm:rounded-[24px] overflow-hidden bg-lavender shadow-[0_0_0_1px_rgba(82,45,94,0.1)] hover:shadow-[0_20px_40px_-15px_rgba(81,36,94,0.35)] transition-all duration-300 block ${
                cat.span2
                  ? "col-span-2 h-[170px] sm:h-[210px] md:h-[220px]"
                  : "col-span-1 h-[210px] xs:h-[230px] sm:h-[220px]"
              }`}
            >
              {/* Background Image */}
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={cat.image}
                  alt={`Moda Infantil Pititicos - Categoria ${cat.name} em São Joaquim da Barra`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  sizes={cat.span2 ? "(max-width: 768px) 100vw, 1200px" : "(max-width: 768px) 50vw, 600px"}
                />
              </div>

              {/* Gradient overlay */}
              <div
                className="pointer-events-none absolute inset-0 transition-opacity duration-300 group-hover:opacity-90"
                style={{
                  background:
                    "linear-gradient(0deg, rgba(81, 36, 94, 0.88) 0%, rgba(81, 36, 94, 0.25) 50%, rgba(81, 36, 94, 0.02) 100%)",
                }}
              />

              {/* Content overlay */}
              <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-5 md:p-6 flex items-end justify-between gap-2 sm:gap-4 z-10">
                <div className="max-w-[78%] sm:max-w-[80%]">
                  <h3 className="font-display font-bold text-[17px] xs:text-lg sm:text-2xl text-white leading-snug tracking-tight">
                    {cat.name}
                  </h3>
                  <p className="mt-0.5 sm:mt-1 font-body text-[11px] sm:text-[13px] leading-tight sm:leading-relaxed text-white/85 line-clamp-2 sm:line-clamp-none">
                    {cat.description}
                  </p>
                </div>

                {/* Arrow Pill Button */}
                <div className="grid place-items-center w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white/90 group-hover:bg-white shadow-md shrink-0 transition-transform duration-200 group-hover:scale-110">
                  <svg width="14" height="14" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-[17px] sm:h-[17px] transition-transform group-hover:translate-x-0.5">
                    <path d="M3.54175 8.5H13.4584" stroke="#6F397D" strokeWidth="1.41667" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8.5 3.54175L13.4583 8.50008L8.5 13.4584" stroke="#6F397D" strokeWidth="1.41667" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
