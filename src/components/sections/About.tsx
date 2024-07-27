import { IconBadgeTmFilled } from "@tabler/icons-react";
import { motion } from "framer-motion";
const About = () => {
  return (
    <section className=" w-full py-28 px-16 bg-slate-950">
      <h2 className="text-indigo-500 text-left font-extrabold text-5xl  uppercase">
        Helping brands reach their full potential
      </h2>
      <div className="relative w-full h-[0.2px] bg-gray-800 z-10 mt-20">
        <div className="absolute  bg-indigo-700 right-1/4 top-[-60px] rounded-full flex justify-center items-center w-32 h-32 z-20">
          <IconBadgeTmFilled size={80} color="white" />
        </div>
      </div>
      <div className="grid grid-cols-2 w-full my-16">
        <motion.div className=" flex flex-col gap-4 ">
          <h3 className="text-3xl font-bold text-indigo-400">MY STORY</h3>
          <p className="text-indigo-200 text-lg leading-relaxed flex flex-col gap-2">
            <span>
              I'm a self-taught web developer with a deep passion for creating
              exceptional web experiences and crafting beautiful, functional
              websites and software. With a strong foundation in front-end and
              back-end development, I thrive on bringing innovative ideas to
              life and tackling complex challenges.
            </span>
            <span>
              {" "}
              Driven by curiosity and a love for learning, I constantly seek out
              new opportunities to expand my skill set and stay ahead of
              industry trends. Whether it's mastering the latest technologies,
              refining my design aesthetics, or optimizing user experiences, I'm
              dedicated to delivering top-notch results.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
