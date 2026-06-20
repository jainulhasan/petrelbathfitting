import { Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/Motion";

export default function ContactPanel() {
  return (
    <section id="contact" className="section-shell section-padding">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="rounded-[1.5rem] bg-primary p-6 text-white shadow-luxury md:p-8">
          <p className="eyebrow">Contact</p>
          <h2 className="heading-md mt-4">Let us build your next premium bathware range.</h2>
          <p className="mt-5 text-white/62">For dealer enquiries, OEM projects, export discussions, and architectural specifications, connect with the Petrel team.</p>
          <div className="mt-7 grid gap-3">
            <Info icon={<MapPin />} title="Location" value="Pal Enterprise, India" />
            <Info icon={<Phone />} title="India" value="+91 95378 43995" />
            <Info icon={<Phone />} title="International" value="+91 94080 78888" />
            <Info icon={<Mail />} title="Email" value="info@petrelbathfitting.com" />
            <Info icon={<Mail />} title="Export Email" value="export@petrelbathfitting.com" />
          </div>
          <div className="mt-8 h-64 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]">
            <iframe
              title="Petrel Bath Fittings location map"
              src="https://www.google.com/maps?q=Pal%20Enterprise%20Petrel%20Bath%20Fitting%20India&output=embed"
              className="h-full w-full grayscale invert-[0.08] saturate-50"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
        <Reveal delay={0.12} className="elegant-card rounded-[1.5rem] p-6 md:p-8">
          <form className="grid gap-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Name" placeholder="Your name" />
              <Field label="Email" placeholder="you@company.com" type="email" />
              <Field label="Phone" placeholder="+91 Phone number" type="tel" />
              <Field label="Company" placeholder="Company name" />
            </div>
            <label className="grid gap-2 text-sm font-semibold text-primary">
              Message
      <textarea className="min-h-32 rounded-xl border border-primary/10 bg-white px-4 py-3 outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/15" placeholder="Tell us about your requirement" />
            </label>
            <button className="btn-gold w-fit" type="submit">Send Enquiry</button>
            <p className="text-sm text-black/48">Form ready for API, CRM, Formspree, or WhatsApp integration.</p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, placeholder, type = "text" }: Readonly<{ label: string; placeholder: string; type?: string }>) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-primary">
      {label}
      <input className="rounded-xl border border-primary/10 bg-white px-4 py-3 outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/15" type={type} placeholder={placeholder} />
    </label>
  );
}

function Info({ icon, title, value }: Readonly<{ icon: React.ReactNode; title: string; value: string }>) {
  return (
    <div className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.05] p-4">
      <span className="text-gold [&_svg]:h-5 [&_svg]:w-5">{icon}</span>
      <span>
        <strong className="block text-sm">{title}</strong>
        <span className="text-sm text-white/58">{value}</span>
      </span>
    </div>
  );
}
