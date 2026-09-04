import {
  backend,
  docker,
  git,
  javascript,
  mobile,
  mongodb,
  nodejs,
  reactjs,
  redux,
  simon,
  tailwind,
  typescript,
  web,
  work,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Founding Engineer",
    icon: web,
  },
  {
    title: "Senior Product Engineer",
    icon: backend,
  },
  {
    title: "Full-Stack Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React.js",
    icon: reactjs,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Founding Engineer",
    company_name: "Trend Digital",
    icon: work,
    iconBg: "#fff",
    date: "April 2025 - Present",
    points: [
      "Built a 4-portal fintech platform (merchant, affiliate, admin, super-admin) as sole frontend owner, on a Turborepo monorepo with TanStack Router/Query, Zod, and 80+ shared components.",
      "Engineered an OTC crypto trading module (quote generation with expiry, trade creation, balance checks, order confirmation) and a virtual IBAN banking integration (BCB Banking) for outbound payments.",
      "Built a crypto payment gateway (BTC, ETH, USDT, USDC) with real-time tracking, QR checkout, and crypto-to-fiat instant settlement; delivered a companion React Native merchant app covering 10+ financial domains with multi-tenant auth and token-refresh session handling.",
      "Shipped full i18n localization (6 languages) for the merchant dashboard.",
    ],
  },
  {
    title: "Full-Stack Developer (Personal Project)",
    company_name: "VNV Valpro — Property Valuation Platform",
    icon: work,
    iconBg: "#fff",
    date: "May 2026 - Present",
    points: [
      "Built a property valuation case-management platform end-to-end (NestJS, Fastify, Prisma, PostgreSQL), live with active users, for the family's valuation business.",
      "Engineered a valuation calculation engine with circle-rate lookups and configurable rate registers, generating audit-ready PDF reports (Handlebars + Puppeteer).",
      "Designed a maker-checker workflow and RBAC across institutions/branches; built the React 19 admin frontend (TanStack Router/Query) with JWT, Google OAuth, and OTP auth.",
    ],
  },
  {
    title: "Senior Product Engineer",
    company_name: "Zoniqx (RWA Tokenization Platform)",
    icon: work,
    iconBg: "#fff",
    date: "June 2024 - April 2025",
    points: [
      "Integrated XRPL (non-EVM) via Palisade Wallet alongside EVM multi-chain context using wagmi and RainbowKit.",
      "Built an investor dashboard for portfolio tracking, token holdings, real-time performance, and transaction history.",
      "Engineered complete asset lifecycle flows from creation to transfer with smart contract interactions across EVM and XRPL.",
      "Implemented async on-chain/off-chain sync patterns and KYC/AML-compliant onboarding flows.",
    ],
  },
  {
    title: "Frontend Engineer",
    company_name: "Figrfast Pvt. Ltd. (Figr)",
    icon: work,
    iconBg: "#fff",
    date: "January 2024 - March 2024",
    points: [
      "Built PROKIT design resource hub with Next.js, Tailwind, and ShadcnUI.",
      "Engineered the IDENTITY-PLUGIN for Figma style customization and generation.",
      "Developed animated landing experiences with React.js and GSAP.",
    ],
  },
  {
    title: "SDE 1",
    company_name: "JSS",
    icon: work,
    iconBg: "#fff",
    date: "September 2022 - December 2023",
    points: [
      "Built Admin, Clinician, and Patient portals using React.js, Next.js, and Material UI.",
      "Integrated Agora SDK for video calling and session booking.",
      "Developed RESTful APIs with Nest.js and database integrations for production workflows.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "VNV Valpro",
    description:
      "Live property valuation case-management platform built end-to-end for the family's valuation business: valuation calculation engine with circle-rate lookups, audit-ready PDF reports, maker-checker workflow, and RBAC across institutions/branches.",
    tags: [
      {
        name: "NestJS",
        color: "blue-text-gradient",
      },
      {
        name: "Prisma",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
    ],
    image: simon,
    source_code_link: "https://github.com/rvrishabh",
    live_link: "https://rishabh26-portfolio.vercel.app/",
  },
  {
    name: "TryBlink AI",
    description:
      "Real-time Telegram productivity assistant with GPT-powered task extraction, smart replies, message triage, and persistent conversation memory for faster action-taking.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "AI",
        color: "pink-text-gradient",
      },
    ],
    image: simon,
    source_code_link: "https://github.com/rvrishabh",
    live_link: "https://rishabh26-portfolio.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
