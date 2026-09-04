import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant(0.5)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Founding Engineer with 4 years shipping high-stakes fintech and Web3
        products full-stack, web and mobile. I built a multi-app fintech
        ecosystem at Trend Digital (OTC trading, merchant KYC, affiliate
        payouts, React Native app) on a Turborepo monorepo, led multi-chain
        RWA tokenization across EVM and XRPL at Zoniqx, and built and ship
        VNV Valpro, a live property valuation platform, backend to frontend
        on NestJS, Prisma, and React. Comfortable owning React, Next.js,
        TypeScript, NestJS, and PostgreSQL end to end.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-[80px]">
        {services?.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[500px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img
            src={icon}
            alt="web-development"
            className="w-16 h-16 object-contain"
          />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default SectionWrapper(About, "about");
