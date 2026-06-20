"use client";

import { ArrowUpRight, BadgeCheck } from "lucide-react";
import Link from "next/link";
import { motion, Reveal } from "@/components/Motion";
import { productCatalogue } from "@/lib/siteData";

export default function ProductCatalogue() {
  return (
    <section id="products" className="section-shell section-padding">
      <Reveal className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="eyebrow">Product Showcase</p>
          <h2 className="heading-lg mt-4 max-w-4xl text-primary">A refined range for premium bathware businesses.</h2>
        </div>
        <div className="hidden items-center gap-5 md:flex">
          <Link href="/contact" className="border-b border-gold/45 pb-1 text-sm font-bold text-primary transition-luxury hover:border-primary hover:text-secondary">
            Discuss requirements
          </Link>
          <Link href="/catalogue" className="border-b border-primary/25 pb-1 text-sm font-bold text-primary/72 transition-luxury hover:border-gold hover:text-secondary">
            View catalogue
          </Link>
        </div>
      </Reveal>

      <motion.div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3" layout>
        {productCatalogue.map((product, index) => (
          <motion.article
            className="elegant-card group overflow-hidden rounded-[1.35rem]"
            key={product.title}
            layout
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.72, delay: index * 0.025, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }}
          >
            <div className="relative border-b border-primary/8 px-5 py-4">
              <div className="flex items-center justify-between gap-4">
                <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary/42">Petrel {String(index + 1).padStart(2, "0")}</span>
                <span className="rounded-full border border-gold/30 bg-gold/8 px-3 py-1 text-[10px] font-semibold text-primary">{product.category}</span>
              </div>
            </div>

            <div className="relative mx-5 mt-5 aspect-square overflow-hidden rounded-xl bg-[linear-gradient(135deg,#fbfaf6,#edf3f1)]">
              <img
                src={`/assets/products/processed/${product.image}`}
                alt={product.title}
                className="image-lift h-full w-full object-fill mix-blend-multiply"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/8 via-transparent to-white/10 ring-1 ring-inset ring-black/5" />
              <div className="absolute right-4 top-4 h-12 w-12 rounded-full bg-white/45 blur-xl transition duration-700 group-hover:bg-gold/20" />
            </div>

            <div className="p-5">
              <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-secondary/70">
                <BadgeCheck className="h-3.5 w-3.5 text-gold" />
                Precision Made
              </div>
              <h3 className="min-h-14 text-xl font-semibold tracking-tight text-primary">{product.title}</h3>
              <p className="mt-3 min-h-28 text-sm leading-7 text-black/58">{product.description}</p>
              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
                <Link href="/contact" className="transition-luxury inline-flex items-center gap-2 border-b border-gold/45 pb-1 text-sm font-bold text-primary hover:border-primary hover:text-secondary">
                  Enquire now <ArrowUpRight className="h-4 w-4 text-gold transition-luxury group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
                <Link href="/catalogue" className="transition-luxury inline-flex items-center gap-2 border-b border-primary/20 pb-1 text-sm font-bold text-primary/65 hover:border-gold hover:text-secondary">
                  View catalogue <ArrowUpRight className="h-4 w-4 text-gold transition-luxury group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
