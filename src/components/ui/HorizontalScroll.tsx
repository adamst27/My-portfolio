import { useScroll, useTransform, motion } from "framer-motion";

import { useRef } from "react";

const HorizontalScrollCarousel = ({ cards }: any) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-67%"]);
  const Card = ({ card }: any) => {
    return (
      <div
        key={card.id}
        className="group relative h-[600px] w-[100vw] overflow-hidden"
      >
        <div className="absolute inset-0 z-10 grid place-content-center p-6">
          {card.content}
        </div>
      </div>
    );
  };
  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-950">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex">
          {cards.map((card: any) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollCarousel;
