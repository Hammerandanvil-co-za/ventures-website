export const SITE_ORIGIN = (process.env.NEXT_PUBLIC_SITE_ORIGIN ?? "").replace(/\/$/, "");

export const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/our-services", label: "Our Services" },
  { href: "/about-us", label: "About Us" },
  { href: "/blog", label: "Blog" },
  { href: "/contact-us", label: "Contact Us" },
];
