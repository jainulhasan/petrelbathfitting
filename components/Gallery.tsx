"use client";

import { PlayCircle, X } from "lucide-react";
import { useState } from "react";
import { motion, Reveal } from "@/components/Motion";
import { gallery } from "@/lib/siteData";

type GalleryCategory = "Manufacturing" | "Products";
type GalleryItem = {
  src: string;
  type: "image" | "video";
  category: GalleryCategory;
  title: string;
};

const manufacturingImages = [
  "company-main.jpg",
  "our-comapny.jpg",
  "our-comapny1.jpg",
  "our-comapny2.jpg",
  "our-comapny3.jpg",
  "our-comapny4.jpg",
  "why-choose-us-1.jpg",
  "why-choose-us-2.jpg",
  "why-choose-us.jpg"
];

const manufacturingItems: GalleryItem[] = [
  {
    src: "manufacturing-film.mp4",
    type: "video",
    category: "Manufacturing",
    title: "Petrel manufacturing process film"
  },
  {
    src: "manufacturing-film-2.mp4",
    type: "video",
    category: "Manufacturing",
    title: "Petrel factory capability film"
  },
  ...manufacturingImages.map((src) => ({
    src,
    type: "image" as const,
    category: "Manufacturing" as const,
    title: "Petrel manufacturing and quality detail"
  }))
];

const productItems: GalleryItem[] = gallery
  .filter((src) => !manufacturingImages.includes(src) && src !== "petrelbathfitting.jpg")
  .map((src) => ({
    src,
    type: "image" as const,
    category: "Products" as const,
    title: "Petrel product gallery"
  }));

const galleryItems = [...manufacturingItems, ...productItems];
const filters = ["All", "Manufacturing", "Products"];

export default function Gallery() {
  const [active, setActive] = useState<GalleryItem | null>(null);
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? galleryItems : galleryItems.filter((item) => item.category === filter);

  return (
    <section id="gallery" className="bg-primary py-18 text-white md:py-20">
      <div className="section-shell">
        <Reveal className="mb-10">
          <p className="eyebrow">Gallery</p>
          <h2 className="heading-lg mt-4 max-w-4xl">Factory detail, product precision, and finish quality in focus.</h2>
        </Reveal>
        <div className="mb-8 flex flex-wrap gap-2">
          {filters.map((item) => (
            <button
              className={`rounded-full border px-3.5 py-2 text-xs font-semibold transition ${
                filter === item ? "border-gold bg-gold text-primary" : "border-white/12 bg-white/[0.04] text-white/68 hover:border-gold hover:text-white"
              }`}
              onClick={() => setFilter(item)}
              key={item}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="columns-1 gap-5 md:columns-2 lg:columns-3">
          {visible.map((item, index) => (
            <motion.button
              className="dark-elegant-card group relative mb-5 block w-full overflow-hidden rounded-[1.2rem]"
              key={`${item.type}-${item.src}`}
              onClick={() => setActive(item)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.025, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              {item.type === "video" ? (
                <>
                  <video
                    src={`/assets/${item.src}`}
                    className="image-lift aspect-[4/3] w-full object-cover"
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    onMouseEnter={(event) => event.currentTarget.play()}
                    onMouseLeave={(event) => event.currentTarget.pause()}
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-primary/12 text-white transition duration-500 group-hover:bg-primary/4">
                    <span className="rounded-full border border-white/25 bg-white/12 p-4 shadow-2xl backdrop-blur-md transition duration-500 group-hover:scale-105 group-hover:border-gold/60">
                      <PlayCircle className="h-7 w-7" />
                    </span>
                  </span>
                </>
              ) : (
                <img src={`/assets/${item.src}`} alt={item.title} className="image-lift w-full object-cover" loading="lazy" />
              )}
            </motion.button>
          ))}
        </div>
      </div>
      {active ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/86 p-5 backdrop-blur-xl" onClick={() => setActive(null)}>
          <button className="absolute right-5 top-5 rounded-full border border-white/20 p-3 text-white" aria-label="Close gallery preview">
            <X />
          </button>
          {active.type === "video" ? (
            <video src={`/assets/${active.src}`} className="max-h-[84vh] max-w-[92vw] rounded-3xl shadow-2xl" controls autoPlay playsInline />
          ) : (
            <img src={`/assets/${active.src}`} alt="Petrel gallery preview" className="max-h-[84vh] rounded-3xl object-contain shadow-2xl" />
          )}
        </div>
      ) : null}
    </section>
  );
}
