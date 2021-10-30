import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Twemoji from '@/components/Twemoji'
import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import slidesData from '@/data/slidesData'
import articlesData from '@/data/articlesData'
import SmallCard from '@/components/SmallCard'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { Ogp } from 'types/Ogp'
import { getBlurConvertedOgps } from '@/lib/ogp'

const MAX_DISPLAY_ARTICLES = 6
const MAX_DISPLAY_SLIDES = 3
const MAX_DISPLAY_PROJECTS = 3

export const getStaticProps: GetStaticProps<{
  articles: Ogp[]
  slides: Ogp[]
  projects: Ogp[]
}> = async () => {
  const articles = await getBlurConvertedOgps(articlesData.slice(0, MAX_DISPLAY_ARTICLES))
  const slides = await getBlurConvertedOgps(slidesData.slice(0, MAX_DISPLAY_SLIDES))
  const projects = await getBlurConvertedOgps(projectsData.slice(0, MAX_DISPLAY_PROJECTS))

  return { props: { articles, slides, projects } }
}

export default function Home({
  articles,
  slides,
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="flex flex-col items-center my-6 xl:flex-row gap-x-12 xl:mb-12">
        <div className="pt-6">
          <h1 className="pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Hi <Twemoji emoji="👋" />, I’m Tadashi
          </h1>
          <h2 className="text-lg prose text-gray-600 dark:text-gray-400">
            Welcome to my site. I'm currently , a data scientist by profession and economist by
            training. In my free time, I like developing Currently Solutions Engineer at CircleCI.
            <Link href="/about">side projects</Link>
            {' and '}
            <Link href="/blog">blogging</Link>
            {' about them. Have a good read!'}
          </h2>
        </div>
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h2 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-5xl md:leading-14">
            <Twemoji emoji="📝" /> Articles
          </h2>
        </div>
        <div className="container py-12">
          <div className="flex flex-wrap -m-4">
            {!articles.length && 'No articles found.'}
            {articles.map((d) => (
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
      {articlesData.length > MAX_DISPLAY_ARTICLES && (
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
            <Twemoji emoji="🗣" /> Slides
          </h2>
        </div>
        <div className="container py-12">
          <div className="flex flex-wrap -m-4">
            {!slides.length && 'No slides found.'}
            {slides.map((d) => (
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
      {slidesData.length > MAX_DISPLAY_SLIDES && (
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
            <Twemoji emoji="👨‍💻" /> Projects
          </h2>
        </div>
        <div className="container py-12">
          <div className="flex flex-wrap -m-4">
            {!projects.length && 'No projects found.'}
            {projects.map((d) => (
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
