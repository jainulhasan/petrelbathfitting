import type { Metadata } from "next";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Explore Petrel Bath Fittings manufacturing, product, quality, and facility gallery."
};

export default function GalleryPage() {
  return (
    <>
      <section className="relative flex min-h-[58vh] items-end overflow-hidden bg-primary px-5 pb-12 pt-28 text-white md:px-8">
        <img src="/assets/our-comapny3.jpg" alt="Petrel manufacturing gallery" className="absolute inset-0 h-full w-full object-cover opacity-46" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/78 to-primary/20" />
        <div className="section-shell relative">
          <p className="eyebrow">Gallery</p>
          <h1 className="heading-xl mt-4">Precision, process, and product detail in focus.</h1>
          <p className="body-lg mt-6 max-w-2xl text-white/68">
            Explore Petrel’s product finishes, component details, factory visuals, and quality-led manufacturing environment.
          </p>
        </div>
      </section>
      <Gallery />
    </>
  );
}
