'use client'

import { motion } from 'framer-motion'

export default function Text() {
  const text = 'マリオ';

  const charVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {text.split('').map((char, index) => (
        <motion.p
          className="flex justify-center px-3 font-bold text-[4rem] text-orange-400"
          style={{ textShadow: "#ff9b71 1px 0 30px" }}
          key={index}
          variants={charVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: index * .7, duration: 2 }}
        >
          {char}
        </motion.p>
      ))}
    </>
    )
}
