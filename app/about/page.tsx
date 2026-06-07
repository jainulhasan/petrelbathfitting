import type { Metadata } from "next";
import { Factory, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/Motion";
import { aboutContent, process, stats, whyChooseUs } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "About",
  description: "Petrel's manufacturing story, quality discipline, and premium brass fittings capability."
};

export default function AboutPage() {
  return (
    <>
      <section className="relative flex min-h-[58vh] items-end overflow-hidden bg-primary px-5 pb-12 pt-28 text-white md:px-8">
        <img src="/assets/1920-x-560-_-OUR-FIRM.jpg" alt="Petrel company" className="absolute inset-0 h-full w-full object-cover opacity-48" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/82 to-primary/20" />
        <div className="section-shell relative">
          <p className="eyebrow">About Petrel</p>
          <h1 className="heading-xl mt-4">Precision manufacturing with a premium market mindset.</h1>
        </div>
      </section>
      <section className="section-shell section-padding grid gap-10 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <img src="/assets/petrelbathfitting.jpg" alt="Petrel premium product" className="h-[500px] w-full rounded-[1.5rem] object-cover shadow-luxury" />
        </Reveal>
        <Reveal delay={0.12}>
          <Factory className="h-12 w-12 text-gold" />
          <p className="eyebrow mt-5">{aboutContent.eyebrow}</p>
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
      </section>
      <section className="bg-primary py-18 text-white md:py-20">
        <div className="section-shell">
          <Reveal className="mb-10">
            <p className="eyebrow">Quality Discipline</p>
            <h2 className="heading-lg mt-4 max-w-4xl">Every stage is designed to protect performance and presentation.</h2>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {whyChooseUs.slice(0, 3).map((item) => (
              <article className="dark-elegant-card rounded-[1.35rem] p-6" key={item.title}>
                <ShieldCheck className="h-9 w-9 text-gold" />
                <h3 className="mt-7 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/58">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section-shell section-padding">
        <p className="eyebrow">Process</p>
        <h2 className="heading-lg mt-4 max-w-4xl text-primary">From engineering intent to dealer-ready packaging.</h2>
        <div className="mt-12 grid gap-4">
          {process.map((item, index) => (
            <Reveal delay={index * 0.05} key={item.title}>
              <div className="elegant-card rounded-2xl p-6 md:flex md:items-center md:gap-8">
                <span className="text-4xl font-semibold text-gold">{index + 1}</span>
                <div>
                  <h3 className="text-2xl font-semibold text-primary">{item.title}</h3>
                  <p className="mt-2 text-black/58">{item.copy}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
