import { useRef, memo, ReactNode } from "react";
import { motion, useInView } from "framer-motion";

const DURATION = 0.3;
const STAGGER = 0.03;

const Word = memo(
  ({ word, wordIndex }: { word: string; wordIndex: number }) => (
    <span className="inline-block whitespace-nowrap mr-1">
      {word.split("").map((char, charIndex) => (
        <motion.span
          key={charIndex}
          className="inline-block"
          variants={{
            hidden: { y: "100%", opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
          transition={{
            duration: DURATION,
            ease: [0.215, 0.61, 0.355, 1],
            delay: (wordIndex * word.length + charIndex) * STAGGER,
          }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  )
);

const TextReveal = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const words = (children as string).split(" ");

  return (
    <motion.h2
      ref={ref}
      className={`overflow-hidden ${className}`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {words.map((word, index) => (
        <Word word={word} wordIndex={index} key={index} />
      ))}
    </motion.h2>
  );
};

export const HThreeReveal = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const words = (children as string).split(" ");

  return (
    <motion.h3
      ref={ref}
      className={`overflow-hidden ${className}`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {words.map((word, index) => (
        <Word word={word} wordIndex={index} key={index} />
      ))}
    </motion.h3>
  );
};

export default TextReveal;
