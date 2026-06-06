"use client";

import { ArrowLeft, ArrowRight, Quote, Star, UserRound } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { motion, Reveal } from "@/components/Motion";
import { testimonials } from "@/lib/siteData";

export default function TestimonialCarousel() {
  const railRef = useRef<HTMLDivElement>(null);

  const slide = (direction: "prev" | "next") => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelector<HTMLElement>("[data-testimonial-card]");
    rail.scrollBy({
      left: (card?.offsetWidth ?? 420) * (direction === "next" ? 1 : -1),
      behavior: "smooth"
    });
  };

  return (
    <section className="section-shell section-padding">
      <Reveal className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="eyebrow">Testimonials</p>
          <h2 className="heading-lg mt-4 max-w-4xl text-primary">Confidence from builders, dealers, and professional buyers.</h2>
        </div>
        <div className="flex items-center gap-2">
          <button className="testimonial-control" onClick={() => slide("prev")} type="button" aria-label="Previous testimonial">
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button className="testimonial-control" onClick={() => slide("next")} type="button" aria-label="Next testimonial">
            <ArrowRight className="h-4 w-4" />
          </button>
          <Link href="/testimonials" className="ml-2 hidden border-b border-gold/45 pb-1 text-sm font-bold text-primary transition-luxury hover:border-primary hover:text-secondary sm:inline-flex">
            View all
          </Link>
        </div>
      </Reveal>

      <div ref={railRef} className="testimonial-rail">
        {testimonials.map((item, index) => (
          <motion.article
            data-testimonial-card
            className="elegant-card min-h-[330px] w-[86vw] shrink-0 snap-center rounded-[1.35rem] p-6 md:w-[440px]"
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.82, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-7 flex items-start justify-between gap-5">
              <div className="flex items-center gap-4">
                {item.image ? (
                  <img src={`/assets/${item.image}`} alt={item.name} className="h-14 w-14 rounded-full border border-primary/8 object-cover shadow-luxury" />
                ) : (
                  <span className="grid h-14 w-14 place-items-center rounded-full border border-primary/8 bg-primary/[0.04] text-primary/45 shadow-luxury">
                    <UserRound className="h-6 w-6" />
                  </span>
                )}
                <span>
                  <strong className="block text-primary">{item.name}</strong>
                  <span className="text-sm text-black/45">{item.role}</span>
                </span>
              </div>
              <Quote className="h-8 w-8 text-gold/65" />
            </div>
            <div className="mb-5 flex gap-1 text-gold">
              {Array.from({ length: 5 }).map((_, starIndex) => (
                <Star className="h-4 w-4 fill-current" key={starIndex} />
              ))}
            </div>
            <p className="text-base leading-8 text-black/66">“{item.quote}”</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
