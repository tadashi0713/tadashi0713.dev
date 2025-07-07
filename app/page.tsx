import Link from '@/components/Link'
import Twemoji from '@/components/Twemoji'
import SmallCard from '@/components/SmallCard'
import featuredItems from '@/data/featuredItemsData'
import articlesData from '@/data/articlesData'
import talksData from '@/data/talksData'
import projectsData from '@/data/projectsData'

const MAX_DISPLAY_ARTICLES = 9
const MAX_DISPLAY_TALKS = 6
const MAX_DISPLAY_PROJECTS = 6

export default function Home() {
  const articles = articlesData.slice(0, MAX_DISPLAY_ARTICLES)
  const talks = talksData.slice(0, MAX_DISPLAY_TALKS)
  const projects = projectsData.slice(0, MAX_DISPLAY_PROJECTS)
  return (
    <>
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          Hi <Twemoji emoji="👋" />, I’m Tadashi
        </h1>
        <h2 className="prose text-lg text-gray-500 dark:text-gray-400">
          Welcome to my site. I'm currently Strategic Solutions Engineer at Docker.
          <br />
          Previously I was Senior Solutions Engineer at CircleCI, and DevOps Enginner at several
          Japanese companies.
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
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h2 className="text-2xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-3xl sm:leading-10 md:text-5xl md:leading-14 dark:text-gray-100">
            <Twemoji emoji="💡" /> Featured
          </h2>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {featuredItems.map((d) => (
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
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h2 className="text-2xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-3xl sm:leading-10 md:text-5xl md:leading-14 dark:text-gray-100">
            <Twemoji emoji="📝" /> Articles
          </h2>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {!articles.length && 'No articles found.'}
            {articles.map((d) => (
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
      {articlesData.length > MAX_DISPLAY_ARTICLES && (
        <div className="flex justify-end text-base leading-6 font-medium">
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
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h2 className="text-2xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-3xl sm:leading-10 md:text-5xl md:leading-14 dark:text-gray-100">
            <Twemoji emoji="🗣" /> Talks
          </h2>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {!talks.length && 'No talks found.'}
            {talks.map((d) => (
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
      {talksData.length > MAX_DISPLAY_TALKS && (
        <div className="flex justify-end text-base leading-6 font-medium">
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
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h2 className="text-2xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-3xl sm:leading-10 md:text-5xl md:leading-14 dark:text-gray-100">
            <Twemoji emoji="👨‍💻" /> Projects
          </h2>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {!projects.length && 'No projects found.'}
            {projects.map((d) => (
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
        <div className="flex justify-end text-base leading-6 font-medium">
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
