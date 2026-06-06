import type { Metadata } from "next";
import ProductShowcase from "@/components/ProductShowcase";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore premium Petrel brass bath fittings, accessories, internal fittings, faucet components, and OEM assemblies."
};

export default function ProductsPage() {
  return (
    <>
      <section className="relative flex min-h-[58vh] items-end overflow-hidden bg-primary px-5 pb-12 pt-28 text-white md:px-8">
        <img src="/assets/product-banner-1.jpg" alt="Petrel product range" className="absolute inset-0 h-full w-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/78 to-transparent" />
        <div className="section-shell relative">
          <p className="eyebrow">Products</p>
          <h1 className="heading-xl mt-4">Premium fittings for refined bathware systems.</h1>
          <p className="body-lg mt-6 max-w-2xl text-white/68">Explore high-performance product families designed for architects, builders, dealers, export buyers, and OEM manufacturing partners.</p>
        </div>
      </section>
      <ProductShowcase />
    </>
  );
}
