import type { Metadata } from "next";
import ContactPanel from "@/components/ContactPanel";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Petrel for dealer enquiries, OEM manufacturing, export sourcing, and project requirements."
};

export default function ContactPage() {
  return (
    <>
      <section className="relative flex min-h-[58vh] items-end overflow-hidden bg-primary px-5 pb-12 pt-28 text-white md:px-8">
        <img src="/assets/1920-x-560-_-contect-us.jpg" alt="Contact Petrel" className="absolute inset-0 h-full w-full object-cover opacity-48" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/78 to-primary/20" />
        <div className="section-shell relative">
          <p className="eyebrow">Contact</p>
          <h1 className="heading-xl mt-4">Start a premium bathware partnership.</h1>
          <p className="body-lg mt-6 max-w-2xl text-white/68">Connect with Petrel for products, catalogues, project sourcing, dealer supply, and OEM manufacturing.</p>
        </div>
      </section>
      <ContactPanel />
    </>
  );
}
