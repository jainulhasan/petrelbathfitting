"use client";

import { ArrowLeft, ArrowRight, Quote, Star, UserRound } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion, Reveal } from "@/components/Motion";
import { testimonials } from "@/lib/siteData";

export default function TestimonialCarousel() {
  const [active, setActive] = useState(0);

  const move = (direction: "prev" | "next") => {
    setActive((current) => {
      const next = direction === "next" ? current + 1 : current - 1;
      return (next + testimonials.length) % testimonials.length;
    });
  };

  const getOffset = (index: number) => {
    let offset = index - active;
    const midpoint = testimonials.length / 2;

    if (offset > midpoint) offset -= testimonials.length;
    if (offset < -midpoint) offset += testimonials.length;

    return offset;
  };

  return (
    <section className="testimonial-section section-padding">
      <div className="section-shell">
        <Reveal className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Testimonials</p>
            <h2 className="heading-lg mt-4 max-w-4xl text-primary">Confidence from builders, dealers, and professional buyers.</h2>
          </div>
          <div className="flex items-center gap-2">
            <button className="testimonial-control" onClick={() => move("prev")} type="button" aria-label="Previous testimonial">
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button className="testimonial-control" onClick={() => move("next")} type="button" aria-label="Next testimonial">
              <ArrowRight className="h-4 w-4" />
            </button>
            <Link href="/testimonials" className="ml-2 hidden border-b border-gold/45 pb-1 text-sm font-bold text-primary transition-luxury hover:border-primary hover:text-secondary sm:inline-flex">
              View all
            </Link>
          </div>
        </Reveal>

        <div className="testimonial-stack" aria-live="polite">
          {testimonials.map((item, index) => {
            const offset = getOffset(index);
            const distance = Math.abs(offset);
            const isActive = index === active;
            const isVisible = distance <= 1;

            return (
              <motion.article
                className="testimonial-stack-card"
                key={item.name}
                initial={false}
                animate={{
                  opacity: isActive ? 1 : isVisible ? 0.42 : 0,
                  x: isVisible ? offset * 165 : offset * 220,
                  y: isActive ? 0 : isVisible ? 42 : 70,
                  scale: isActive ? 1 : isVisible ? 0.86 : 0.78,
                  filter: isActive ? "blur(0px)" : isVisible ? "blur(0px)" : "blur(10px)"
                }}
                transition={{
                  type: "spring",
                  stiffness: 92,
                  damping: 24,
                  mass: 0.95,
                  opacity: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
                  filter: { duration: 0.42, ease: [0.22, 1, 0.36, 1] }
                }}
                style={{ zIndex: isActive ? 3 : isVisible ? 2 - distance : 0, pointerEvents: isVisible ? "auto" : "none" }}
                onClick={() => !isActive && isVisible && setActive(index)}
              >
                <span className="testimonial-index">{String(index + 1).padStart(2, "0")}</span>
                <div className="mb-7 flex items-start justify-between gap-5">
                  <div className="flex items-center gap-4">
                    <Avatar image={item.image} name={item.name} />
                    <span>
                      <strong className="block text-primary">{item.name}</strong>
                      <span className="text-sm text-black/45">{item.role}</span>
                    </span>
                  </div>
                  <Quote className="h-9 w-9 text-gold/65" />
                </div>
                <div className="mb-5 flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star className="h-4 w-4 fill-current" key={starIndex} />
                  ))}
                </div>
                <p className="text-base leading-8 text-black/66">“{item.quote}”</p>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((item, index) => (
            <button
              className={`h-2 rounded-full transition-luxury ${active === index ? "w-8 bg-gold" : "w-2 bg-primary/18 hover:bg-primary/35"}`}
              onClick={() => setActive(index)}
              type="button"
              aria-label={`Show testimonial from ${item.name}`}
              key={item.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Avatar({ image, name }: Readonly<{ image: string | null; name: string }>) {
  if (image) {
    return <img src={`/assets/${image}`} alt={name} className="h-16 w-16 rounded-full border border-primary/8 object-cover shadow-luxury" />;
  }

  return (
    <span className="grid h-16 w-16 place-items-center rounded-full border border-primary/8 bg-primary/[0.04] text-primary/45 shadow-luxury">
      <UserRound className="h-7 w-7" />
    </span>
  );
}
