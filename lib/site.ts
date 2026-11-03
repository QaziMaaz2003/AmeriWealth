export const site = {
  businessName: "AmeriWealth Financial",
  advisorName: "Craig Anger",
  advisorTitle: "Retirement Specialist",
  credential: "Certified Financial Fiduciary",
  phoneDisplay: "(713) 557-4746",
  phoneHref: "tel:+17135574746",
  email: "Craig.anger@gmail.com",
  emailHref: "mailto:Craig.anger@gmail.com",
  contactFormEndpoint: "https://formsubmit.co/ameriwealth07@gmail.com",
  npn: "15319354",
  location: "Texas",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;

export const services = [
  {
    slug: "retirement-planning",
    title: "Retirement Planning",
    short: "Income strategies built to last as long as you do.",
    description:
      "A clear, personalized plan for turning what you've saved into dependable income — covering timing, Social Security, and the risks that matter most once you stop working.",
    icon: "compass",
  },
  {
    slug: "life-insurance",
    title: "Life Insurance",
    short: "Cost-efficient term coverage that protects without overpaying.",
    description:
      "Craig built his career on a simple idea: buy term insurance for protection, and put the savings to work. Coverage reviews and recommendations sized to your family's actual needs.",
    icon: "shield",
  },
  {
    slug: "investments-mutual-funds",
    title: "Investments & Mutual Funds",
    short: "Channeling insurance savings into long-term growth.",
    description:
      "The difference between term premiums and whole-life costs doesn't have to sit idle. We build diversified mutual fund strategies designed around your timeline and risk tolerance.",
    icon: "trending-up",
  },
  {
    slug: "financial-consulting",
    title: "Financial Consulting",
    short: "Fiduciary guidance, free of sales quotas.",
    description:
      "As a Certified Financial Fiduciary, Craig is obligated to put your interests first — listening to your goals, educating you on the options, and recommending only what fits.",
    icon: "handshake",
  },
] as const;

export const approachSteps = [
  {
    title: "Listen",
    description:
      "Every plan starts with understanding your goals, your family, and what retirement actually needs to look like for you.",
  },
  {
    title: "Educate",
    description:
      "Because of how complex the financial system is, Craig takes the time to walk through your options in plain language — no jargon, no pressure.",
  },
  {
    title: "Solve",
    description:
      "Every effort goes into building a thoughtful, tailored solution — not a one-size-fits-all product pitch.",
  },
] as const;
