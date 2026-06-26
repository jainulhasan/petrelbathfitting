"use client";

import { Mail, MapPin, Phone, Send } from "lucide-react";
import type { FormEvent } from "react";
import { useState } from "react";
import { Reveal } from "@/components/Motion";

const address = "PAL ENTERPRISE, Mfg. BRASS INTERNAL FITTINGS, Plot no 706/707, Raj Marg, GIDC Phase-2, Dared, Jamnagar - 361005, Gujarat, India";
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
const indiaPhone = "+91 95378 43995";
const internationalPhone = "+91 94080 78888";
const indiaPhoneHref = "https://wa.me/919537843995";
const internationalPhoneHref = "https://wa.me/919408078888";
const infoEmail = "info@petrelbathfitting.com";
const exportEmail = "export@petrelbathfitting.com";

export default function ContactPanel() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const company = String(form.get("company") || "").trim();
    const message = String(form.get("message") || "").trim();

    const subject = `Petrel enquiry${name ? ` from ${name}` : ""}`;
    const body = [
      "New enquiry from the Petrel website:",
      "",
      `Name: ${name || "-"}`,
      `Email: ${email || "-"}`,
      `Phone: ${phone || "-"}`,
      `Company: ${company || "-"}`,
      "",
      "Requirement:",
      message || "-"
    ].join("\n");

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, phone, company, message, subject, body })
      });

      if (!response.ok) throw new Error("Failed to send enquiry");

      formElement.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-shell section-padding">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="rounded-[1.5rem] bg-primary p-6 text-white shadow-luxury md:p-8">
          <p className="eyebrow">Contact</p>
          <h2 className="heading-md mt-4">Let us build your next premium bathware range.</h2>
          <p className="mt-5 text-white/62">For dealer enquiries, OEM projects, export discussions, and architectural specifications, connect with the Petrel team.</p>
          <div className="mt-7 grid gap-3">
            <Info icon={<MapPin />} title="Location" value="Open in Google Maps" href={mapsUrl} />
            <Info icon={<Phone />} title="India" value={indiaPhone} href={indiaPhoneHref} />
            <Info icon={<Phone />} title="International" value={internationalPhone} href={internationalPhoneHref} />
            <Info icon={<Mail />} title="Email" value={infoEmail} href={`mailto:${infoEmail}`} />
            <Info icon={<Mail />} title="Export Email" value={exportEmail} href={`mailto:${exportEmail}`} />
          </div>
          <div className="mt-8 h-64 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]">
            <iframe
              title="Petrel Bath Fittings location map"
              src={mapEmbedUrl}
              className="h-full w-full grayscale invert-[0.08] saturate-50"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
        <Reveal delay={0.12} className="elegant-card rounded-[1.5rem] p-6 md:p-8">
          <form className="grid gap-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Name" name="name" placeholder="Your name" required />
              <Field label="Email" name="email" placeholder="you@company.com" type="email" required />
              <Field label="Phone" name="phone" placeholder="+91 Phone number" type="tel" />
              <Field label="Company" name="company" placeholder="Company name" />
            </div>
            <label className="grid gap-2 text-sm font-semibold text-primary">
              Message
              <textarea name="message" required className="min-h-32 rounded-xl border border-primary/10 bg-white px-4 py-3 outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/15" placeholder="Tell us about your requirement" />
            </label>
            <button className="btn-gold w-fit disabled:cursor-not-allowed disabled:opacity-60" type="submit" disabled={status === "sending"}>
              <Send className="h-4 w-4" />
              {status === "sending" ? "Sending..." : "Send Enquiry"}
            </button>
            {status === "sent" ? (
              <p className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm font-semibold text-emerald-700">Query sent. Our team will contact you shortly.</p>
            ) : status === "error" ? (
              <p className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm font-semibold text-red-700">Could not send the query. Please try again later.</p>
            ) : (
              <p className="text-sm text-black/48">Your query is sent directly to the Petrel team.</p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, name, placeholder, type = "text", required = false }: Readonly<{ label: string; name: string; placeholder: string; type?: string; required?: boolean }>) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-primary">
      {label}
      <input name={name} required={required} className="rounded-xl border border-primary/10 bg-white px-4 py-3 outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/15" type={type} placeholder={placeholder} />
    </label>
  );
}

function Info({ icon, title, value, href }: Readonly<{ icon: React.ReactNode; title: string; value: string; href: string }>) {
  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.05] p-4 transition hover:border-gold/50 hover:bg-white/[0.09]">
      <span className="text-gold [&_svg]:h-5 [&_svg]:w-5">{icon}</span>
      <span>
        <strong className="block text-sm">{title}</strong>
        <span className="text-sm text-white/58">{value}</span>
      </span>
    </a>
  );
}
