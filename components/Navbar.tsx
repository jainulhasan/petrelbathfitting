"use client";

import clsx from "clsx";
import { ChevronDown, Download, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { categories } from "@/lib/siteData";

const nav = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products", mega: true },
  { href: "/about", label: "About" },
  { href: "/#industries", label: "Industries" },
  { href: "/gallery", label: "Gallery" },
  { href: "/catalogue", label: "Catalogue" },
  { href: "/contact", label: "Contact" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "border-b border-primary/10 bg-white/82 shadow-xl shadow-primary/10 backdrop-blur-2xl" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="group flex items-center gap-3" aria-label="Petrel home">
          <img src="/assets/logo.png" alt="Petrel Bath Fittings" className="h-9 w-auto transition group-hover:opacity-80" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <div className="group relative" key={item.label}>
              <Link
                href={item.href}
                className={clsx(
                  "flex items-center gap-1 rounded-full px-3.5 py-2 text-[13px] font-medium transition",
                  scrolled ? "text-primary/72 hover:bg-primary/5 hover:text-primary" : "text-white/78 hover:bg-white/10 hover:text-white"
                )}
              >
                {item.label}
                {item.mega ? <ChevronDown className="h-3.5 w-3.5 transition group-hover:rotate-180" /> : null}
              </Link>
              {item.mega ? (
                <div className="pointer-events-none absolute left-1/2 top-11 w-[520px] -translate-x-1/2 translate-y-3 rounded-3xl border border-white/10 bg-slate-950/92 p-4 opacity-0 shadow-2xl shadow-black/30 backdrop-blur-2xl transition duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="grid grid-cols-2 gap-3">
                    {categories.map((category) => (
                      <Link href={`/products?category=${encodeURIComponent(category)}`} className="rounded-2xl border border-white/8 bg-white/[0.04] p-4 transition hover:border-gold/50 hover:bg-white/[0.08]" key={category}>
                        <span className="block text-sm font-semibold text-white">{category}</span>
                        <span className="mt-1 block text-xs leading-5 text-white/55">Explore precision-made Petrel ranges.</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/catalogue" className="btn-gold">
            <Download className="h-4 w-4" />
            Download Catalogue
          </Link>
        </div>

        <button className={clsx("rounded-full border p-2 lg:hidden", scrolled ? "border-primary/10 text-primary" : "border-white/15 text-white")} onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <div className={clsx("grid overflow-hidden bg-slate-950/95 px-5 text-white backdrop-blur-2xl transition-all duration-500 lg:hidden", open ? "grid-rows-[1fr] border-t border-white/10 py-5" : "grid-rows-[0fr] py-0")}>
        <nav className="min-h-0 space-y-2 overflow-hidden">
          {nav.map((item) => (
            <Link href={item.href} onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3 text-white/82 hover:bg-white/10" key={item.label}>
              {item.label}
            </Link>
          ))}
          <Link href="/catalogue" onClick={() => setOpen(false)} className="btn-gold mt-3 w-full justify-center">
            <Download className="h-4 w-4" />
            Download Catalogue
          </Link>
        </nav>
      </div>
    </header>
  );
}
