"use client";

import { motion } from "framer-motion";
import { Shirt, Heart, Store, MessageCircle } from "lucide-react";

const trustItems = [
  {
    icon: Shirt,
    text: "Moda infantil",
  },
  {
    icon: MessageCircle,
    text: "Atendimento personalizado",
  },
  {
    icon: Store,
    text: "Loja física em São Joaquim da Barra",
  },
  {
    icon: Heart,
    text: "Novidades selecionadas com carinho",
  },
];

export function TrustBar() {
  return (
    <section className="bg-lavender-soft border-y border-[var(--brand-border)] py-6 sm:py-7">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-8">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-center gap-3.5"
              >
                <div className="grid place-items-center w-10 h-10 rounded-full bg-white shadow-[0_0_0_1px_rgba(82,45,94,0.1)] shrink-0">
                  <Icon size={18} className="text-purple" />
                </div>
                <span className="font-body font-medium text-[14px] sm:text-[15px] leading-snug text-purple-deep">
                  {item.text}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
