import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  stagger?: number;
}

const containerVariants = {
  hidden: {},
  visible: (i = 1) => ({
    transition: { staggerChildren: i, delayChildren: 0.3 },
  }),
};

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
    },
  },
};

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className, stagger = 0.08 }) => {
  const words = text.split(' ');

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      custom={stagger}
      className={className}
      aria-label={text}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          style={{ display: 'inline-block', marginRight: '0.25em' }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
