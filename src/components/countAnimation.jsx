import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

const CountAnimation = ({ value }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const controls = animate(count, Number(value.replace("+","")), {
      duration: 3,
    });

    return controls.stop; // Clean up animation on unmount
  }, [value.replace("+","")]); // Dependency on value ensures animation starts when value changes

  return <motion.span>{rounded}</motion.span>;
};

export default CountAnimation;
