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
  location: "North America",
  // Set to the full Calendly scheduling link once available, e.g.
  // "https://calendly.com/craig-ameriwealth/consultation". Leave empty to
  // show the "coming soon" placeholder on the Contact page instead.
  calendlyUrl: "",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/education", label: "Education" },
  { href: "/contact", label: "Contact" },
] as const;

// ---------- Home ----------

export const heroStats = [
  "Retirement-focused guidance",
  "Personalized attention",
  "Clear, plain-language explanations",
] as const;

export const philosophySteps = [
  {
    title: "Prepare Before You Need To",
    description:
      "Early, deliberate planning gives you more room to adjust savings, timing, and protection.",
  },
  {
    title: "Decide With Information",
    description:
      "Understanding the tradeoffs behind each option helps you choose what fits your life.",
  },
  {
    title: "Review as Life Changes",
    description:
      "Health, family, and goals evolve, so a good plan is reviewed and refined over time.",
  },
] as const;

export const aboutFeatures = [
  {
    icon: "compass",
    title: "Clear Explanations",
    description:
      "Complex retirement topics are explained in everyday language so you can weigh your options with confidence.",
  },
  {
    icon: "users",
    title: "Lasting Relationships",
    description:
      "The focus is on a long-term working relationship that grows with you through each stage of life.",
  },
  {
    icon: "target",
    title: "Goal-Centered Planning",
    description:
      "Every recommendation begins with what matters most to you, your family, and your timeline.",
  },
] as const;

export const serviceCategories = [
  {
    icon: "clipboard-list",
    title: "Retirement Planning",
    description: "Turn your goals and timeline into a concrete, workable plan.",
    href: "/services#retirement-planning",
  },
  {
    icon: "line-chart",
    title: "Income Strategies",
    description: "Coordinate Social Security, pensions, and savings into dependable income.",
    href: "/services#retirement-income-strategies",
  },
  {
    icon: "wallet",
    title: "Wealth Protection",
    description: "Reduce avoidable gaps so your plan holds up when circumstances change.",
    href: "/services#wealth-protection",
  },
  {
    icon: "compass",
    title: "Insurance Solutions",
    description: "Coverage that fits your goals, reviewed as part of your complete plan.",
    href: "/services#insurance-solutions",
  },
] as const;

export const craigPoints = [
  "Listen first, so the conversation starts with your goals and concerns.",
  "Explain each option in plain language, including the tradeoffs.",
  "Respect your timeline, whether retirement is years away or already here.",
  "Stay available as your circumstances change over time.",
] as const;

export const whyChooseUs = [
  {
    icon: "user",
    title: "Personalized Attention",
    description: "Your situation is considered as a whole, not as a template. Every conversation is shaped around you.",
  },
  {
    icon: "message-square",
    title: "Professional Communication",
    description: "Expect direct, respectful, and timely communication from the first conversation onward.",
  },
  {
    icon: "target",
    title: "Retirement-Focused Guidance",
    description: "Retirement preparation is the core of the practice, so the guidance stays centered on the decisions that matter most.",
  },
  {
    icon: "lightbulb",
    title: "Clear Explanations",
    description: "Options are explained in plain language, so you understand the reasons behind each recommendation.",
  },
  {
    icon: "heart-handshake",
    title: "Client Relationships",
    description: "The goal is a lasting working relationship built on trust, not a single transaction.",
  },
  {
    icon: "sparkles",
    title: "Commitment to Your Goals",
    description: "Time is taken to understand what you are working toward, so the plan reflects your priorities.",
  },
] as const;

// ---------- Services ----------

export const retirementPlanningItems = [
  {
    icon: "clipboard-list",
    title: "Defining Your Retirement Goals",
    description: "Start with the lifestyle you want, from travel and family time to housing and giving, and translate it into concrete targets.",
  },
  {
    icon: "line-chart",
    title: "Estimating Future Income Needs",
    description: "Project what your expenses may look like in retirement, including healthcare and the effects of inflation over time.",
  },
  {
    icon: "calendar-clock",
    title: "Timing Considerations",
    description: "Review when to retire, when to begin claiming benefits, and how those choices affect the years ahead.",
  },
  {
    icon: "wallet",
    title: "Reviewing Savings and Obligations",
    description: "Take inventory of retirement accounts, debts, and commitments so your starting point is clear and accurate.",
  },
] as const;

export const incomeSources = [
  "Government benefits such as Social Security",
  "Employer pensions and retirement accounts",
  "Personal savings and investment assets",
  "Part-time or other earned income",
] as const;

