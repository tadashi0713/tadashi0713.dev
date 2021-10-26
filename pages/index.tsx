import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import slidesData from '@/data/slidesData'
import articles from '@/data/articlesData'
import SmallCard from '@/components/SmallCard'

const MAX_DISPLAY_ARTICLES = 6
const MAX_DISPLAY_SLIDES = 3
const MAX_DISPLAY_PROJECTS = 3

export default function Home() {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h2 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-5xl md:leading-14">
            Articles
          </h2>
        </div>
        <div className="container py-12">
          <div className="flex flex-wrap -m-4">
            {!articles.length && 'No articles found.'}
            {articles.slice(0, MAX_DISPLAY_ARTICLES).map((d) => (
              <SmallCard
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
      {articles.length > MAX_DISPLAY_ARTICLES && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/articles"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all articles"
          >
            All Articles &rarr;
          </Link>
        </div>
      )}
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h2 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-5xl md:leading-14">
            Slides
          </h2>
        </div>
        <div className="container py-12">
          <div className="flex flex-wrap -m-4">
            {!slidesData.length && 'No slides found.'}
            {slidesData.slice(0, MAX_DISPLAY_SLIDES).map((d) => (
              <SmallCard
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
      {articles.length > MAX_DISPLAY_SLIDES && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/slides"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all slides"
          >
            All Slides &rarr;
          </Link>
        </div>
      )}
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h2 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-5xl md:leading-14">
            Projects
          </h2>
        </div>
        <div className="container py-12">
          <div className="flex flex-wrap -m-4">
            {!projectsData.length && 'No projects found.'}
            {projectsData.slice(0, MAX_DISPLAY_PROJECTS).map((d) => (
              <SmallCard
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
      {projectsData.length > MAX_DISPLAY_PROJECTS && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/projects"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all projects"
          >
            All Projects &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
