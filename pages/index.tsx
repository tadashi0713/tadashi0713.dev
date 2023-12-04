import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Twemoji from '@/components/Twemoji'
import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import talksData from '@/data/talksData'
import articlesData from '@/data/articlesData'
import SmallCard from '@/components/SmallCard'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { Ogp } from 'types/Ogp'
import { getBlurConvertedOgps } from '@/lib/ogp'

const MAX_DISPLAY_ARTICLES = 15
const MAX_DISPLAY_TALKS = 6
const MAX_DISPLAY_PROJECTS = 6

export const getStaticProps: GetStaticProps<{
  articles: Ogp[]
  talks: Ogp[]
  projects: Ogp[]
}> = async () => {
  const articles = await getBlurConvertedOgps(articlesData.slice(0, MAX_DISPLAY_ARTICLES))
  const talks = await getBlurConvertedOgps(talksData.slice(0, MAX_DISPLAY_TALKS))
  const projects = await getBlurConvertedOgps(projectsData.slice(0, MAX_DISPLAY_PROJECTS))

  return { props: { articles, talks, projects } }
}

export default function Home({
  articles,
  talks,
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
            Welcome to my site. I'm currently Senior Solutions Engineer at CircleCI.
            <br />I was previously DevOps Enginner / Software Enginner in Test. My interest is CI/CD
            and DevOps and experienced various projects, mobile CI/CD, E2E test automation of
            mobile/web applications, continuous delivery to Kubernetes.
            <br />
            You can know about me in detail in <Link href="/articles">external articles</Link>
            {', '}
            <Link href="/talks">previous talks</Link>
            {', '}
            <Link href="/projects">side projects</Link>
            {', and '}
            <Link href="https://resume.io/r/DdFtcnNf8">resume</Link>
            {'. Have a good read!'}
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
            <Twemoji emoji="🗣" /> Talks
          </h2>
        </div>
        <div className="container py-12">
          <div className="flex flex-wrap -m-4">
            {!talks.length && 'No talks found.'}
            {talks.map((d) => (
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
      {talksData.length > MAX_DISPLAY_TALKS && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/talks"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all talks"
          >
            All Talks &rarr;
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
