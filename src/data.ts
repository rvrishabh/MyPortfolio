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
  "I came to software from civil engineering, and I still think like a builder: load paths, failure modes, things that have to stand up on day one. For four years I've applied that to whatever the product needs, from payment and trading platforms and multi-chain tokenization to healthtech portals, design tools and AI assistants. I own each product end to end, from the Figma file and the Prisma schema to production on AWS.";

export type Highlight = { prefix?: string; value: number; suffix?: string; label: string };

export const highlights: Highlight[] = [
  { value: 4, label: "years shipping production software" },
  { value: 40, label: "live merchants on a payments platform I architected" },
  { prefix: "$", value: 50, suffix: "M", label: "in real-world assets tokenized on a platform I helped lead" },
  { value: 260, suffix: "+", label: "shared API hooks in one monorepo" },
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
    title: "Founding Engineer, Full Stack",
    company: "Trend Digital",
    context: "Crypto and fiat payments platform",
    start: "Apr 2025",
    end: "Sep 2026",
    where: "Remote",
    points: [
      "Architected a four-portal crypto and fiat payments platform for merchants, affiliates, admins and super-admins, on a pnpm and Turborepo monorepo with 260+ shared API hooks and 80+ reusable UI components in React and TypeScript.",
      "Built the NestJS backend services behind it: tenant-isolated REST APIs for merchants, payments, payouts and KYC, with JWT and cookie auth, refresh-token rotation and permission-checked endpoints that mirror the RBAC in all four portals.",
      "Merchants accept BTC, ETH, USDT and USDC and settle to fiat, with live payment tracking and QR checkout. The platform runs about 40 live merchants at 5 to 10 transactions a day each.",
      "Shipped OTC trading with 30-second locked quotes, balance checks and automatic execution, so merchants trade without a manual desk, plus virtual IBAN banking for outbound payments.",
      "Delivered a companion React Native merchant app covering 10+ financial domains with multi-tenant auth, and localized the merchant dashboard into six languages.",
    ],
    stack: ["React", "TypeScript", "NestJS", "REST APIs", "PostgreSQL", "TanStack", "Zod", "Turborepo", "React Native"],
  },
  {
    title: "Senior Product Engineer",
    company: "Zoniqx",
    context: "B2B2C real-world-asset tokenization platform",
    start: "May 2024",
    end: "Mar 2025",
    where: "Remote",
    points: [
      "Led a team of three developers and handled client calls for a tokenization platform used by RedSwan and Monolith Ventures, with about $50M in tokenized assets.",
      "Built the multi-chain wallet layer: six EVM networks plus XRPL through RainbowKit, Palisade, Dfns, Lace and Rubix. The state handling stops the wrong wallet from connecting in the middle of token creation.",
      "Engineered the asset lifecycle across EVM and XRPL, from creation and issuance to allocation and transfer, hiding chain latency behind async UI and on-chain/off-chain sync, with KYC and AML onboarding.",
      "Built the investor dashboard with portfolio tracking, token holdings, live asset performance and full transaction history.",
      "Merged two codebases into one pnpm and Turborepo monorepo, cutting code by 60% and CI/CD time from 12 minutes to 3.",
    ],
    stack: ["React", "Next.js", "NestJS", "TypeScript", "Wagmi", "Viem", "RainbowKit", "XRPL", "Turborepo"],
  },
  {
    title: "Frontend Engineer",
    company: "Figr",
    context: "Figrfast Pvt. Ltd.",
    start: "Jan 2024",
    end: "Mar 2024",
    where: "Bangalore",
    points: [
      "Built the PROKIT design resource hub with Next.js, Tailwind CSS and shadcn/ui.",
      "Engineered the IDENTITY-PLUGIN Figma plugin for generating and customizing styles, cutting design time for its users by 50%.",
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "shadcn/ui", "Figma API"],
  },
  {
    title: "SDE 1",
    company: "Janaspandana Software",
    context: "Healthtech",
    start: "Sep 2022",
    end: "Dec 2023",
    where: "Hyderabad",
    points: [
      "Built admin, clinician and patient portals with React, Next.js and Material UI.",
      "Integrated the Agora SDK for video calling, which improved communication efficiency by 35%.",
      "Built RESTful APIs with NestJS, Prisma and MySQL.",
    ],
    stack: ["React", "Next.js", "NestJS", "Prisma", "MySQL", "Agora"],
  },
];

export type Project = {
  name: string;
  kind: string;
  live?: boolean;
  summary: string;
  points: string[];
  stack: string[];
  mock: "valuation" | "triage";
};

export const projects: Project[] = [
  {
    name: "VNV ValuPro",
    kind: "Independent build, full stack",
    live: true,
    summary:
      "A live property valuation platform for a bank-valuation firm, built solo from the database to the mobile app. It replaced Excel, paper and WhatsApp and now handles 100 to 200 cases a month.",
    points: [
      "Web admin panel on React 19 with TanStack Router and Query, backed by NestJS on Fastify, Prisma, PostgreSQL and Redis",
      "React Native site-engineer app whose geo-tagged camera sends photos straight to Cloudflare R2 for each case",
      "JWT, email OTP and Google sign-in, DB-driven RBAC and a maker-checker approval flow with a full audit log",
      "Valuation engine with circle-rate lookups and a self-learning rate system",
      "Bank-formatted PDF reports generated with Handlebars and Puppeteer",
    ],
    stack: ["React 19", "TanStack", "NestJS", "Fastify", "Prisma", "PostgreSQL", "Redis", "React Native", "Cloudflare R2"],
    mock: "valuation",
  },
  {
    name: "TryBlink AI",
    kind: "Side project, AI",
    summary:
      "A Telegram inbox triage tool powered by GPT-4o. It reads your chats over MTProto, sorts what needs a reply and drafts answers that remember earlier conversations.",
    points: [
      "GPT-4o triage over the Telegram MTProto API",
      "Redis-backed streaming responses",
      "Conversation memory pipeline on Supabase and pgvector",
    ],
    stack: ["OpenAI GPT-4o", "MTProto", "Redis", "Supabase", "pgvector", "Node.js"],
    mock: "triage",
  },
];

export const stack = [
  {
    group: "Frontend",
    items: ["TypeScript", "JavaScript", "React 19", "Next.js", "React Native", "TanStack Query", "TanStack Router", "Redux", "Zustand", "Tailwind CSS", "shadcn/ui", "Radix UI", "React Hook Form", "Zod"],
  },
  {
    group: "Backend and data",
    items: ["Node.js", "NestJS", "Fastify", "Express.js", "REST APIs", "PostgreSQL", "Prisma", "Supabase", "pgvector", "MongoDB", "Mongoose", "Redis", "JWT", "RBAC", "Python"],
  },
  {
    group: "Web3",
    items: ["Wagmi", "Viem", "ethers.js", "RainbowKit", "EVM", "XRPL"],
  },
  {
    group: "AI and LLM",
    items: ["OpenAI API (GPT-4o)", "Streaming responses", "Conversation memory", "MTProto"],
  },
  {
    group: "Cloud and tools",
    items: ["AWS (EC2, ECS, S3)", "Docker", "GitHub Actions", "CI/CD", "Cloudflare R2", "Vercel", "Render", "pnpm", "Turborepo"],
  },
];

export const education = {
  degree: "B.Tech, Civil Engineering",
  school: "Meerut Institute of Engineering and Technology",
  years: "2016 to 2020",
  certificates: [
    "Namaste React",
    "Namaste Node.js (NamasteDev)",
    "Advanced React, Meta (Coursera)",
    "Crash Course on Python, Google (Coursera)",
  ],
};
