import { IconBadgeTmFilled } from "@tabler/icons-react";
import { motion } from "framer-motion";
import TextReveal from "../animations/TextReveal";
import { HThreeReveal } from "../animations/TextReveal";

const About = () => {
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
            <IconBadgeTmFilled size={60} color="white" />
          </motion.div>
        </div>

        <motion.img
          src="https://images.pexels.com/photos/3888151/pexels-photo-3888151.jpeg"
          alt="about-image"
          className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover object-center rounded-lg mb-20 sm:mb-32"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
        />

        <motion.div
          className="mb-24 sm:mb-32"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
        >
          <HThreeReveal className="text-3xl sm:text-4xl font-light text-indigo-400 uppercase mb-8 sm:mb-12">
            MY STORY
          </HThreeReveal>
          <p className="text-indigo-200 text-lg sm:text-xl leading-relaxed">
            I'm a self-taught web developer with a deep passion for creating
            exceptional web experiences and crafting beautiful, functional
            websites and software. With a strong foundation in front-end and
            back-end development, I thrive on bringing innovative ideas to life
            and tackling complex challenges.
            <br />
            <br />
            Driven by curiosity and a love for learning, I constantly seek out
            new opportunities to expand my skill set and stay ahead of industry
            trends. Whether it's mastering the latest technologies, refining my
            design aesthetics, or optimizing user experiences, I'm dedicated to
            delivering top-notch results.
          </p>
        </motion.div>

        <TextReveal className="text-3xl sm:text-4xl font-light text-indigo-400 uppercase mb-16 sm:mb-24">
          I provide a various amount of services
        </TextReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-16 sm:gap-24 mb-24 sm:mb-32">
          {services.map((serv, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col gap-6"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
            >
              <span className="text-lg text-indigo-300 font-bold text-left border-b border-gray-800 pb-4">
                0{idx + 1}.
              </span>
              <h3 className="text-2xl sm:text-3xl py-4 font-light text-white text-left">
                {serv.name}
              </h3>
              <p className="text-indigo-200 text-lg sm:text-xl leading-relaxed">
                {serv.p}
              </p>
            </motion.div>
          ))}
        </div>

        <TextReveal className="text-3xl sm:text-4xl font-light text-indigo-400 uppercase mb-16 sm:mb-24">
          Using this set of skills
        </TextReveal>

        <motion.div
          className="grid gap-16 sm:gap-24 mb-24 sm:mb-32"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
        >
          <div>
            <HThreeReveal className="text-2xl sm:text-3xl font-light text-indigo-300 mb-8 sm:mb-12">
              Technical Skills
            </HThreeReveal>
            <div className="flex flex-wrap gap-6">
              {skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  className="bg-indigo-900 bg-opacity-30 rounded-lg px-6 py-3 text-indigo-200 text-base sm:text-lg"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(79, 70, 229, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <HThreeReveal className="text-2xl sm:text-3xl font-light text-indigo-300 mb-8 sm:mb-12">
              Soft Skills
            </HThreeReveal>
            <div className="flex flex-wrap gap-6">
              {softSkills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  className="bg-indigo-800 bg-opacity-30 rounded-lg px-6 py-3 text-indigo-200 text-base sm:text-lg"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(99, 102, 241, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Typescript",
  "Framer Motion",
  "Responsive Design",
  "RESTful APIs",
  "Git",
  "Webpack",
  "Tailwind CSS",
];

const softSkills = [
  "Communication",
  "Leadership",
  "Teamwork",
  "Creativity",
  "Problem-solving",
  "Time Management",
  "Adaptability",
];

const services = [
  {
    name: "Web Application Development",
    p: "I build functional and scalable web applications tailored to meet the specific needs of my clients, ensuring optimal performance and user experience.",
  },
  {
    name: "Brand Website Creation",
    p: "I design and develop stunning brand websites that capture the essence of your business, helping you establish a strong online presence and attract more customers.",
  },
  {
    name: "Custom Software Solutions",
    p: "I create bespoke software solutions to address unique business challenges, streamline operations, and drive efficiency in your organization.",
  },
];

export default About;
