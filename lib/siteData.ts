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

export const productCatalogue = [
  {
    title: "Ceramic Fittings",
    category: "Internal Fittings" as ProductCategory,
    image: "IMG_3853-clean.webp",
    description: "Precision ceramic fitting components designed for smooth movement and dependable long-term use."
  },
  {
    title: "Metropole Fittings",
    category: "Faucets" as ProductCategory,
    image: "IMG_3854-clean.webp",
    description: "Premium internal faucet assemblies crafted for refined control, fit, and finish consistency."
  },
  {
    title: "Piston Fittings",
    category: "Internal Fittings" as ProductCategory,
    image: "IMG_3855-clean.webp",
    description: "Durable piston components engineered for reliable flow control across bathware applications."
  },
  {
    title: "Tip Ton Fittings",
    category: "OEM Components" as ProductCategory,
    image: "IMG_3856-clean.webp",
    description: "Specialized brass and chrome components for OEM assemblies and premium bath systems."
  },
  {
    title: "Diverter Cartridges",
    category: "Internal Fittings" as ProductCategory,
    image: "IMG_3857-clean.webp",
    description: "Diverter cartridges built for consistent switching, sealing, and installation performance."
  },
  {
    title: "Protection Caps",
    category: "Accessories" as ProductCategory,
    image: "IMG_3858-clean.webp",
    description: "Protective cap components for safer handling, installation, and product finishing workflows."
  },
  {
    title: "Rubber Fittings",
    category: "Accessories" as ProductCategory,
    image: "IMG_3859-clean.webp",
    description: "Support and sealing fittings made for practical durability in daily bathroom use."
  },
  {
    title: "Flush Fittings",
    category: "Internal Fittings" as ProductCategory,
    image: "IMG_3860-clean.webp",
    description: "Flush system components developed for dependable operation and easy serviceability."
  },
  {
    title: "Bathroom Accessories",
    category: "Accessories" as ProductCategory,
    image: "IMG_3861-clean.webp",
    description: "Coordinated accessories with a refined finish for modern bathroom installations."
  },
  {
    title: "Upper Part Accessories",
    category: "Accessories" as ProductCategory,
    image: "IMG_3862-clean.webp",
    description: "Chrome-finished upper part accessories for complete, polished bath fitting assemblies."
  },
  {
    title: "Aerators",
    category: "Faucets" as ProductCategory,
    image: "IMG_3863-clean.webp",
    description: "Aerator components that support controlled flow, comfort, and efficient faucet performance."
  },
  {
    title: "Neoperl Shower Tubes",
    category: "Accessories" as ProductCategory,
    image: "IMG_3864-clean.webp",
    description: "Flexible shower tube options made for reliable connection, finish variety, and daily use."
  },
  {
    title: "Connection Pipes",
    category: "Accessories" as ProductCategory,
    image: "IMG_3865-clean.webp",
    description: "Connection pipe fittings for dependable plumbing links across bathware installations."
  },
  {
    title: "Health Faucets",
    category: "Faucets" as ProductCategory,
    image: "IMG_3866-clean.webp",
    description: "Health faucet components and assemblies with clean styling and functional reliability."
  },
  {
    title: "Concealed Cistern Parts",
    category: "Internal Fittings" as ProductCategory,
    image: "IMG_3867-clean.webp",
    description: "Internal parts for concealed cistern systems, designed for fit, flow, and maintenance needs."
  },
  {
    title: "Metropole Flush Valves & Diverters",
    category: "Internal Fittings" as ProductCategory,
    image: "IMG_3870-clean.webp",
    description: "Premium flush valve and diverter assemblies for high-performance bathware systems."
  },
  {
    title: "Concealed Flush Valves",
    category: "Internal Fittings" as ProductCategory,
    image: "IMG_3871-clean.webp",
    description: "Concealed flush valve components built for robust installation and dependable control."
  },
  {
    title: "Metropole Parts",
    category: "OEM Components" as ProductCategory,
    image: "IMG_3872-clean.webp",
    description: "Metropole spare and internal parts for OEM supply, replacement, and assembly requirements."
  },
  {
    title: "Rack Bolt",
    category: "Accessories" as ProductCategory,
    image: "IMG_3873-clean.webp",
    description: "Precision rack bolt components designed for dependable fitting, support, and installation performance."
  },
  {
    title: "Hinges",
    category: "OEM Components" as ProductCategory,
    image: "IMG_3874-clean.webp",
    description: "Durable hinge components made for reliable movement, fit, and long-life hardware applications."
  }
];

