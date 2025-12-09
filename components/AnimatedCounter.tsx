import React, { useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

interface AnimatedCounterProps {
  to: number;
  className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ to, className }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  const spring = useSpring(0, {
    damping: 20,
    stiffness: 100,
  });

  const value = useTransform(spring, (current) => Math.round(current));
  const display = useTransform(value, (current) =>
    new Intl.NumberFormat('en-US').format(current)
  );

  useEffect(() => {
    if (isInView) {
      spring.set(to);
    }
  }, [isInView, to, spring]);

  return <motion.span ref={ref} className={className}>{display}</motion.span>;
};

export default AnimatedCounter;
