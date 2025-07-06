import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import Twemoji from '@/components/Twemoji'
import SmallCard from '@/components/SmallCard'
import featuredItems from '@/data/featuredItemsData'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
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
      {/* {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </>
  )
}
