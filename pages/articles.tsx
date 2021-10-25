import { ComponentProps } from 'react'
import siteMetadata from '@/data/siteMetadata'
import articlesData from '@/data/articlesData'
import { PageSEO } from '@/components/SEO'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import ArticlesListLayout from '@/layouts/ArticlesListLayout'

export const POSTS_PER_PAGE = 5

export const getStaticProps: GetStaticProps<{
  articles: ComponentProps<typeof ArticlesListLayout>['articles']
  initialDisplayArticles: ComponentProps<typeof ArticlesListLayout>['initialDisplayArticles']
  pagination: ComponentProps<typeof ArticlesListLayout>['pagination']
}> = async () => {
  const articles = articlesData
  const initialDisplayArticles = articles.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(articles.length / POSTS_PER_PAGE),
  }

  return { props: { initialDisplayArticles, articles, pagination } }
}

export default function Articles({
  articles,
  initialDisplayArticles,
  pagination,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title={`Articles - ${siteMetadata.author}`} description={siteMetadata.description} />
      <ArticlesListLayout
        articles={articles}
        initialDisplayArticles={initialDisplayArticles}
        pagination={pagination}
      />
    </>
  )
}
