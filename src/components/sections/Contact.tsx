import { motion } from "framer-motion";
import TextReveal from "../animations/TextReveal";
import { HThreeReveal } from "../animations/TextReveal";
import {
  IconPhoneFilled,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconBrandX,
} from "@tabler/icons-react";

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="w-full py-24 sm:py-32 px-6 sm:px-12 lg:px-24 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto">
        <TextReveal className="text-indigo-500 text-left font-light text-2xl sm:text-3xl lg:text-5xl mb-8 sm:mb-12 uppercase">
          Let's Connect and Create Something Amazing
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
            <IconPhoneFilled size={60} color="white" />
          </motion.div>
        </div>

        <motion.div
          className="grid sm:grid-cols-2 gap-16 sm:gap-24 my-28 mb-24 sm:mb-32"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          <motion.div variants={itemVariants}>
            <HThreeReveal className="text-2xl sm:text-3xl font-light text-indigo-400 uppercase mb-8 sm:mb-12">
              Get in Touch
            </HThreeReveal>
            <p className="text-indigo-200 text-lg sm:text-xl leading-relaxed mb-8">
              I'm always excited to discuss new projects, creative ideas, or
              opportunities to be part of your visions. Feel free to reach out
              for collaborations or just a friendly hello!
            </p>
            <p className="text-indigo-200 text-lg sm:text-xl leading-relaxed">
              Email me at:{" "}
              <a
                href="mailto:adam.stitou@example.com"
                className="text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                adam.stitou@example.com
              </a>
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <HThreeReveal className="text-2xl sm:text-3xl font-light text-indigo-400 uppercase mb-8 sm:mb-12">
              Connect with Me
            </HThreeReveal>
            <div className="flex flex-wrap gap-6">
              {socials.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-900 bg-opacity-30 rounded-lg p-4 text-indigo-200"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(79, 70, 229, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={32} strokeWidth={1.5} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
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
    link: "https://wa.me/2349070000000",
    icon: IconBrandWhatsapp,
  },
  {
    name: "X",
    link: "https://x.com/vitocorleone2g",
    icon: IconBrandX,
  },
];

export default Contact;
