export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
  { label: "Blog", href: "/blog" },
  { label: "Resume", href: "/resume" },
];

export const ctaLink = { label: "Hire Me", href: "#contact" };

export const brandName = "Asad Ishfaq";
export const brandTagline = "AI/ML Engineer · Building Intelligent Systems";

export const socialLinks = {
  github: "https://github.com/",
  linkedin: "https://linkedin.com/in/",
  email: "ranaasad36793@gmail.com",
  phone: "+923088600653",
};
