import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { PageSEO } from '@/components/SEO'
import Twemoji from '@/components/Twemoji'
import Image from '@/components/Image'
import SocialIcon from '@/components/social-icons'
import siteMetadata from '@/data/siteMetadata'
import { getFileBySlug } from '@/lib/mdx'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { AuthorFrontMatter } from 'types/AuthorFrontMatter'
import { useState } from 'react'

const DEFAULT_LAYOUT = 'AuthorLayout'

// @ts-ignore
export const getStaticProps: GetStaticProps<{
  authorDetails: { mdxSource: string; frontMatter: AuthorFrontMatter }
}> = async () => {
  const authorDetails = await getFileBySlug<AuthorFrontMatter>('authors', ['default'])
  const { mdxSource, frontMatter } = authorDetails
  return { props: { authorDetails: { mdxSource, frontMatter } } }
}

export default function About({ authorDetails }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [activeTab, changeActiveTab] = useState('en')

  const { mdxSource, frontMatter } = authorDetails

  // <MDXLayoutRenderer
  //   layout={frontMatter.layout || DEFAULT_LAYOUT}
  //   mdxSource={mdxSource}
  //   frontMatter={frontMatter}
  // />
  return (
    <>
      <PageSEO
        title={`About - ${siteMetadata.author}`}
        description={`About me - ${siteMetadata.author}`}
      />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            <Twemoji emoji="💁‍♂️" /> About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2">
            <Image
              src={siteMetadata.image}
              alt="avatar"
              className="w-48 h-48 rounded-full"
              width={200}
              height={200}
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {siteMetadata.author}
            </h3>
            <div className="text-gray-500 dark:text-gray-400">Solutions Engineer</div>
            <div className="text-gray-500 dark:text-gray-400">CircleCI(Japan)</div>
            <div className="flex pt-6 space-x-3">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
              <SocialIcon kind="github" href={siteMetadata.github} />
              <SocialIcon kind="facebook" href={siteMetadata.facebook} />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
            </div>
          </div>
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            <div>
              <div className="list-reset flex">
                <div className="mr-1">
                  <button
                    className={
                      activeTab === 'en'
                        ? 'border-gray-200 border-t-2 border-r-2 border-l-2  rounded-t border-opacity-60 dark:border-gray-700 py-2 px-4 font-semibold'
                        : 'py-2 px-4'
                    }
                    onClick={() => changeActiveTab('en')}
                  >
                    English
                  </button>
                </div>
                <div className="mr-1">
                  <button
                    className={
                      activeTab === 'ja'
                        ? 'border-gray-200 border-t-2 border-r-2 border-l-2 rounded-t border-opacity-60 dark:border-gray-700 py-2 px-4 font-semibold'
                        : 'py-2 px-4'
                    }
                    onClick={() => changeActiveTab('ja')}
                  >
                    日本語
                  </button>
                </div>
              </div>
              <div className="px-6 border-2 border-gray-200 rounded-b border-opacity-60 dark:border-gray-700">
                {activeTab === 'en' && (
                  <p>
                    EN Tails Azimuth is a professor of atmospheric sciences at the Stanford AI Lab.
                    His research interests includes complexity modelling of tailwinds, headwinds and
                    crosswinds.
                  </p>
                )}
                {activeTab === 'ja' && (
                  <p>
                    JA Tails Azimuth is a professor of atmospheric sciences at the Stanford AI Lab.
                    His research interests includes complexity modelling of tailwinds, headwinds and
                    crosswinds.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
