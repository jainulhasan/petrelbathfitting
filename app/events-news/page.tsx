import type { Metadata } from "next";
import { ArrowRight, Award, CalendarDays, Newspaper } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/Motion";
import { certificates, newsHighlights } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Events & News",
  description: "Explore Petrel Bath Fittings events, business updates, news highlights, and important authorization certificates."
};

const featureArticles = [
  {
    title: "Business events focused on market growth and dealer confidence",
    date: "June 2026",
    category: "Business Event",
    image: "company-building-no-car.png",
    copy: "Petrel continues to build stronger connections with dealers, sourcing partners, and project professionals through business-focused interactions and product-led conversations."
  },
  {
    title: "High-end technology in research, development, and quality control",
    date: "May 2026",
    category: "Company Update",
    image: "why-choose-us-1.jpg",
    copy: "Ongoing improvements in research, development, and quality control support reliable brass fittings, refined finishing, and consistent performance for residential and commercial markets."
  },
  {
    title: "Premium bath fitting solutions for modern project requirements",
    date: "April 2026",
    category: "Industry News",
    image: "petrelbathware-banner.jpg",
    copy: "Petrel’s product range is shaped around practical installation needs, market-ready design, and long-term value for professionals who specify and source bathware."
  }
];

export default function EventsNewsPage() {
  return (
    <>
      <section className="relative flex min-h-[58vh] items-end overflow-hidden bg-primary pb-14 pt-32 text-white">
        <img src="/assets/company-building-no-car.png" alt="Petrel events and news" className="absolute inset-0 h-full w-full object-cover opacity-36" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,10,22,0.96),rgba(11,31,58,0.78)_54%,rgba(3,10,22,0.42)),linear-gradient(0deg,rgba(3,10,22,0.94),transparent_62%)]" />
        <div className="hero-precision-grid absolute inset-0" />
        <div className="section-shell relative z-10">
          <Reveal>
            <p className="eyebrow">Events & News</p>
            <h1 className="heading-xl mt-4">Business updates, event highlights, and trusted recognitions.</h1>
            <p className="body-lg mt-6 max-w-2xl text-white/68">
              Follow Petrel’s company updates, business event participation, product-led conversations, and important authorization certificates.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="section-shell grid gap-4 md:grid-cols-3">
          {newsHighlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal delay={index * 0.05} key={item.title}>
                <article className="elegant-card h-full rounded-[1.25rem] p-5">
                  <Icon className="h-8 w-8 text-gold" />
                  <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.2em] text-black/38">{item.category} / {item.date}</p>
                  <h2 className="mt-3 text-xl font-semibold text-primary">{item.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-black/58">{item.summary}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section-shell section-padding">
        <Reveal className="mb-10">
          <p className="eyebrow">Latest Highlights</p>
          <h2 className="heading-lg mt-4 max-w-4xl text-primary">A clean view of recent business activity and company communication.</h2>
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-3">
          {featureArticles.map((item, index) => (
            <Reveal delay={index * 0.06} key={item.title}>
              <article className="elegant-card h-full overflow-hidden rounded-[1.35rem]">
                <img src={`/assets/${item.image}`} alt={item.title} className="h-56 w-full object-cover" />
                <div className="p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">{item.category} / {item.date}</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-primary">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-black/58">{item.copy}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-primary py-18 text-white md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(212,175,55,0.18),transparent_28%),radial-gradient(circle_at_84%_18%,rgba(30,77,143,0.36),transparent_34%)]" />
        <div className="hero-precision-grid absolute inset-0 opacity-30" />
        <div className="section-shell relative">
          <Reveal className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <Award className="h-11 w-11 text-gold" />
              <h2 className="heading-lg mt-5 max-w-4xl text-white">Recognition that supports confidence in Petrel’s market relationships.</h2>
            </div>
            <Link href="/contact" className="btn-gold w-fit">
              Contact Petrel <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-2">
            {certificates.map((certificate, index) => (
              <Reveal delay={index * 0.06} key={certificate.title}>
                <article className="overflow-hidden rounded-[1.35rem] border border-white/12 bg-white/[0.08] shadow-2xl shadow-black/20 backdrop-blur-xl">
                  <div className="grid min-h-full gap-0 md:grid-cols-[0.95fr_1.05fr]">
                    <div className="bg-white p-4">
                      <img src={`/assets/${certificate.image}`} alt={certificate.title} className="h-full max-h-[420px] w-full rounded-xl object-contain" />
                    </div>
                    <div className="p-6">
                      <Award className="h-9 w-9 text-gold" />
                      <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/48">{certificate.issuer}</p>
                      <h3 className="mt-3 text-2xl font-semibold text-white">{certificate.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-white/62">{certificate.copy}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-white">
        <div className="section-shell flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="eyebrow">Stay Connected</p>
            <h2 className="heading-md mt-4 max-w-2xl">Need details about events, business collaborations, or certification support?</h2>
          </div>
          <Link href="/contact" className="btn-gold w-fit">
            Send Enquiry
          </Link>
        </div>
      </section>
    </>
  );
}
