import { motion } from "framer-motion";
import TextReveal, { HThreeReveal } from "../animations/TextReveal";
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
              duration: 5,
              ease: "linear",
              repeat: Infinity,
            },
          }}
        >
          <IconBriefcase2Filled size={60} color="white" />
        </motion.div>
      </div>

      <div className="my-28 grid lg:grid-cols-2 grid-cols-1 gap-16">
        {projectsData.map((project, index) => (
          <motion.div className="flex flex-col gap-6" key={index}>
            <div className="relative flex justify-center items-center overflow-hidden group h-[300px]">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105 rounded-lg"
              />
              <motion.a
                href={project.link}
                target="_blank"
                className="absolute bottom-4 right-4 bg-indigo-700 text-white rounded-full h-28 w-28 px-4 py-2 flex items-center justify-center text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="font-light text-lg">
                  {project.link.length > 1
                    ? "View Project"
                    : "Link not available"}
                </span>
              </motion.a>
            </div>
            <HThreeReveal className="font-light text-3xl text-left">
              {project.name}
            </HThreeReveal>
            <span className="full h-[0.2px] bg-gray-800"></span>
            <div className="flex flex-row justify-between">
              <h4 className="text-2xl text-indigo-200 uppercase">
                {project.category}
              </h4>
              <p className="text-lg text-indigo-200">2024</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const projectsData = [
  {
    image: "/assets/infinittymedia.webp",
    name: "Infinitty Media",
    category: "Business site",
    link: "https://infinittymedia.com",
  },
  {
    image: "/assets/entajia.webp",
    name: "Alentajia",
    category: "SaaS",
    link: "https://alentajia.com/",
  },
  {
    image: "/assets/stadteams.webp",
    name: "STAD TEAMS",
    category: "SaaS",
    link: "",
  },
  {
    image: "/assets/stadbot.webp",
    name: "STAD BOT",
    category: "AI chatbot",
    link: "https://stadbot.vercel.app/",
  },
  {
    image: "/assets/livedocs.webp",
    name: "LiveDocs",
    category: "Text editor",
    link: "https://livedocs-indol.vercel.app/",
  },
  {
    image: "/assets/khiyata.webp",
    name: "Khiyata",
    category: "INVOICES SOFTWARE",
    link: "",
  },
];

export default Projects;
