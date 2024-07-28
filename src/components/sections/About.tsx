import {
  IconApps,
  IconBadgeTmFilled,
  IconBrandToyota,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import TextReveal from "../animations/TextReveal";

const About = () => {
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
          <IconBadgeTmFilled size={60} color="white" />
        </motion.div>
      </div>

      <img
        src="https://images.pexels.com/photos/3888151/pexels-photo-3888151.jpeg"
        alt="about-image"
        className="w-full h-[200px] sm:h-[300px] lg:h-[400px] object-cover object-center rounded-lg mb-12 sm:mb-16"
      />

      <div className="mb-12 sm:mb-16">
        <h3 className="text-2xl sm:text-3xl font-light text-indigo-400 uppercase mb-6 sm:mb-8">
          MY STORY
        </h3>
        <p className="text-indigo-200 text-base sm:text-lg leading-relaxed">
          I'm a self-taught web developer with a deep passion for creating
          exceptional web experiences and crafting beautiful, functional
          websites and software. With a strong foundation in front-end and
          back-end development, I thrive on bringing innovative ideas to life
          and tackling complex challenges.
          <br />
          <br />
          Driven by curiosity and a love for learning, I constantly seek out new
          opportunities to expand my skill set and stay ahead of industry
          trends. Whether it's mastering the latest technologies, refining my
          design aesthetics, or optimizing user experiences, I'm dedicated to
          delivering top-notch results.
        </p>
      </div>

      <TextReveal className="text-2xl sm:text-3xl font-light text-indigo-400 uppercase mb-8 sm:mb-12">
        I provide a various amount of services
      </TextReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-12 sm:mb-16">
        {services.map((serv, idx) => (
          <div key={idx} className="flex flex-col gap-4">
            <span className="text-sm text-indigo-300 font-bold text-left border-b border-gray-800 pb-4">
              0{idx + 1}.
            </span>
            <h3 className="text-xl sm:text-2xl py-4 font-light text-white text-left">
              {serv.name}
            </h3>
            <p className="text-indigo-200 text-base sm:text-lg leading-relaxed">
              {serv.p}
            </p>
          </div>
        ))}
      </div>

      <TextReveal className="text-2xl sm:text-3xl font-light text-indigo-400 uppercase mb-8 sm:mb-12">
        Using this large set of skills
      </TextReveal>

      <div className="grid gap-8 sm:gap-12 mb-12 sm:mb-16">
        <div>
          <h3 className="text-xl sm:text-2xl font-light text-indigo-300 mb-6">
            Technical Skills
          </h3>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="bg-indigo-900 bg-opacity-30 rounded-lg px-4 py-2 text-indigo-200 text-sm sm:text-base"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-light text-indigo-300 mb-6">
            Soft Skills
          </h3>
          <div className="flex flex-wrap gap-4">
            {softSkills.map((skill, idx) => (
              <div
                key={idx}
                className="bg-indigo-800 bg-opacity-30 rounded-lg px-4 py-2 text-indigo-200 text-sm sm:text-base"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
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
  "PostgreSQL",
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
    name: "Building web applications",
    icon: IconApps,
    p: "I build functional web applications that meets the needs of my clients",
  },
  {
    name: "Brands websites",
    icon: IconBrandToyota,
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione tempore cumque debitis esse cupiditate aliquid?",
  },
  {
    name: "Brands websites",
    icon: IconBrandToyota,
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione tempore cumque debitis esse cupiditate aliquid?",
  },
];

export default About;
