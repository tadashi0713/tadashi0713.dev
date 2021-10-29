import { ComponentProps, useState } from 'react'
import SmallCard from '@/components/SmallCard'
import ArticlePagination from '@/components/ArticlePagination'
import { Ogp } from 'types/Ogp'

interface Props {
  articles: Ogp[]
  initialDisplayArticles?: Ogp[]
  pagination?: ComponentProps<typeof ArticlePagination>
}

export default function ArticlesListLayout({
  articles,
  initialDisplayArticles = [],
  pagination,
}: Props) {
  const [searchValue, setSearchValue] = useState('')
  const filteredArticles = articles.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.description
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayArticles exist, display it if no searchValue is specified
  const displayArticles =
    initialDisplayArticles.length > 0 && !searchValue ? initialDisplayArticles : filteredArticles

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Articles
          </h1>
          <div className="relative max-w-lg">
            <input
              aria-label="Search articles"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search articles"
              className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-900 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-gray-100"
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
            {!filteredArticles.length && 'No articles found.'}
            {displayArticles.map((d) => (
              <SmallCard
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
                blurDataURL={d.blurDataURL}
              />
            ))}
          </div>
        </div>
      </div>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <ArticlePagination
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
        />
      )}
    </>
  )
}
