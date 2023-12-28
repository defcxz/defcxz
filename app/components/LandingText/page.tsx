'use client'

import { motion } from 'framer-motion'

export default function Text() {
  const text = 'マリオ';

  const charVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <>
      <div className={'flex justify-center'}>
        {text.split('').map((char, index) => (
          <motion.h1
            className="flex justify-center px-3 font-bold text-[4rem] flex-col"
            key={index}
            variants={charVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * .8, duration: 1 }}
          >
            {char}
          </motion.h1>
        ))}
      </div>
    </>
    )
}
