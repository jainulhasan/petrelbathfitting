import type { Metadata } from "next";
import { ArrowUpRight, Download } from "lucide-react";
import { Reveal } from "@/components/Motion";
import { catalogues } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Catalogue",
  description: "Download Petrel product catalogues and brochures."
};

export default function CataloguePage() {
  return (
    <>
      <section className="relative flex min-h-[58vh] items-end overflow-hidden bg-primary px-5 pb-12 pt-28 text-white md:px-8">
        <img src="/assets/petrelbathware-banner.jpg" alt="Petrel catalogue" className="absolute inset-0 h-full w-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/78 to-primary/20" />
        <div className="section-shell relative">
          <p className="eyebrow">Catalogue</p>
          <h1 className="heading-xl mt-4">Premium product literature for professional buyers.</h1>
          <p className="body-lg mt-6 max-w-2xl text-white/68">Download product catalogues, brochures, and collection references for specification, sourcing, and dealer conversations.</p>
        </div>
      </section>
      <section className="section-shell section-padding grid gap-6 md:grid-cols-3">
        {catalogues.map((item, index) => (
          <Reveal delay={index * 0.08} key={item.title}>
            <article className="elegant-card group rounded-[1.5rem]">
              <img src={`/assets/${item.cover}`} alt={item.title} className="image-lift h-64 w-full object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-primary">{item.title}</h2>
                <a href={`/assets/${item.file}`} target="_blank" rel="noreferrer" className="btn-gold mt-6">
                  <Download className="h-4 w-4" />
                  Open PDF
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </section>
      <section className="section-shell pb-24">
        <div className="rounded-[1.5rem] bg-primary p-6 text-white md:flex md:items-center md:justify-between md:p-8">
          <div>
            <p className="eyebrow">Need OEM documentation?</p>
            <h2 className="heading-md mt-3">Request technical specifications for your project.</h2>
          </div>
          <a href="/contact" className="btn-ghost mt-6 md:mt-0">
            Contact Sales <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
}
