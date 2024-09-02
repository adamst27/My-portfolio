import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconBrandX,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedCounter from "../animations/AnimatedCounter";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative py-12 md:py-28 overflow-hidden text-gray-200">
      <div className="absolute top-0 z-[2] h-full w-screen bg-slate-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      <motion.div
        className="flex flex-col gap-6 md:gap-8 px-6 md:px-16 w-full z-10 mb-12 md:mb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-5xl lg:text-7xl font-bold text-indigo-500"
          variants={itemVariants}
        >
          Hi there, I'm Adam Stitou!
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl lg:text-2xl font-light"
          variants={itemVariants}
        >
          Crafting exceptional web experiences with React and NextJS.
        </motion.p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12  pb-12 px-6 md:px-16 z-10 w-full gap-2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="md:col-span-1 lg:col-span-8 bg-indigo-800 rounded-lg p-6 md:p-12"
          variants={itemVariants}
        >
          <motion.div
            className="flex flex-col  w-full h-full z-10  justify-center items-start text-left gap-2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-xl md:text-2xl lg:text-4xl font-bold text-white"
              variants={itemVariants}
            >
              Building digital products, brands and experiences that standout.
            </motion.h1>
            <motion.p className="text-lg font-light" variants={itemVariants}>
              I build websites and applications that meet the unique needs of my
              clients and help them acheive their goals with ease and
              efficiency, while also delivering exceptional user experiences.
            </motion.p>
            <div className="flex flex-row gap-4 py-4">
              <Link
                to={"/Contact"}
                className="bg-transparent hover:bg-indigo-600 text-white border-2 border-indigo-600 px-6 py-3 z-10 rounded-lg w-fit transition-colors duration-300 ease-in-out"
              >
                Contact me
              </Link>
              <Link
                to={"/work"}
                className="bg-transparent hover:bg-indigo-600 text-white border-2 border-indigo-600 px-6 py-3 z-10 rounded-lg w-fit transition-colors duration-300 ease-in-out"
              >
                Projects
              </Link>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="md:col-span-1 lg:col-span-4 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 gap-2"
          variants={itemVariants}
        >
          {socials.map((social, idx) => (
            <motion.div
              key={idx}
              className="flex justify-center items-center col-span-1 bg-indigo-800 rounded-lg aspect-square"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href={social.link}
                className="w-full h-full flex justify-center items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon
                  size={32}
                  strokeWidth={1.5}
                  className="text-white transition-colors duration-300"
                />
              </a>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="md:col-span-2 lg:col-span-12 grid lg:grid-cols-2 grid-cols-1 gap-2"
          variants={itemVariants}
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="flex flex-col  gap-2 justify-center items-center bg-indigo-800 p-6 rounded-lg"
            >
              <p className="text-3xl font-bold text-white">
                <AnimatedCounter from={stat.from} to={stat.to} />
                {stat.char}
              </p>
              <p className="text-lg font-light text-white">{stat.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <InfiniteCarousel />
    </section>
  );
};

const socials = [
  {
    name: "Github",
    link: "https://github.com/adamst27",
    icon: IconBrandGithub,
  },
  {
    name: "Instagram",
    link: "https://instagram.com/stadagency_",
    icon: IconBrandInstagram,
  },
  {
    name: "Whatsapp",
    link: "https://wa.me/212666261476",
    icon: IconBrandWhatsapp,
  },
  {
    name: "X",
    link: "https://x.com/vitocorleone2g",
    icon: IconBrandX,
  },
];

const stats = [
  {
    name: "Years of experience",
    from: 0,
    to: 2,
    char: "+",
  },
  {
    name: "Projects completed",
    from: 0,
    to: 20,
    char: "+",
  },
];
const InfiniteCarousel = () => {
  const carouselItems = [
    "Web Development",
    "Web Applications",
    "Framer",
    "ReactJS",
    "Typescipt",
    "MongoDB",
    "ExpressJS",
    "NextJS",
    "React",
  ];

  return (
    <div className="overflow-hidden w-full absolute bottom-0 bg-indigo-800 py-4 z-10">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {[...carouselItems, ...carouselItems].map((item, index) => (
          <span
            key={index}
            className="text-xl font-semibold mx-8 text-white uppercase"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Hero;
