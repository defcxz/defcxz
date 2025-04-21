'use client'

import content from './content.json';
import '@/styles/page.css';
import Link from 'next/link';
import Projects from "@/app/projects/page";
import { motion } from 'framer-motion';

const links = [
    // {name: 'projects', href: '/projects'},
    {name: 'contact', href: 'mailto:hi@def.works'},
    {name: 'ig', href: 'https://www.instagram.com/defcxz'},
]

export default function Home() {

    return (
        <motion.main
            className='mt-16 mx-auto w-10/12 md:max-w-2xl'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <header>
                <h1 className='text-3xl font-bold name'>{content.name}</h1>
                <hr className='w-3/12 my-2'></hr>
                {/*<p className='opacity-65'>{content.subtitle}</p>*/}
            </header>
            <motion.p
                className='mt-10 text-pretty whitespace-pre-wrap'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
            >
                {content.description}
            </motion.p>
            <section className='mt-10'>
                <motion.ul
                    className='flex gap-3'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    {links.map(({name, href}) => (
                        <li key={name} className='mb-3'>
                            <Link className='text-pretty opacity-65 hover:opacity-100' href={href}>
                                {name}
                            </Link>
                        </li>
                    ))}
                </motion.ul>
            </section>
            <Projects/>
        </motion.main>
    );
}
