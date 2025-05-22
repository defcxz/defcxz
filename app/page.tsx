'use client'

import content from './bio.json';
import '@/styles/page.css';
import Link from 'next/link';
import { motion } from 'motion/react';
import * as React from 'react';
import projects from './projects.json';

const links = [
    // {name: 'projects', href: '/projects'},
    {name: 'contact', href: 'mailto:mralejandrogu@gmail.com'},
    {name: 'ig', href: 'https://www.instagram.com/defcxz'},
]

const fadeInUpAnimation = {
    initial: {
        opacity: 0,
        y: 20,
        filter: 'blur(3px)',
        scale: 0.98
    },
    animate: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        scale: 1
    },
    transition: { duration: 1 }
}

function ArrowIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 16 16"
            height="1.3em"
            width="1.3em"
            {...props}
        >
            <path
                fillRule="evenodd"
                d="M14 2.5a.5.5 0 00-.5-.5h-6a.5.5 0 000 1h4.793L2.146 13.146a.5.5 0 00.708.708L13 3.707V8.5a.5.5 0 001 0v-6z"
            />
        </svg>
    );
}

export default function Home() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.main
            className='mt-16 mx-auto w-10/12 md:max-w-2xl min-h-[100dvh]'
            {...fadeInUpAnimation}
        >
            <header>
                <h1 className='text-3xl font-bold name'>{content.name}</h1>
                <hr className='w-3/12 my-2'></hr>
                {/*<p className='opacity-65'>{content.subtitle}</p>*/}
            </header>
            <motion.p
                className='mt-10 text-pretty whitespace-pre-wrap text-justify'
                {...fadeInUpAnimation}
                transition={{ ...fadeInUpAnimation.transition, delay: 0.2 }}
            >
                {content.description}
            </motion.p>
            <section className='mt-10'>
                <motion.ul
                    className='flex gap-3'
                    {...fadeInUpAnimation}
                    transition={{ ...fadeInUpAnimation.transition, delay: 0.4 }}
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

            <motion.section
                className='mt-12'
                {...fadeInUpAnimation}
                transition={{ ...fadeInUpAnimation.transition, delay: 0.6 }}
            >
                <motion.p
                    className='mt-10 mb-3 text-pretty whitespace-pre-wrap'
                    {...fadeInUpAnimation}
                    transition={{ ...fadeInUpAnimation.transition, delay: 0.8 }}
                >
                    side projects
                </motion.p>

                <motion.div
                    className='grid grid-cols-1 md:grid-cols-2 gap-3'
                    {...fadeInUpAnimation}
                    transition={{ ...fadeInUpAnimation.transition, delay: 1 }}
                >
                    {projects.map(({id, name, description, dateOfExistence, link}) => (
                        <motion.div
                            className='cursor-pointer hover:scale-[1.05] transition-transform duration-300 hover:bg-stone-100 dark:hover:bg-stone-800'
                            key={id}
                            initial={{ opacity: 0, filter: 'blur(3px)' }}
                            animate={{ opacity: 1, filter: 'blur(0)' }}
                            transition={{ duration: 1.5, delay: 1 + id * 0.2 }}
                        >
                            <div className='flex flex-col justify-between p-4 border-stone-400 min-h-56 dark:border-stone-600 border-[1px] rounded-lg'>
                                <div>
                                    <Link target={'_blank'} href={link} className='flex items-center gap-3'>
                                        <h1 className='font-bold'>{name}</h1>
                                        {link && (
                                            <ArrowIcon className='text-xs opacity-65 hover:opacity-100'/>
                                        )}
                                    </Link>
                                    <p className='text-xs opacity-65 mb-5'>{dateOfExistence}</p>
                                    <p>{description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>
        </motion.main>
    );
}
