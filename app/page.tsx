'use client'

import content from './content.json';
import '@/styles/page.css';
import Link from 'next/link';
import { motion } from 'framer-motion';
import * as React from 'react';

const links = [
    // {name: 'projects', href: '/projects'},
    {name: 'contact', href: 'mailto:mralejandrogu@gmail.com'},
    {name: 'ig', href: 'https://www.instagram.com/defcxz'},
]

const projects = [
    {
        "id": 1,
        "name": "To-Do Web",
        "description": "This is a simple to-do web app that allows users to add, edit, and delete tasks using localStorage.",
        "dateOfExistence": "2024",
        "tags": [
            "Tailwind",
            "TypeScript",
            "Next.js"
        ],
        "link": "https://def-todo.vercel.app"
    },
    {
        "id": 2,
        "name": "Subsify",
        "description": "A web platform that allows users to organize and manage their subscriptions and house bills. All in once place.",
        "dateOfExistence": "2023",
        "tags": [
            "JavaScript",
            "Django",
            "Bootstrap"
        ],
        "link": ""
    },
    {
        "id": 3,
        "name": "VANR",
        "description": "VANR is a place where people could tell stories and share life experiences.",
        "dateOfExistence": "2021-2023",
        "tags": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "link": "https://vanr-cl.tumblr.com"
    }
];

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
                    projects
                </motion.p>

                <motion.div
                    className='grid grid-cols-1 md:grid-cols-3 gap-3'
                    {...fadeInUpAnimation}
                    transition={{ ...fadeInUpAnimation.transition, delay: 1 }}
                >
                    {projects.map(({id, name, description, dateOfExistence, tags, link}) => (
                        <motion.div
                            key={id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.5, delay: id * 0.2 }}
                        >
                            <div className='flex flex-col justify-between p-4 border-stone-400 min-h-80 dark:border-stone-600 border-[1px] rounded-lg'>
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
                                <div>
                                    <ul className='flex gap-3 mt-4 flex-wrap'>
                                        {tags.map(tag => (
                                            <li key={tag}
                                                className='text-xs hover:cursor-pointer dark:hover:bg-stone-700 dark:bg-stone-800 hover:bg-stone-200 bg-stone-100 dark:text-white py-2 px-4 rounded-lg'>{tag}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>
        </motion.main>
    );
}
