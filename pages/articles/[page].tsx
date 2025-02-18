import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata.mjs'
import { ARTICLES_PER_PAGE } from '../articles'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import ArticlesListLayout from '@/layouts/ArticlesListLayout'
import articles from '@/data/articlesData'
import { Ogp } from 'types/Ogp'

export const getStaticPaths: GetStaticPaths<{ page: string }> = async () => {
  const totalPages = Math.ceil(articles.length / ARTICLES_PER_PAGE)
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<{
  articles: Ogp[]
  initialDisplayArticles: Ogp[]
  pagination: { currentPage: number; totalPages: number }
}> = async (context) => {
  const {
    params: { page },
  } = context
  const pageNumber = parseInt(page as string)

  const initialDisplayArticles = articles.slice(
    ARTICLES_PER_PAGE * (pageNumber - 1),
    ARTICLES_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(articles.length / ARTICLES_PER_PAGE),
  }

  return {
    props: {
      articles,
      initialDisplayArticles,
      pagination,
    },
  }
}

export default function ArticlesPage({
  articles,
  initialDisplayArticles,
  pagination,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <ArticlesListLayout
        articles={articles}
        initialDisplayArticles={initialDisplayArticles}
        pagination={pagination}
      />
    </>
  )
}
