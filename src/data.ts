export const profile = {
  name: "Rishabh Verma",
  role: "Founding Engineer",
  location: "Noida, India",
  email: "rishabhofficial.verma@gmail.com",
  phone: "+91 97600 22095",
  phoneHref: "tel:+919760022095",
  yearsShipping: 4,
  // Drop a square-ish photo in /public and set e.g. "/portrait.jpg" to replace
  // the illustrated face with an engraved version of your photo.
  portrait: null as string | null,
  socials: [
    { label: "GitHub", href: "https://github.com/rvrishabh" },
    { label: "LinkedIn", href: "https://linkedin.com/in/rishabh-verma-b66714203" },
    { label: "X", href: "https://x.com/rvrishabh26" },
  ],
};

export const about =
  "I came to software from civil engineering, and I still think like a builder: load paths, failure modes, things that have to stand up on day one. For four years I've applied that to fintech and Web3 — OTC trading engines, crypto payment rails, multi-chain tokenization — owning each product from the database schema to the last pixel.";

export const highlights = [
  { value: "4", label: "years shipping fintech & Web3" },
  { value: "80+", label: "shared components in one monorepo" },
  { value: "6", label: "languages localized in production" },
  { value: "2", label: "chains: EVM and XRPL" },
];

export type Role = {
  title: string;
  company: string;
  context?: string;
  start: string;
  end: string;
  where: string;
  points: string[];
  stack: string[];
};

export const experience: Role[] = [
  {
    title: "Founding Engineer",
    company: "Trend Digital",
    start: "Apr 2025",
    end: "Sep 2026",
    where: "Remote",
    points: [
      "Sole frontend owner of a four-portal fintech platform — merchant, affiliate, admin and super-admin — on a Turborepo monorepo with 80+ shared components and tenant-isolated APIs with refresh-token rotation.",
      "Engineered the OTC crypto trading module: quotes with expiry, balance checks, trade creation and order confirmation, plus virtual IBAN banking for outbound payments.",
      "Built a crypto payment gateway for BTC, ETH, USDT and USDC with live tracking, QR checkout and instant crypto-to-fiat settlement, and a companion React Native merchant app spanning 10+ financial domains.",
      "Shipped permission-gated RBAC across all four portals and full localization in six languages.",
    ],
    stack: ["React", "TanStack", "Zod", "Turborepo", "React Native"],
  },
  {
    title: "Senior Product Engineer",
    company: "Zoniqx",
    context: "RWA tokenization platform",
    start: "Jun 2024",
    end: "Apr 2025",
    where: "Remote",
    points: [
      "Integrated XRPL through Palisade Wallet alongside an EVM multi-chain context (Wagmi, RainbowKit) so investors switch wallets without friction.",
      "Built the investor dashboard: portfolio tracking, token holdings, live asset performance and full transaction history.",
      "Engineered the asset lifecycle — creation, issuance, allocation, transfer — across EVM and XRPL, hiding chain latency behind async UI and on/off-chain sync, with KYC/AML onboarding.",
    ],
    stack: ["Next.js", "Wagmi", "Viem", "RainbowKit", "XRPL"],
  },
  {
    title: "Frontend Engineer",
    company: "Figr",
    start: "Jan 2024",
    end: "Mar 2024",
    where: "Bangalore",
    points: [
      "Built the PROKIT design resource hub with Next.js, Tailwind and shadcn/ui.",
      "Engineered the IDENTITY-PLUGIN Figma plugin for generating and customizing styles.",
    ],
    stack: ["Next.js", "Tailwind", "shadcn/ui", "Figma API"],
  },
  {
    title: "SDE 1",
    company: "Janaspandana Software",
    start: "Sep 2022",
    end: "Dec 2023",
    where: "Hyderabad",
    points: [
      "Built admin, clinician and patient portals for a healthtech product with React, Next.js and Material UI.",
      "Integrated Agora video calling and built REST APIs with NestJS, Prisma and MySQL.",
    ],
    stack: ["React", "NestJS", "Prisma", "MySQL", "Agora"],
  },
];

export const project = {
  name: "VNV Valupro",
  summary:
    "A live property valuation platform for a bank valuation business — web admin panel and React Native app, built solo from backend to frontend.",
  points: [
    "Database-driven RBAC with a maker-checker approval flow for valuation sign-off",
    "Valuation engine with circle-rate lookups and a self-learning rate system",
    "Bank-formatted PDF reports generated with Handlebars and Puppeteer",
    "Dual mobile sign-in with email OTP and Google OAuth",
  ],
  stack: ["NestJS", "Fastify", "Prisma", "PostgreSQL", "React", "React Native"],
};

export const stack = [
  {
    group: "Frontend",
    items: ["TypeScript", "React", "Next.js", "React Native", "TanStack", "Redux", "Zustand", "Tailwind CSS", "shadcn/ui"],
  },
  {
    group: "Backend & data",
    items: ["Node.js", "NestJS", "Fastify", "PostgreSQL", "Prisma", "MongoDB", "Redis", "REST APIs"],
  },
  {
    group: "Web3",
    items: ["Wagmi", "Viem", "RainbowKit", "EVM", "XRPL", "Wallet integration"],
  },
];

export const education = {
  degree: "B.Tech, Civil Engineering",
  school: "Meerut Institute of Engineering and Technology",
  years: "2016 – 2020",
};
