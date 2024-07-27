import {
  KeyframeOptions,
  animate,
  useInView,
  useIsomorphicLayoutEffect,
} from "framer-motion";
import { useRef } from "react";

type AnimatedCounterProps = {
  from: number;
  to: number;
  animationOptions?: KeyframeOptions;
};
const AnimatedCounter = ({
  from,
  to,
  animationOptions,
}: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInview = useInView(ref, { once: false });
  useIsomorphicLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (!isInview) return;
    element.textContent = String(from);

    const controls = animate(from, to, {
      duration: 1.5,
      ease: "easeOut",
      ...animationOptions,
      onUpdate(value) {
        element.textContent = value.toFixed();
      },
    });
    return () => {
      controls.stop();
    };
  }, [ref, from, to, isInview]);

  return <span ref={ref} />;
};

export default AnimatedCounter;
