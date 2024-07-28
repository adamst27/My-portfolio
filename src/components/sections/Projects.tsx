import { motion } from "framer-motion";
import TextReveal from "../animations/TextReveal";
import { IconBriefcase2Filled } from "@tabler/icons-react";

const Projects = () => {
  return (
    <section className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-16 bg-slate-950 text-white">
      <TextReveal className="text-indigo-500 text-left font-light text-2xl sm:text-3xl lg:text-5xl mb-8 sm:mb-12 uppercase">
        Helping brands reach their full potential
      </TextReveal>

      <div className="relative w-full h-[0.2px] bg-gray-800 z-10 my-12 sm:my-20 hidden sm:block">
        <motion.div
          className="absolute bg-indigo-700 right-1/4 top-[-60px] rounded-full flex justify-center items-center w-24 h-24 sm:w-32 sm:h-32 z-20"
          animate={{
            rotate: [0, 360],
            transition: {
              duration: 5, // Duration of one full rotation
              ease: "linear",
              repeat: Infinity,
            },
          }}
        >
          <IconBriefcase2Filled size={60} color="white" />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
