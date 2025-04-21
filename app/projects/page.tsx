'use client'

import projects from './projects.json';
import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Projects() {
    return (
        <motion.main
            className='mt-12'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <motion.p
                className='mt-10 mb-3 text-pretty whitespace-pre-wrap'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
            >
                projects
            </motion.p>

            <motion.div
                className='grid grid-cols-1 md:grid-cols-3 gap-3'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
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
        </motion.main>
    )
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