export const wealthProtectionItems = [
  "Beneficiary designations and account titling reviews",
  "Coordinating protection against major financial disruptions",
  "Reviewing how assets are positioned to pass to loved ones",
  "Identifying gaps before they become urgent",
] as const;

export const insuranceSteps = [
  "Identify the risks that could disrupt your income or savings.",
  "Compare how different protections address those specific risks.",
  "Coordinate any coverage with the rest of your retirement plan.",
] as const;

export const lifeStages = [
  {
    phase: "Early Career",
    title: "Building",
    description: "Establish savings habits, an emergency reserve, and a clear picture of long-term goals.",
  },
  {
    phase: "Mid Career",
    title: "Refining",
    description: "Review progress, address protection needs, and adjust contributions as income and responsibilities grow.",
  },
  {
    phase: "Pre-Retirement",
    title: "Preparing",
    description: "Clarify income sources, benefit timing, healthcare costs, and the practical details of retiring.",
  },
  {
    phase: "Retirement",
    title: "Enjoying",
    description: "Maintain a sustainable income plan, stay protected, and revisit the plan as needs change.",
  },
] as const;

export const processSteps = [
  {
    title: "Connect",
    description: "Start with a conversation about your goals, your concerns, and where you are in your retirement journey.",
  },
  {
    title: "Understand",
    description: "Explore your needs, your current resources, and the options available to you, with the tradeoffs explained.",
  },
  {
    title: "Move Forward",
    description: "Discuss appropriate next steps together, at a pace that feels right for you.",
  },
] as const;

// ---------- Education ----------

export const educationConcepts = [
  {
    icon: "trending-up",
    title: "Inflation and Purchasing Power",
    description: "Rising prices steadily reduce what a dollar buys. Retirement plans should account for this gradual erosion.",
  },
  {
    icon: "scale",
    title: "Risk and Time Horizon",
    description: "How much risk is appropriate depends on when you will need the money and how much volatility you can tolerate.",
  },
  {
    icon: "percent",
    title: "Compounding and Consistency",
    description: "Regular contributions and time in the market work together, and the earlier they begin, the more they can add up.",
  },
  {
    icon: "clock",
    title: "Taxes and Account Types",
    description: "Different accounts are taxed in different ways and at different times, which shapes how and when to withdraw.",
  },
] as const;

export const educationalResources = [
  {
    title: "Retirement Preparation",
    description: "Build a realistic picture of what retirement will require and when.",
    topics: ["Setting a retirement target", "Catching up on savings", "Planning your retirement date"],
  },
  {
    title: "Retirement Income",
    description: "Understand how savings and benefits can become reliable income.",
    topics: ["Social Security timing basics", "Withdrawal sequencing", "Managing income for life"],
  },
  {
    title: "Financial Awareness",
    description: "Recognize the everyday forces that shape long-term financial results.",
    topics: ["Inflation and cost of living", "Understanding risk", "Reading your statements"],
  },
  {
    title: "Wealth Protection",
    description: "Keep what you have built secure for yourself and the people you care about.",
    topics: ["Beneficiary reviews", "Coordinating protection", "Preparing your documents"],
  },
  {
    title: "Retirement Considerations",
    description: "Think through the personal and practical questions that come with retiring.",
    topics: ["Healthcare costs", "Lifestyle and purpose", "Revisiting your plan over time"],
  },
] as const;

export const faqs = [
  {
    question: "When should I start planning for retirement?",
    answer: "As early as you can, but it is never too late to review your plan. Earlier planning gives you more time to adjust savings, timing, and protection strategies.",
  },
  {
    question: "What is the difference between saving for retirement and planning retirement income?",
    answer: "Saving builds your assets. Income planning determines how those assets, along with any benefits or pensions, will be turned into dependable income that covers your expenses.",
  },
  {
    question: "Do I need a plan if I already have a 401(k) or IRA?",
    answer: "Many people do. An account balance is one important piece, but a complete plan also looks at income sources, taxes, withdrawal timing, healthcare costs, and protection.",
  },
  {
    question: "What should I bring to a consultation?",
    answer: "Bring a general picture of your savings and accounts, an idea of your expected benefits, any existing insurance, and your goals and timeline. Nothing needs to be perfect to get started.",
  },
  {
    question: "Does AmeriWealth Financial guarantee investment returns?",
    answer: "No. No financial plan can guarantee investment returns or specific outcomes. Our goal is to help you understand the tradeoffs and make informed decisions.",
  },
  {
    question: "Is the information on this website financial, tax, or legal advice?",
    answer: "No. Content on this website is for general education only. For advice specific to your situation, please consult qualified tax and legal professionals.",
  },
] as const;