export const stats = [
  { value: 20, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Products" },
  { value: 1000, suffix: "+", label: "Dealer Network" },
  { value: 50, suffix: "+", label: "Cities Served" }
];

export const trustStats = [
  { value: 20, suffix: "+", label: "Years of Manufacturing" },
  { value: 1000, suffix: "+", label: "Happy Clients" },
  { value: 1500, suffix: "+", label: "Product Variants" },
  { value: 99, suffix: "%", label: "Customer Satisfaction" }
];

export const whyChooseUs = [
  { title: "Highest Quality Products", icon: Gem, copy: "Petrel is committed to manufacturing brass internal fittings and bath accessories with dependable material quality and refined finishing." },
  { title: "Creative Design Value", icon: Sparkles, copy: "Products are developed to deliver practical performance, attractive presentation, and exceptional value for residential and commercial markets." },
  { title: "Rigorous Quality Control", icon: ShieldCheck, copy: "Each stage is subjected to quality checks so fittings meet brand requirements before they reach dealers, builders, and buyers." },
  { title: "Experienced Craftsmanship", icon: Factory, copy: "Every Petrel creation is shaped by years of manufacturing experience, attention to detail, and disciplined brass component production." },
  { title: "Customer Focus", icon: BadgeCheck, copy: "The business is built around customer satisfaction, responsive support, and long-term relationships across the bath fittings market." },
  { title: "India & Export Ready", icon: Truck, copy: "With operations across India and outside India, Petrel supports dealers, projects, and sourcing partners with reliable product availability." }
];

export const aboutContent = {
  eyebrow: "Established in 2003",
  title: "A glimpse of our company.",
  paragraphs: [
    "Pal Enterprise resulted from the duo Patel brothers, Mr. Ashok Vadodaria and Mr. Prakash Vadodaria. For more than 20 years, the enterprise has grown as a manufacturer of bathroom fittings and accessories for residential and commercial markets.",
    "With operations across India and outside India, Pal Enterprise provides bathroom fittings and accessories under its Petrel brand. Each stage is subjected to rigorous quality control to meet the requirements of the brand.",
    "Our mission is to provide products of the highest quality, creative design, and exceptional value. We meet these goals through attention to detail, high-performance teams across the business, and a constant focus on customers."
  ]
};

export const process = [
  { title: "Design", copy: "Product intent, application needs, and finish expectations are defined." },
  { title: "Engineering", copy: "Components are refined for fit, flow, strength, and manufacturability." },
  { title: "Production", copy: "Brass parts are produced with controlled machining and assembly practices." },
  { title: "Quality Testing", copy: "Critical checks validate sealing, operation, and visual finish before release." },
  { title: "Packaging", copy: "Products are protected and prepared for dealers, projects, and export movement." }
];

export const industries = [
  { title: "OEMs", icon: Factory, copy: "Precision brass components and manufacturing support for bathware brands and sourcing partners." },
  { title: "Dealers", icon: Handshake, copy: "Market-ready product families with strong value and repeat demand." },
  { title: "Architects", icon: Building2, copy: "Premium fittings and component confidence for specified bathroom projects." },
  { title: "Builders", icon: Wrench, copy: "Reliable supply for residential, commercial, and multi-site developments." },
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
  "our-comapny1.jpg",
  "our-comapny2.jpg",
  "our-comapny3.jpg",
  "our-comapny4.jpg",
  "why-choose-us-1.jpg",
  "why-choose-us-2.jpg",
  "why-choose-us.jpg",
  "1.jpg",
  "1-1.jpg",
  "1-2.jpg",
  "1-3.jpg",
  "1-4.jpg",
  "2.jpg",
  "2-1.jpg",
  "2-2.jpg",
  "2-3.jpg",
  "2-4.jpg",
  "3.jpg",
  "3-1.jpg",
  "3-2.jpg",
  "3-3.jpg",
  "3-4.jpg",
  "4.jpg",
  "4-1.jpg",
  "4-2.jpg",
  "4-3.jpg",
  "4-4.jpg",
  "5.jpg",
  "5-1.jpg",
  "5-2.jpg",
  "5-3.jpg",
  "5-4.jpg",
  "post1.jpg",
  "post2.jpg",
  "post3.jpg",
  "post4.jpg",
  "post5.jpg",
  "post6.jpg",
  "post7.jpg",
  "post8.jpg",
  "post9.jpg",
  "post10.jpg",
  "post11.jpg",
  "post12.jpg",
  "post13.jpg",
  "post14.jpg",
  "post15.jpg"
];

export const partnerLogos = ["ARCHITECTS", "BUILDERS", "DEALERS", "EXPORT", "OEM", "INTERIORS", "PROJECTS", "BATHWARE"];

export const catalogues = [
  { title: "Petrel Brochure 2026", cover: "Petrel-Brochure-pdf.jpg", file: "PetrelBrochure2026.pdf" }
];
