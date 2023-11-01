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
          <motion.p
            className="flex justify-center px-3 font-black text-[4rem] text-orange-400"
            style={{ textShadow: "#ff9b71 0 0 30px" }}
            key={index}
            variants={charVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * .8, duration: 1 }}
          >
            {char}
          </motion.p>
        ))}
      </div>
      {/*<motion.p*/}
      {/*  className={'text-center mt-3 font-regular text-sm text-orange-400'}*/}
      {/*  style={{ textShadow: "#ff9b71 0 0 10px" }}*/}
      {/*  variants={charVariants}*/}
      {/*  initial="hidden"*/}
      {/*  animate="visible"*/}
      {/*  transition={{ delay: 2.5, duration: 2 }}*/}
      {/*>*/}
      {/*  Coming (really) soon...*/}
      {/*</motion.p>*/}
    </>
    )
}
