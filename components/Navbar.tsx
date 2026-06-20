"use client";

import clsx from "clsx";
import { ChevronDown, Download, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About Us", menu: "about" },
  { href: "/#industries", label: "Industries" },
  { href: "/gallery", label: "Gallery" },
  { href: "/catalogue", label: "Catalogue" },
  { href: "/contact", label: "Contact" }
];

const aboutLinks = [
  { href: "/about#who-we-are", label: "Who we are", copy: "Meet the manufacturing story behind Petrel." },
  { href: "/about#why-us", label: "Why us", copy: "See what makes Petrel dependable for buyers." },
  { href: "/about#our-mission", label: "Our mission", copy: "Understand the value we aim to deliver." },
  { href: "/about#our-quality", label: "Our quality", copy: "Explore our inspection-led approach." },
  { href: "/about#our-vision", label: "Our vision", copy: "Learn where the brand is heading." },
  { href: "/about#certificates", label: "Certificates", copy: "Review credibility and compliance focus." }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dismissedMenu, setDismissedMenu] = useState<string | null>(null);

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
            <div className="group relative py-3" key={item.label} onMouseLeave={() => setDismissedMenu(null)}>
              <Link
                href={item.href}
                className={clsx(
                  "flex items-center gap-1 rounded-full px-3.5 py-2 text-[13px] font-medium transition",
                  scrolled ? "text-primary/72 hover:bg-primary/5 hover:text-primary" : "text-white/78 hover:bg-white/10 hover:text-white"
                )}
              >
                {item.label}
                {item.menu ? <ChevronDown className="h-3.5 w-3.5 transition group-hover:rotate-180" /> : null}
              </Link>
              {item.menu === "about" ? (
                <div
                  className={clsx(
                    "pointer-events-none absolute left-1/2 top-full w-[620px] -translate-x-1/2 translate-y-2 rounded-3xl border border-white/10 bg-slate-950/92 p-4 opacity-0 shadow-2xl shadow-black/30 backdrop-blur-2xl transition duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100",
                    dismissedMenu === "about" && "!pointer-events-none !translate-y-2 !opacity-0"
                  )}
                >
                  <div className="grid grid-cols-2 gap-3">
                    {aboutLinks.map((link) => (
                      <Link href={link.href} onClick={() => setDismissedMenu("about")} className="rounded-2xl border border-white/8 bg-white/[0.04] p-4 transition hover:border-gold/50 hover:bg-white/[0.08]" key={link.label}>
                        <span className="block text-sm font-semibold text-white">{link.label}</span>
                        <span className="mt-1 block text-xs leading-5 text-white/55">{link.copy}</span>
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
            <div key={item.label}>
              <Link href={item.href} onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3 text-white/82 hover:bg-white/10">
                {item.label}
              </Link>
              {item.menu === "about" ? (
                <div className="grid gap-1 pl-4">
                  {aboutLinks.map((link) => (
                    <Link href={link.href} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-2 text-sm text-white/56 hover:bg-white/8 hover:text-white" key={link.label}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
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
