export type NavigationLink = {
  label: string;
  href: string;
  showInHeader?: boolean;
  showInFooter?: boolean;
  footerLabel?: string;
};

export type NavigationItem = NavigationLink & {
  description?: string;
  items?: readonly NavigationLink[];
};

export const NAV_ITEMS: readonly NavigationItem[] = [
  {
    label: "Our Story",
    href: "/about-us",
    showInFooter: true,
    footerLabel: "Our story",
    description:
      "Jindal Steel is one of India’s leading steel manufacturers, with a significant presence in steel, power, mining and infrastructure.",
    items: [
      { label: "Overview", href: "/about-us" },
      { label: "Our Leadership", href: "/leadership" },
      { label: "Awards & Recognition", href: "/awards" },
    ],
  },
  {
    label: "Mine to Metal",
    href: "/mine-to-metal",
    showInFooter: true,
    footerLabel: "Mine to metal",
    description:
      "An integrated value chain that takes us from raw material to finished steel.",
    items: [
      { label: "Overview", href: "/mine-to-metal" },
      { label: "Mining", href: "/mining" },
      { label: "Captive Power", href: "/power" },
      { label: "Steel", href: "/steel" },
      { label: "Our Portfolio", href: "/our-portfolio" },
      { label: "India Operations", href: "/india-operations" },
      { label: "Africa Operations", href: "/africa-operations" },
    ],
  },
  {
    label: "Our Portfolio",
    href: "/our-portfolio",
    showInFooter: true,
    footerLabel: "Our portfolio",
  },
  {
    label: "Sustainability",
    href: "/sustainability-at-jindal-steel",
    showInFooter: true,
    description:
      "Building a responsible future for our people, communities and planet.",
    items: [
      { label: "Overview", href: "/sustainability-at-jindal-steel" },
      { label: "R.I.S.E", href: "/sustainability-rise" },
      { label: "Responsible Governance", href: "/responsible-governance" },
      { label: "Inclusive Growth", href: "/inclusive-growth" },
      { label: "Sustainable Environment", href: "/sustainable-environment" },
      { label: "Ethical Partnerships", href: "/ethical-partnerships" },
    ],
  },
  {
    label: "People",
    href: "/people",
    description: "Our people are the strength behind everything we build.",
    items: [
      { label: "Overview", href: "/people" },
      {
        label: "Career",
        href: "/career-opportunity",
        showInFooter: true,
        footerLabel: "Careers",
      },
      { label: "Jindal Steel Edge", href: "/jindal-steel-edge" },
      { label: "Life at Jindal Steel", href: "/life-at-jindal-steel" },
    ],
  },
  { label: "Investor", href: "/investor-media" },
  { label: "Newsroom", href: "/press-releases" },
  { label: "Steel of India", href: "/steel-of-india" },
  {
    label: "Contact us",
    href: "/contactus",
    showInHeader: false,
    showInFooter: true,
  },
];

export const HEADER_NAV_ITEMS = NAV_ITEMS.filter(
  (item) => item.showInHeader !== false,
);

export const FOOTER_LINKS = NAV_ITEMS.flatMap((item) => {
  const footerLinks: NavigationLink[] = [];

  if (item.showInFooter) {
    footerLinks.push({
      label: item.footerLabel ?? item.label,
      href: item.href,
    });
  }

  footerLinks.push(
    ...(item.items
      ?.filter((link) => link.showInFooter)
      .map((link) => ({
        label: link.footerLabel ?? link.label,
        href: link.href,
      })) ?? []),
  );

  return footerLinks;
});

export const SITE_LOGO = "/images/shivdaslogo.png";
export const NAVBAR_SCROLL_THRESHOLD = 40;
