"use client";

import clsx from "clsx";
import { ChevronDown, Download, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About Us", menu: "about" },
  { href: "/gallery", label: "Gallery" },
  { href: "/testimonials", label: "Testimonials" },
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
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dismissedMenu, setDismissedMenu] = useState<string | null>(null);

  const isActive = (href: string) => {
    const path = href.split("#")[0];
    if (path === "/") return pathname === "/";
    return pathname === path || pathname.startsWith(`${path}/`);
  };

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
        scrolled ? "border-b border-primary/8 bg-white/90 shadow-lg shadow-primary/8 backdrop-blur-2xl" : "border-b border-white/8 bg-slate-950/22 backdrop-blur-xl"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="group flex items-center gap-3" aria-label="Petrel home">
          <img src="/assets/logo.png" alt="Petrel Bath Fittings" className="h-9 w-auto transition group-hover:opacity-80" />
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          {nav.map((item) => {
            const active = isActive(item.href);
            return (
            <div className="group relative py-5" key={item.label} onMouseLeave={() => setDismissedMenu(null)}>
              <Link
                href={item.href}
                className={clsx(
                  "nav-link flex items-center gap-1 text-[12px] font-semibold uppercase tracking-[0.1em] transition",
                  scrolled
                    ? active
                      ? "is-active text-primary"
                      : "text-primary/68 hover:text-primary"
                    : active
                      ? "is-active text-gold"
                      : "text-white/76 drop-shadow-sm hover:text-white"
                )}
                aria-current={active ? "page" : undefined}
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
          );
          })}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <Link href="/catalogue" className="btn-gold">
            <Download className="h-4 w-4" />
            Download Catalogue
          </Link>
        </div>

        <button className={clsx("rounded-full border p-2 shadow-lg backdrop-blur-xl lg:hidden", scrolled ? "border-primary/10 bg-white/72 text-primary" : "border-white/20 bg-slate-950/40 text-white")} onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <div className={clsx("bg-slate-950/95 px-5 text-white backdrop-blur-2xl transition-all duration-500 lg:hidden", open ? "max-h-[calc(100svh-4rem)] overflow-y-auto border-t border-white/10 py-5 pb-8" : "max-h-0 overflow-hidden py-0")}>
        <nav className="space-y-2">
          {nav.map((item) => (
            <div key={item.label}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className={clsx("block rounded-2xl px-4 py-3 transition hover:bg-white/10", isActive(item.href) ? "bg-white text-primary" : "text-white/82")}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
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
