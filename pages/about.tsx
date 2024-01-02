import { PageSEO } from '@/components/SEO'
import Twemoji from '@/components/Twemoji'
import Image from '@/components/Image'
import SocialIcon from '@/components/social-icons'
import siteMetadata from '@/data/siteMetadata'
import { getFileBySlug } from '@/lib/mdx'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { AuthorFrontMatter } from 'types/AuthorFrontMatter'
import { useMemo, useState } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import useNextBlurhash from 'use-next-blurhash'

export const getStaticProps: GetStaticProps<{
  enSource: string
  jaSource: string
}> = async () => {
  const enSource = await (await getFileBySlug<AuthorFrontMatter>('authors', ['en'])).mdxSource
  const jaSource = await (await getFileBySlug<AuthorFrontMatter>('authors', ['ja'])).mdxSource

  return { props: { enSource, jaSource } }
}

export default function About({
  enSource,
  jaSource,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [activeTab, changeActiveTab] = useState('en')
  const MdxEn = useMemo(() => getMDXComponent(enSource), [enSource])
  const MdxJa = useMemo(() => getMDXComponent(jaSource), [jaSource])
  const [blurDataUrl] = useNextBlurhash(siteMetadata.imageBlurHash)

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
              placeholder="blur"
              blurDataURL={blurDataUrl}
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {activeTab === 'en' ? 'Tadashi Nemoto' : '根本 征'}
            </h3>
            <div className="text-gray-500 dark:text-gray-400">
              {activeTab === 'en' ? 'Solutions Engineer' : 'ソリューションズエンジニア'}
            </div>
            <div className="text-gray-500 dark:text-gray-400">
              {activeTab === 'en' ? 'CircleCI (Japan)' : 'CircleCI 合同会社'}
            </div>
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
                <div className={activeTab === 'en' ? '-mb-2' : '' + 'mr-1'}>
                  <button
                    className={
                      activeTab === 'en'
                        ? 'bg-white border-gray-200 border-t-2 border-r-2 border-l-2 rounded-t border-opacity-60 dark:border-gray-700 dark:bg-gray-900 py-2 px-4 font-semibold'
                        : 'py-2 px-4'
                    }
                    onClick={() => changeActiveTab('en')}
                  >
                    English
                  </button>
                </div>
                <div className={activeTab === 'ja' ? '-mb-2' : '' + 'mr-1'}>
                  <button
                    className={
                      activeTab === 'ja'
                        ? 'bg-white border-gray-200 border-t-2 border-r-2 border-l-2 rounded-t border-opacity-60 dark:border-gray-700 dark:bg-gray-900 py-2 px-4 font-semibold'
                        : 'py-2 px-4'
                    }
                    onClick={() => changeActiveTab('ja')}
                  >
                    日本語
                  </button>
                </div>
              </div>
              {activeTab === 'en' && (
                <div className="px-6 border-2 border-gray-200 rounded-b rounded-r border-opacity-60 dark:border-gray-700">
                  <MdxEn />
                </div>
              )}
              {activeTab === 'ja' && (
                <div className="px-6 border-2 border-gray-200 rounded-b rounded-r rounded-l border-opacity-60 dark:border-gray-700">
                  <MdxJa />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
