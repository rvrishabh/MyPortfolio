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
        Founding Engineer with 3.5+ years shipping high-stakes fintech and Web3
        products from 0 to 1. I build complex, compliance-heavy systems across
        React.js, Next.js, TypeScript, and Nest.js, with deep experience in
        multi-chain blockchain products across EVM and XRPL. I focus on turning
        difficult workflows into fast, intuitive products that scale.
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
