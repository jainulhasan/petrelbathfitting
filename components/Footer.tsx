import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const productLinks = ["Brass Bath Fittings", "Bathroom Accessories", "Internal Fittings", "Faucet Components", "OEM Manufacturing"];
const quickLinks = ["About", "Products", "Catalogue", "Gallery", "Events & News", "Testimonials", "Contact"];
const socials = [
  { href: "https://www.facebook.com/share/1Lr8dAhH1U/", label: "Facebook", icon: FacebookIcon },
  { href: "https://www.instagram.com/petrelbathfitting?igsh=ZnhwY204MWliZTFj", label: "Instagram", icon: InstagramIcon },
  { href: "https://www.linkedin.com/in/petrel-india-cartridge-and-spares-03bb43356/?skipRedirect=true", label: "LinkedIn", icon: LinkedinIcon }
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#06101f] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(30,77,143,0.38),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(212,175,55,0.16),transparent_28%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-9 px-5 py-14 md:grid-cols-[1.2fr_0.8fr_0.9fr_1.2fr] md:px-8">
        <div>
          <span className="inline-flex rounded-xl bg-white px-3 py-2">
            <img src="/assets/logo.png" alt="Petrel Bath Fittings" className="h-8 w-auto" />
          </span>
          <p className="mt-6 max-w-sm text-sm leading-7 text-white/62">
            PAL ENTERPRISE manufactures brass internal fittings and bath accessories under the Petrel brand for residential, commercial, dealer, and sourcing markets.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map(({ href, label, icon: Icon }) => (
              <a href={href} target="_blank" rel="noreferrer" aria-label={label} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/72 transition-luxury hover:border-gold/55 hover:text-gold" key={label}>
                <Icon />
              </a>
            ))}
          </div>
        </div>
        <FooterColumn title="Company" links={quickLinks} />
        <FooterColumn title="Products" links={productLinks} hrefForAll="/products" />
        <div>
          <h2 className="footer-title">Contact</h2>
          <div className="space-y-4 text-sm text-white/62">
            <p className="flex gap-3"><MapPin className="mt-1 h-4 w-4 shrink-0 text-gold" /> PAL ENTERPRISE, Mfg. BRASS INTERNAL FITTINGS, Plot no 706/707, Raj Marg, GIDC Phase-2, Dared, Jamnagar - 361005, Gujarat, India</p>
            <p className="flex gap-3"><Phone className="mt-1 h-4 w-4 shrink-0 text-gold" /> India: +91 95378 43995<br />International: +91 94080 78888</p>
            <p className="flex gap-3"><Mail className="mt-1 h-4 w-4 shrink-0 text-gold" /> info@petrelbathfitting.com<br />export@petrelbathfitting.com</p>
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/10 px-5 py-6 text-sm text-white/46 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 md:flex-row">
          <p>Copyright © 2026 Petrel Bath Fittings. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FacebookIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.2 8.2V6.7c0-.7.2-1.1 1.2-1.1h1.5V3h-2.4c-2.9 0-3.9 1.4-3.9 3.8v1.4H8.8V11h1.8v10h3.6V11h2.4l.3-2.8h-2.7Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect width="15" height="15" x="4.5" y="4.5" rx="4" />
      <circle cx="12" cy="12" r="3.2" />
      <path d="M16.6 7.4h.01" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.7 8.9H3.5V20h3.2V8.9ZM5.1 7.4A1.9 1.9 0 1 0 5.1 3.6a1.9 1.9 0 0 0 0 3.8ZM20.5 20v-6.1c0-3-1.6-4.4-3.8-4.4a3.3 3.3 0 0 0-3 1.7V8.9h-3.1V20h3.2v-5.5c0-1.5.3-2.9 2.1-2.9s1.8 1.7 1.8 3V20h2.8Z" />
    </svg>
  );
}

function FooterColumn({ title, links, hrefForAll }: Readonly<{ title: string; links: string[]; hrefForAll?: string }>) {
  return (
    <div>
      <h2 className="footer-title">{title}</h2>
      <div className="space-y-3">
        {links.map((link) => (
          <Link
            href={hrefForAll ?? (link === "Products" ? "/products" : link === "Catalogue" ? "/catalogue" : link === "Contact" ? "/contact" : link === "Gallery" ? "/gallery" : link === "Events & News" ? "/events-news" : link === "Testimonials" ? "/testimonials" : link === "About" ? "/about" : "#")}
            className="block text-sm text-white/62 transition hover:text-gold"
            key={link}
          >
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
}
