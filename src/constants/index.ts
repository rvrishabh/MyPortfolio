import {
  backend,
  docker,
  git,
  javascript,
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
      "Built a crypto payment gateway supporting BTC, ETH, USDT, and USDC with real-time transaction tracking, QR-based checkout, and webhook handling.",
      "Engineered crypto-to-fiat instant settlement flows to reduce volatility risk for merchants.",
      "Developed Merchant, Affiliate, and Admin platforms with KYC onboarding, payouts, analytics, RBAC, and audit logging.",
      "Delivered 80+ reusable components in a Turborepo monorepo with type-safe validations and scalable architecture.",
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
