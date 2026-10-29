export type FeaturedProduct = {
  name: string;
  category: string;
  description: string;
  image: string;
  number: string;
  href: string;
};

export const HOMEPAGE_HERO = {
  backgroundImage:
    "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=2400&q=90",
  eyebrow: "Engineering a stronger tomorrow",
  title: "Steel for",
  titleAccent: "what's next.",
  description:
    "From the ground beneath us to the skylines ahead, we make the materials that move the world forward.",
  primaryLink: { label: "Explore our portfolio", href: "/our-portfolio" },
  secondaryLink: { label: "Discover our story", href: "/about-us" },
  companyHighlight: {
    eyebrow: "Built on purpose",
    title: "Since 1952",
    description: "A legacy of progress, with a vision for generations to come.",
  },
  location: "20°17'N 85°06'E",
} as const;

export const FEATURED_PRODUCTS = [
  {
    name: "Plates & Coils",
    category: "Flat products",
    description: "Precision-rolled steel engineered for demanding applications.",
    image:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1200&q=85",
    number: "01",
    href: "/our-portfolio/plates-coils",
  },
  {
    name: "Rails & Structures",
    category: "Long products",
    description: "High-strength sections made to carry ambitious projects.",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=85",
    number: "02",
    href: "/our-portfolio/rails-structures",
  },
  {
    name: "Wire Rods",
    category: "Speciality steel",
    description:
      "Consistent performance, from the smallest detail to the big picture.",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=85",
    number: "03",
    href: "/our-portfolio/wire-rods",
  },
] satisfies readonly FeaturedProduct[];

export const HOMEPAGE_PRODUCTS_CONTENT = {
  eyebrow: "Made for the real world",
  title: "Materials that",
  titleAccent: " make more possible.",
  linkLabel: "View all products",
  linkHref: "/our-portfolio",
} as const;

export const HOMEPAGE_COMPANY_CONTENT = {
  eyebrow: "The difference we bring",
  title: "Progress is built",
  titleAccent: " together.",
  description:
    "A fully integrated journey, a commitment to responsible growth, and the expertise to turn big ideas into lasting impact.",
  storyLinkLabel: "Discover mine to metal",
  storyLinkHref: "/mine-to-metal",
  features: [
    {
      icon: "integrated",
      title: "Integrated",
      description: "Connected capability from resource to finished product.",
    },
    {
      icon: "responsible",
      title: "Responsible",
      description:
        "Building progress with people, communities, and planet in mind.",
    },
  ],
  contactMessage: "Have a project in mind? Let's find the right steel for it.",
  contactLinkLabel: "Talk to our team",
  contactLinkHref: "/contactus",
} as const;
