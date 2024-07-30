import { useRef, memo, ReactNode } from "react";
import { motion, useInView } from "framer-motion";

const DURATION = 0.3;
const STAGGER = 0.03;

const Char = memo(
  ({ char, charIndex }: { char: string; charIndex: number }) => (
    <motion.span
      key={charIndex}
      className="inline-block"
      style={{ display: "inline-block" }}
      variants={{
        hidden: { y: "100%", opacity: 0 },
        visible: { y: 0, opacity: 1 },
      }}
      transition={{
        duration: DURATION,
        ease: [0.215, 0.61, 0.355, 1],
        delay: charIndex * STAGGER,
      }}
    >
      {char}
    </motion.span>
  )
);

const Word = memo(
  ({
    content,
    wordIndex,
    totalPreviousChars,
  }: {
    content: string;
    wordIndex: number;
    totalPreviousChars: number;
  }) => (
    <span style={{ whiteSpace: "pre" }}>
      {content.split("").map((char, charIndex) => (
        <Char
          char={char}
          charIndex={totalPreviousChars + charIndex}
          key={charIndex}
        />
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

  const content = children as string;
  const words = content.match(/\S+|\s+/g) || [];

  return (
    <motion.h2
      ref={ref}
      className={`overflow-hidden ${className}`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {words.map((word, index) => (
        <Word
          content={word}
          wordIndex={index}
          totalPreviousChars={words.slice(0, index).join("").length}
          key={index}
        />
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

  const content = children as string;
  const words = content.match(/\S+|\s+/g) || [];

  return (
    <motion.h3
      ref={ref}
      className={`overflow-hidden ${className}`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {words.map((word, index) => (
        <Word
          content={word}
          wordIndex={index}
          totalPreviousChars={words.slice(0, index).join("").length}
          key={index}
        />
      ))}
    </motion.h3>
  );
};

export default TextReveal;
