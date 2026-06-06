import {
  BadgeCheck,
  Building2,
  Factory,
  Gauge,
  Gem,
  Globe2,
  Handshake,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
  Wrench
} from "lucide-react";

export type ProductCategory = "Faucets" | "Accessories" | "Internal Fittings" | "OEM Components";

export const products = [
  {
    title: "Brass Faucet Components",
    category: "Faucets" as ProductCategory,
    image: "1.jpg",
    description: "Precision-machined brass components engineered for smooth water control and premium finish compatibility."
  },
  {
    title: "Diverter Assemblies",
    category: "Internal Fittings" as ProductCategory,
    image: "1-1.jpg",
    description: "Reliable diverter internals designed for long-life operation across modern bath and shower systems."
  },
  {
    title: "Flush & Control Fittings",
    category: "Internal Fittings" as ProductCategory,
    image: "1-2.jpg",
    description: "Compact internal mechanisms developed for dependable installation, serviceability, and flow performance."
  },
  {
    title: "Piston Components",
    category: "OEM Components" as ProductCategory,
    image: "1-3.jpg",
    description: "Dimensional accuracy and consistent movement for OEM assemblies and specialized bathware applications."
  },
  {
    title: "Rubber & Support Fittings",
    category: "Accessories" as ProductCategory,
    image: "1-4.jpg",
    description: "Support fittings that improve sealing, durability, and product reliability in daily use."
  },
  {
    title: "Bathroom Accessories",
    category: "Accessories" as ProductCategory,
    image: "contact-440x390-1.png",
    description: "Coordinated accessories built to complement premium bathroom spaces and dealer-led product ranges."
  }
];

export const categories: ProductCategory[] = ["Faucets", "Accessories", "Internal Fittings", "OEM Components"];

export const stats = [
  { value: 20, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Products" },
  { value: 1000, suffix: "+", label: "Dealer Network" },
  { value: 50, suffix: "+", label: "Cities Served" }
];

export const trustStats = [
  { value: 20, suffix: "+", label: "Years of Manufacturing" },
  { value: 1000, suffix: "+", label: "Happy Clients" },
  { value: 500, suffix: "+", label: "Product Variants" },
  { value: 99, suffix: "%", label: "Customer Satisfaction" }
];

export const whyChooseUs = [
  { title: "Engineering Excellence", icon: Gauge, copy: "Tolerances, flow behavior, and assembly quality refined for professional applications." },
  { title: "Premium Brass Quality", icon: Gem, copy: "Material-first manufacturing for fittings that feel substantial and perform reliably." },
  { title: "Long Product Life", icon: ShieldCheck, copy: "Designed for repeat usage, stable fitment, and confidence after installation." },
  { title: "Precision Manufacturing", icon: Factory, copy: "Process-led production with inspection discipline at each critical stage." },
  { title: "Nationwide Distribution", icon: Truck, copy: "Dealer-ready product availability for builders, retailers, and project buyers." },
  { title: "Customer Satisfaction", icon: BadgeCheck, copy: "Practical support and dependable products for long-term business relationships." }
];

export const process = [
  { title: "Design", copy: "Product intent, application needs, and finish expectations are defined." },
  { title: "Engineering", copy: "Components are refined for fit, flow, strength, and manufacturability." },
  { title: "Production", copy: "Brass parts are produced with controlled machining and assembly practices." },
  { title: "Quality Testing", copy: "Critical checks validate sealing, operation, and visual finish before release." },
  { title: "Packaging", copy: "Products are protected and prepared for dealers, projects, and export movement." }
];

export const industries = [
  { title: "Architects", icon: Building2, copy: "Premium fittings and component confidence for specified bathroom projects." },
  { title: "Interior Designers", icon: Sparkles, copy: "Elegant product ranges that support sophisticated bathroom concepts." },
  { title: "Builders", icon: Wrench, copy: "Reliable supply for residential, commercial, and multi-site developments." },
  { title: "Dealers", icon: Handshake, copy: "Market-ready product families with strong value and repeat demand." },
  { title: "Export Buyers", icon: Globe2, copy: "OEM-friendly manufacturing for global bathware and component businesses." },
  { title: "Premium Homeowners", icon: Star, copy: "Refined fittings that elevate everyday bathroom experiences." }
];

export const testimonials = [
  {
    name: "Mr. Sidholiya",
    role: "Construction Partner",
    image: "owner1.jpg",
    quote: "We have been using Petrel products for a while in our construction projects. Most of our bath fittings are supplied by Petrel, and customer feedback has been consistently positive."
  },
  {
    name: "Mr. Ayushkumar Khankeda",
    role: "Dealer",
    image: "owner2.jpg",
    quote: "We have been selling Petrel products for quite a long time. The customer response has been excellent because the products combine dependable quality with practical affordability."
  },
  {
    name: "Mr. Dhanrajehskumar Dhire",
    role: "Bathware Buyer",
    image: null,
    quote: "Petrel is a one-stop solution for bathroom fittings. The complete range, high quality, and competitive pricing make it a strong choice for bathware sourcing."
  },
  {
    name: "Michelle P.",
    role: "Interior Project Consultant",
    image: null,
    quote: "Petrel products give our projects a dependable balance of refined presentation, durable brass quality, and consistent finishing across repeated bathroom installations."
  },
  {
    name: "Tulip Watt",
    role: "Dealer Network Partner",
    image: null,
    quote: "The range is easy to recommend because it feels premium, performs reliably, and gives dealers a strong product story for customers looking for long-term value."
  },
  {
    name: "John J.",
    role: "Procurement Buyer",
    image: null,
    quote: "For project sourcing, Petrel brings together catalogue depth, competitive pricing, and responsive support, which makes repeated procurement much smoother."
  }
];

export const gallery = [
  "company-main.jpg",
  "our-comapny.jpg",
  "our-comapny3.jpg",
  "why-choose-us-1.jpg",
  "why-choose-us-2.jpg",
  "petrelbathfitting.jpg",
  "1.jpg",
  "1-1.jpg",
  "1-2.jpg"
];

export const partnerLogos = ["ARCHITECTS", "BUILDERS", "DEALERS", "EXPORT", "OEM", "INTERIORS", "PROJECTS", "BATHWARE"];

export const catalogues = [
  { title: "Master Catalogue", cover: "PETREL-001-pdf.jpg", file: "PETREL-001.pdf" },
  { title: "Accessories Collection", cover: "Petrel-Catalogue-pdf.jpg", file: "Petrel-Catalogue.pdf" },
  { title: "Petrel Brochure", cover: "Petrel-Brochure-pdf.jpg", file: "Petrel-Brochure.pdf" }
];
