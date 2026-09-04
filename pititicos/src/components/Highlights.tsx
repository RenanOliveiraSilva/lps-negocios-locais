"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { waLink } from "@/lib/site";

interface Product {
  id: string;
  title: string;
  category: string;
  badge?: string;
  image: string;
}

const products: Product[] = [
  {
    id: "vestido-florzinha",
    title: "Vestido Florzinha",
    category: "Meninas",
    badge: "Novidade",
    image: "/products/prod-vestido-florzinha.png",
  },
  {
    id: "conjunto-aventura",
    title: "Conjunto Aventura",
    category: "Meninos",
    badge: "Chegou agora",
    image: "/products/prod-conjunto-aventura.png",
  },
  {
    id: "body-nuvem",
    title: "Body Nuvem Macia",
    category: "Bebês",
    badge: "Queridinho",
    image: "/products/prod-body-nuvem.png",
  },
  {
    id: "look-descoberta",
    title: "Look Descoberta",
    category: "Meninas",
    image: "/products/prod-look-descoberta.png",
  },
];

export function Highlights() {
  return (
    <section id="novidades" className="relative py-14 sm:py-20 lg:py-24 bg-lavender-soft overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header: Title on Left, WhatsApp link on Right */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span className="w-6 h-[1px] bg-apricot" />
              <span className="font-body font-semibold text-[12px] sm:text-[13px] leading-[19.5px] tracking-[0.18em] uppercase text-purple">
                Vitrine
              </span>
            </div>

            {/* Title */}
            <h2 className="mt-2.5 sm:mt-3.5 font-display font-bold text-ink text-[clamp(1.75rem,3.8vw,2.4rem)] leading-tight tracking-tight">
              Os queridinhos da Pititicos 💜
            </h2>
          </div>

          {/* WhatsApp Link */}
          <a
            href={waLink("Olá! Gostaria de ver o catálogo completo de novidades no WhatsApp.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-body font-semibold text-[15px] sm:text-[16px] text-purple hover:text-purple-hover transition-colors group self-start sm:self-auto"
          >
            <span>Ver tudo no WhatsApp</span>
            <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
          {products.map((prod, idx) => (
            <motion.a
              key={prod.id}
              href={waLink(`Olá! Gostaria de saber mais sobre o produto "${prod.title}" da Pititicos.`)}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="group flex flex-col block"
            >
              {/* Product Image Frame */}
              <div className="relative aspect-[4/5] w-full rounded-2xl sm:rounded-[24px] overflow-hidden bg-lavender shadow-[0_0_0_1px_rgba(82,45,94,0.08)] group-hover:shadow-[0_16px_36px_-12px_rgba(81,36,94,0.25)] transition-all duration-300">
                <Image
                  src={prod.image}
                  alt={`${prod.title} - Moda Infantil na Pititicos São Joaquim da Barra`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 300px"
                />

                {/* Tag / Badge if present */}
                {prod.badge && (
                  <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 px-2.5 sm:px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-purple shadow-xs">
                    {prod.badge}
                  </div>
                )}
              </div>

              {/* Product Caption */}
              <div className="pt-3 sm:pt-3.5 px-1 flex flex-col">
                <span className="font-body font-semibold text-[11px] sm:text-[12px] uppercase tracking-wider text-apricot">
                  {prod.category}
                </span>
                <h3 className="mt-0.5 font-display font-bold text-[15px] sm:text-[17px] text-ink leading-snug group-hover:text-purple transition-colors">
                  {prod.title}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
