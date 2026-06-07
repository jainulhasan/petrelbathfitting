import type { Metadata } from "next";
import { Quote, Star, UserRound } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/Motion";
import { testimonials, trustStats } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Testimonials | Petrel Bath Fittings",
  description: "Read customer testimonials from builders, dealers, and bathware buyers who trust Petrel Bath Fittings."
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="relative flex min-h-[58vh] items-end overflow-hidden bg-primary pb-14 pt-32 text-white">
        <img src="/assets/1920-x-560-_-Testimonials.jpg" alt="Petrel testimonials" className="absolute inset-0 h-full w-full object-cover opacity-34" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,10,22,0.96),rgba(11,31,58,0.76)_52%,rgba(3,10,22,0.52)),linear-gradient(0deg,rgba(3,10,22,0.94),transparent_60%)]" />
        <div className="hero-precision-grid absolute inset-0" />
        <div className="section-shell relative z-10">
          <Reveal>
            <p className="eyebrow">Client Confidence</p>
            <h1 className="heading-xl mt-4">Testimonials from professionals who trust Petrel.</h1>
            <p className="body-lg mt-6 max-w-2xl text-white/68">
              Real feedback from builders, dealers, and bathware buyers who work with Petrel products in the market.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="section-shell grid gap-3 md:grid-cols-3">
          {trustStats.slice(0, 3).map((stat) => (
            <div className="rounded-2xl border border-primary/8 bg-primary/[0.03] p-5" key={stat.label}>
              <strong className="block text-3xl font-semibold text-primary">{stat.value}{stat.suffix}</strong>
              <span className="mt-2 block text-xs font-bold uppercase tracking-[0.18em] text-black/45">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell section-padding">
        <Reveal className="mb-10">
          <p className="eyebrow">What Clients Say</p>
          <h2 className="heading-lg mt-4 max-w-4xl text-primary">Dependable products, strong response, and long-term sourcing value.</h2>
        </Reveal>
        <div className="grid gap-5">
          {testimonials.map((item, index) => (
            <Reveal delay={index * 0.06} key={item.name}>
              <article className="elegant-card rounded-[1.45rem] p-6 md:grid md:grid-cols-[280px_1fr] md:items-center md:gap-8 md:p-7">
                <div className="flex items-start justify-between gap-5 border-b border-primary/8 pb-6 md:block md:border-b-0 md:border-r md:pb-0 md:pr-8">
                  <div className="flex items-center gap-4 md:block">
                    {item.image ? (
                      <img src={`/assets/${item.image}`} alt={item.name} className="h-16 w-16 rounded-full border border-primary/8 object-cover shadow-luxury md:h-20 md:w-20" />
                    ) : (
                      <span className="grid h-16 w-16 place-items-center rounded-full border border-primary/8 bg-primary/[0.04] text-primary/45 shadow-luxury md:h-20 md:w-20">
                        <UserRound className="h-7 w-7 md:h-8 md:w-8" />
                      </span>
                    )}
                    <span className="md:mt-5 md:block">
                      <strong className="block text-lg font-semibold text-primary">{item.name}</strong>
                      <span className="text-sm text-black/45">{item.role}</span>
                      <span className="mt-4 hidden gap-1 text-gold md:flex">
                        {Array.from({ length: 5 }).map((_, starIndex) => (
                          <Star className="h-4 w-4 fill-current" key={starIndex} />
                        ))}
                      </span>
                    </span>
                  </div>
                  <Quote className="h-9 w-9 text-gold/65" />
                </div>
                <div className="mt-5 flex gap-1 text-gold md:hidden">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star className="h-4 w-4 fill-current" key={starIndex} />
                  ))}
                </div>
                <div className="mt-5 md:mt-0">
                  <p className="text-lg leading-9 text-black/66">“{item.quote}”</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-primary py-16 text-white">
        <div className="section-shell flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="eyebrow">Work With Petrel</p>
            <h2 className="heading-md mt-4 max-w-2xl">Need premium brass bath fittings for projects, dealerships, or OEM supply?</h2>
          </div>
          <Link href="/contact" className="btn-gold w-fit">
            Contact Petrel
          </Link>
        </div>
      </section>
    </>
  );
}
