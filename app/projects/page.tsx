import projects from './projects.json'
import * as React from 'react'
import Link from 'next/link'

export default function Projects () {
  const sortedProjects = [...projects].sort((a, b) => b.id - a.id);
  return (
    <main className='mt-24 mx-auto w-10/12 md:max-w-2xl'>
      <ul>
        {sortedProjects.map(({name, description , dateOfExistence, tags, link}) => (
          <li key={name}>
            <div className='my-4 p-4 border-stone-400 dark:border-stone-600 border-[1px] rounded'>
              <Link target={'_blank'} href={link} className='flex items-center gap-3'>
                <h2 className='font-bold'>{name}</h2>
                {link && (
                  <ArrowIcon className='text-xs opacity-65 hover:opacity-100'/>
                  )}
              </Link>
              <p className='text-xs opacity-65 mb-5'>{dateOfExistence}</p>
              <p>{description}</p>
              <ul className='flex gap-3 mt-10 overflow-x-auto'>
                {tags.map(tag => (
                  <li key={tag} className='text-xs text-nowrap hover:cursor-pointer bg-stone-100 dark:bg-stone-800 dark:text-white py-2 px-4 rounded-lg'>{tag}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}

function ArrowIcon (props: React.SVGProps<SVGSVGElement>) {
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
