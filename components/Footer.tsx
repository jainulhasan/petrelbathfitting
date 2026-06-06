import { Camera, Mail, MapPin, MessageCircle, Phone, Share2 } from "lucide-react";
import Link from "next/link";

const productLinks = ["Brass Bath Fittings", "Bathroom Accessories", "Internal Fittings", "Faucet Components", "OEM Manufacturing"];
const quickLinks = ["About", "Products", "Catalogue", "Gallery", "Testimonials", "Contact"];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#06101f] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(30,77,143,0.38),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(212,175,55,0.16),transparent_28%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-9 px-5 py-14 md:grid-cols-[1.25fr_0.8fr_0.8fr_1fr_1fr] md:px-8">
        <div>
          <span className="inline-flex rounded-xl bg-white px-3 py-2">
            <img src="/assets/logo.png" alt="Petrel Bath Fittings" className="h-8 w-auto" />
          </span>
          <p className="mt-6 max-w-sm text-sm leading-7 text-white/62">
            Premium brass bath fittings and components engineered for architects, builders, dealers, export buyers, and OEM partners.
          </p>
          <div className="mt-6 flex gap-3">
            {[MessageCircle, Camera, Share2].map((Icon, index) => (
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/72" key={index}>
                <Icon className="h-4 w-4" />
              </span>
            ))}
          </div>
        </div>
        <FooterColumn title="Company" links={quickLinks} />
        <FooterColumn title="Products" links={productLinks} />
        <div>
          <h2 className="footer-title">Contact</h2>
          <div className="space-y-4 text-sm text-white/62">
            <p className="flex gap-3"><MapPin className="mt-1 h-4 w-4 text-gold" /> Pal Enterprise, India</p>
            <p className="flex gap-3"><Phone className="mt-1 h-4 w-4 text-gold" /> Sales & dealer enquiries</p>
            <p className="flex gap-3"><Mail className="mt-1 h-4 w-4 text-gold" /> info@petrelbathfitting.com</p>
          </div>
        </div>
        <div>
          <h2 className="footer-title">Newsletter</h2>
          <p className="text-sm leading-7 text-white/62">Receive catalogue updates, product launches, and OEM capability news.</p>
          <form className="mt-5 flex rounded-full border border-white/10 bg-white/[0.06] p-1">
            <input className="min-w-0 flex-1 bg-transparent px-4 text-sm outline-none placeholder:text-white/35" placeholder="Email address" />
            <button className="rounded-full bg-gold px-4 py-2 text-sm font-semibold text-slate-950">Join</button>
          </form>
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

function FooterColumn({ title, links }: Readonly<{ title: string; links: string[] }>) {
  return (
    <div>
      <h2 className="footer-title">{title}</h2>
      <div className="space-y-3">
        {links.map((link) => (
          <Link
            href={link === "Products" ? "/products" : link === "Catalogue" ? "/catalogue" : link === "Contact" ? "/contact" : link === "Gallery" ? "/gallery" : link === "Testimonials" ? "/testimonials" : link === "About" ? "/about" : "#"}
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
