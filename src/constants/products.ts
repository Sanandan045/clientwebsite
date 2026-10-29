export type Product = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  description: string;
  image: string;
  number: string;
  applications: readonly string[];
  highlights: readonly string[];
};

export const PRODUCTS = [
  {
    slug: "plates-coils",
    name: "Plates & Coils",
    category: "Flat products",
    summary: "Versatile flat steel for projects that need strength and consistency.",
    description:
      "A dependable choice for manufacturers and project teams, our flat product range supports a wide variety of fabrication and infrastructure needs.",
    image:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1400&q=85",
    number: "01",
    applications: ["Infrastructure", "Heavy engineering", "Fabrication"],
    highlights: [
      "Adaptable for a broad range of project requirements",
      "Suitable for fabrication and manufacturing workflows",
      "Support to help identify the right product for your project",
    ],
  },
  {
    slug: "rails-structures",
    name: "Rails & Structures",
    category: "Long products",
    summary: "Structural steel for building, connecting, and moving communities.",
    description:
      "Designed for the demands of construction and infrastructure, rails and structural products help form the framework of ambitious projects.",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=85",
    number: "02",
    applications: ["Construction", "Transport infrastructure", "Industrial projects"],
    highlights: [
      "Made for structural and infrastructure applications",
      "A practical choice for large-scale project planning",
      "Product guidance available for your project needs",
    ],
  },
  {
    slug: "wire-rods",
    name: "Wire Rods",
    category: "Speciality steel",
    summary: "Consistent steel that supports precision in downstream manufacturing.",
    description:
      "Wire rods are a versatile starting point for manufacturers creating components and finished products across a range of industries.",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=85",
    number: "03",
    applications: ["Manufacturing", "Engineering components", "Industrial applications"],
    highlights: [
      "A versatile input for downstream manufacturing",
      "Supports a range of component-making processes",
      "Speak with our team about your specifications",
    ],
  },
] satisfies readonly Product[];

export function getProductBySlug(slug: string) {
  return PRODUCTS.find((product) => product.slug === slug);
}
