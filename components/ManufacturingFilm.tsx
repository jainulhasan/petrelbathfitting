"use client";

import { Play, X } from "lucide-react";
import { useState } from "react";

type ManufacturingFilmProps = Readonly<{
  variant?: "button" | "feature";
}>;

export default function ManufacturingFilm({ variant = "button" }: ManufacturingFilmProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {variant === "feature" ? (
        <div className="video-feature group">
          <video className="h-full min-h-[420px] w-full object-cover" src="/assets/manufacturing-film.mp4" autoPlay muted loop playsInline preload="metadata" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,20,39,0.05),rgba(7,20,39,0.68))]" />
          <button
            className="absolute bottom-5 left-5 z-10 inline-flex items-center gap-3 rounded-full border border-white/18 bg-white/12 px-4 py-2.5 text-xs font-semibold text-white shadow-luxury backdrop-blur-xl transition-luxury hover:border-gold/55 hover:bg-white/18"
            onClick={() => setOpen(true)}
            type="button"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full bg-gold text-primary">
              <Play className="h-3.5 w-3.5 fill-current" />
            </span>
            View Manufacturing Film
          </button>
          <div className="absolute right-5 top-5 z-10 rounded-full border border-white/12 bg-black/16 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/66 backdrop-blur-xl">
            Live process
          </div>
        </div>
      ) : (
        <button className="flex items-center gap-2.5 text-xs font-semibold transition-luxury hover:text-gold" onClick={() => setOpen(true)} type="button">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-gold text-primary">
            <Play className="h-3.5 w-3.5 fill-current" />
          </span>
          Manufacturing Film
        </button>
      )}

      {open ? (
        <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/86 p-4 backdrop-blur-xl" onClick={() => setOpen(false)}>
          <div className="relative w-full max-w-5xl overflow-hidden rounded-[1.4rem] border border-white/12 bg-[#071427] shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <button
              className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-black/35 text-white backdrop-blur-xl transition hover:border-gold/60"
              onClick={() => setOpen(false)}
              type="button"
              aria-label="Close manufacturing film"
            >
              <X className="h-5 w-5" />
            </button>
            <video className="aspect-video w-full bg-black object-contain" src="/assets/manufacturing-film.mp4" controls autoPlay playsInline />
          </div>
        </div>
      ) : null}
    </>
  );
}
