"use client";

import { X } from "lucide-react";
import { useState } from "react";
import { motion, Reveal } from "@/components/Motion";
import { gallery } from "@/lib/siteData";

const galleryItems = gallery.map((image, index) => ({
  image,
  category: index < 3 ? "Manufacturing" : index < 6 ? "Quality" : "Products"
}));

const filters = ["All", "Manufacturing", "Products", "Quality"];

export default function Gallery() {
  const [active, setActive] = useState<string | null>(null);
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
          {visible.map(({ image }, index) => (
            <motion.button
              className="dark-elegant-card group mb-5 block w-full rounded-[1.2rem]"
              key={image}
              onClick={() => setActive(image)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
            >
              <img src={`/assets/${image}`} alt="Petrel manufacturing and product gallery" className="image-lift w-full object-cover" loading="lazy" />
            </motion.button>
          ))}
        </div>
      </div>
      {active ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/86 p-5 backdrop-blur-xl" onClick={() => setActive(null)}>
          <button className="absolute right-5 top-5 rounded-full border border-white/20 p-3 text-white" aria-label="Close gallery preview">
            <X />
          </button>
          <img src={`/assets/${active}`} alt="Petrel gallery preview" className="max-h-[84vh] rounded-3xl object-contain shadow-2xl" />
        </div>
      ) : null}
    </section>
  );
}
