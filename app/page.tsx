import { ArrowDown, ArrowRight, Download, Factory, ShieldCheck } from "lucide-react";
import Link from "next/link";
import ContactPanel from "@/components/ContactPanel";
import ManufacturingFilm from "@/components/ManufacturingFilm";
import { Counter, Reveal } from "@/components/Motion";
import ProductShowcase from "@/components/ProductShowcase";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { aboutContent, gallery, industries, partnerLogos, process, stats, trustStats, whyChooseUs } from "@/lib/siteData";

export default function HomePage() {
  return (
    <>
      <section className="relative flex min-h-[88vh] items-end overflow-hidden bg-[#071427] text-white">
        <div className="absolute inset-0">
          <img src="/assets/pal-banner.jpg" alt="Premium brass bath fittings showcase" className="hero-bg-image hero-bg-drift h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,10,22,0.94),rgba(11,31,58,0.74)_46%,rgba(3,10,22,0.36)),linear-gradient(0deg,rgba(3,10,22,0.96),rgba(3,10,22,0.18)_58%,rgba(3,10,22,0.72))]" />
          <div className="hero-light-sweep absolute inset-0" />
          <div className="hero-precision-grid absolute inset-0" />
          <div className="hero-gold-scan absolute inset-x-0 top-0" />
          <div className="hero-depth-vignette absolute inset-0" />
          <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent lg:left-[5.4vw]" />
        </div>
        <div className="hero-orbit absolute right-[8vw] top-28 hidden rounded-full border border-white/12 bg-white/[0.055] p-4 shadow-luxury backdrop-blur-2xl lg:block">
          <Factory className="h-7 w-7 text-gold" />
        </div>
        <div className="section-shell relative z-10 grid gap-9 pb-12 pt-28 lg:grid-cols-[1fr_0.68fr] lg:items-end">
          <Reveal>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-gold" />
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-white/62">Premium brass manufacturing</span>
            </div>
            <h1 className="hero-heading">
              <span className="hero-heading-line">Engineered for Precision.</span>
              <span className="hero-heading-line hero-heading-accent">Crafted for Luxury.</span>
            </h1>
            <p className="body-lg mt-6 max-w-[34rem] text-white/70">
              Premium brass bath fittings, faucet components, internal fittings, and OEM manufacturing trusted across India and global markets.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/products" className="btn-gold">
                Explore Products <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/catalogue" className="btn-ghost">
                <Download className="h-4 w-4" />
                Download Catalogue
              </Link>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3 border-y border-white/10 py-4">
              {["Brass", "OEM", "Export"].map((item) => (
                <div key={item}>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-gold/85">{item}</span>
                  <span className="mt-1 block text-xs text-white/46">Precision ready</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.16} className="hero-product-shell">
            <div className="hero-product-panel group relative rounded-[1.45rem] border border-white/12 bg-white/[0.055] p-3 shadow-luxury backdrop-blur-2xl">
              <div className="absolute -left-10 top-10 h-28 w-28 rounded-full bg-gold/14 blur-3xl" />
              <div className="absolute -right-8 bottom-12 h-32 w-32 rounded-full bg-secondary/18 blur-3xl" />
              <div className="relative overflow-hidden rounded-[1.1rem] bg-gradient-to-br from-white/[0.13] to-white/[0.035]">
                <div className="hero-product-stage">
                  {["home300x400.png", "contact-440x390-1.png", "p1-1.png"].map((image) => (
                    <img src={`/assets/${image}`} alt="Petrel luxury bathroom component" className="hero-product-slide" key={image} />
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.26} className="lg:col-span-2">
            <div className="grid gap-3 md:grid-cols-4">
              {trustStats.map((stat) => (
                <Counter {...stat} key={stat.label} />
              ))}
            </div>
          </Reveal>
        </div>
        <div className="absolute bottom-8 right-8 hidden items-center gap-3 text-sm text-white/48 lg:flex">
          Scroll <ArrowDown className="h-4 w-4 animate-bounce" />
        </div>
      </section>

      <section className="about-transition section-padding">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <Reveal>
          <div className="relative">
            <img src="/assets/company-main.jpg" alt="Petrel manufacturing facility" className="h-[560px] w-full rounded-[1.6rem] object-cover shadow-luxury" />
            <div className="absolute -bottom-5 -right-3 rounded-[1.2rem] border border-white/50 bg-white/80 p-4 shadow-luxury backdrop-blur-xl md:-right-6">
              <ShieldCheck className="mb-2 h-7 w-7 text-gold" />
              <strong className="block text-lg text-primary">Quality-led production</strong>
              <span className="text-sm text-black/55">Inspection discipline at every stage.</span>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="eyebrow">{aboutContent.eyebrow}</p>
          <h2 className="about-heading mt-4 text-primary">{aboutContent.title}</h2>
          <div className="mt-5 space-y-4 text-base leading-8 text-black/62">
            {aboutContent.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-7 grid grid-cols-2 gap-3">
            {stats.map((stat) => (
              <div className="elegant-card rounded-2xl p-4" key={stat.label}>
                <strong className="text-3xl font-semibold text-primary">{stat.value}{stat.suffix}</strong>
                <span className="mt-2 block text-xs uppercase tracking-[0.16em] text-black/45">{stat.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
        </div>
      </section>

      <ProductShowcase />

      <section className="bg-[#071427] py-18 text-white md:py-20">
        <div className="section-shell">
          <Reveal className="mb-9">
            <p className="eyebrow">Why Choose Us</p>
            <h2 className="heading-lg mt-4 max-w-4xl">Every component is built around trust, precision, and long-term value.</h2>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal delay={index * 0.05} key={item.title}>
                  <article className="dark-elegant-card group h-full rounded-[1.25rem] p-6">
                    <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-gold/80 to-transparent opacity-0 transition group-hover:opacity-100" />
                    <Icon className="h-8 w-8 text-gold transition group-hover:scale-110" />
                    <h3 className="mt-6 text-xl font-semibold tracking-tight">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/58">{item.copy}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell section-padding">
        <Reveal className="mb-12">
          <p className="eyebrow">Manufacturing Excellence</p>
          <h2 className="heading-lg mt-4 max-w-4xl text-primary">A disciplined process from concept to packaged product.</h2>
        </Reveal>
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <ManufacturingFilm variant="feature" />
          </Reveal>
          <div className="space-y-4">
            {process.map((step, index) => (
              <Reveal delay={index * 0.05} key={step.title}>
                <div className="elegant-card flex gap-5 rounded-2xl p-5">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary text-sm font-semibold text-gold">{String(index + 1).padStart(2, "0")}</span>
                  <span>
                    <strong className="block text-xl text-primary">{step.title}</strong>
                    <span className="mt-1 block text-sm leading-6 text-black/56">{step.copy}</span>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="industries" className="bg-ivory py-18 md:py-20">
        <div className="section-shell">
          <Reveal className="mb-9">
            <p className="eyebrow">Industries Served</p>
            <h2 className="heading-lg mt-4 max-w-4xl text-primary">Made for professionals who shape premium spaces.</h2>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {industries.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal delay={index * 0.04} key={item.title}>
                  <article className="elegant-card h-full rounded-[1.25rem] p-6">
                    <Icon className="h-8 w-8 text-secondary" />
                    <h3 className="mt-6 text-xl font-semibold text-primary">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-black/58">{item.copy}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-white py-12">
        <div className="section-shell mb-6">
          <p className="eyebrow">Clients & Partners</p>
        </div>
        <div className="flex w-max gap-4 marquee">
          {[...partnerLogos, ...partnerLogos].map((logo, index) => (
            <div className="grid h-20 w-48 place-items-center rounded-2xl border border-primary/8 bg-primary/[0.03] text-xs font-black tracking-[0.2em] text-primary/50" key={`${logo}-${index}`}>
              {logo}
            </div>
          ))}
        </div>
      </section>

      <TestimonialCarousel />

      <section className="bg-primary py-18 text-white md:py-20">
        <div className="section-shell">
          <Reveal className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Gallery</p>
              <h2 className="heading-lg mt-4 max-w-3xl">A closer look at Petrel’s manufacturing and product detail.</h2>
            </div>
            <Link href="/gallery" className="btn-ghost w-fit">
              View Full Gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {gallery.slice(0, 3).map((image) => (
              <Link href="/gallery" className="dark-elegant-card group rounded-[1.2rem]" key={image}>
                <img src={`/assets/${image}`} alt="Petrel gallery preview" className="image-lift h-72 w-full object-cover" loading="lazy" />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <ContactPanel />
    </>
  );
}
