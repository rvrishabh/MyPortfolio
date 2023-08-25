import {
  backend,
  css,
  docker,
  drum,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  simon,
  tailwind,
  threejs,
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
    title: "Front-End Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "SDE 1 (Full Stack Developer)",
    company_name: "Janaspandana Software Solutions",
    icon: work,
    iconBg: "#fff",
    date: "September 2022 - Current",
    points: [
      "UX/UI Development with API integration of Admin Panel, Clinician Web Application in a client based project related to Doctor-Patient application using REACT.JS, Material UI.",
      "Developed a fully responsive Patient Web Application with features like Video calling, Booking Session for Clinician and many more using NEXT.Js, Material UI, Agora.",
      "Developing and maintaining web applications using React.js, Next.js, Nest.js, MongoDb and other related technologies.",
      "Making fully responsive landing page UI for all browsers and devices using NEXT.JS, REACT.JS, Material UI.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "Simon Game",
    description:
      "The Simon game is the exciting electronic game of lights and sounds in which players must repeat random sequences of lights by pressing the colored pads in the correct order. It's fast-paced play, with lights and sounds that can challenge you. Experience the fun as you repeat the patterns and advance to higher levels.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: simon,
    source_code_link: "https://github.com/rvrishabh/Simon-Game",
    live_link: "https://rvrishabh.github.io/Simon-Game/",
  },
  {
    name: "Drum Kit",
    description:
      "We’ve got a number of keys on the webpage that represents different drums in a typical drum set and when you click on any of those buttons then you’ll get the corresponding sound of the drum. And in addition you can also use the keys on the keyboard to have a sound effect.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: drum,
    source_code_link: "https://github.com/rvrishabh/My-Drum-kit",
    live_link: "https://rvrishabh.github.io/My-Drum-kit/",
  },
  // {
  //   name: "ToDo-List",
  //   description:
  //     "a list of tasks you need to complete or things that you want to do. Most typically, they're organised in order of priority. ",
  //   tags: [
  //     {
  //       name: "React Js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "CSS",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "JavaScript",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: todo,
  //   source_code_link: "https://github.com/rvrishabh/Todo-item",
  //   live_link: "https://todo-list-byrishabh.netlify.app/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
