import { useState } from 'react'
import siteMetadata from '@/data/siteMetadata.mjs'
import talks from '@/data/talksData'
import Twemoji from '@/components/Twemoji'
import MediumCard from '@/components/MediumCard'
import { PageSEO } from '@/components/SEO'

export default function Talks() {
  const [searchValue, setSearchValue] = useState('')
  const filteredTalks = talks.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.description
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })
  return (
    <>
      <PageSEO title={`Talks - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            <Twemoji emoji="🗣" /> Talks
          </h1>
          <div className="relative max-w-lg">
            <input
              aria-label="Search talks"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search talks"
              className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
            />
            <svg
              className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <div className="container py-12">
          <div className="flex flex-wrap -m-4">
            {!filteredTalks.length && 'No talks found.'}
            {filteredTalks.map((d) => (
              <MediumCard
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
