'use client'

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <Image
                src='/logo.svg'
                alt='footer-logo'
                width={10}
                height={10}
                className='my-20 w-11 h-11 mx-auto dark:invert'
            />
        </motion.div>
    );
}