import siteMetadata from '@/data/siteMetadata'
import articlesData from '@/data/articlesData'
import { PageSEO } from '@/components/SEO'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import ArticlesListLayout from '@/layouts/ArticlesListLayout'
import { Article } from 'types/Article'
import { getPlaiceholder } from 'plaiceholder'

export const ARTICLES_PER_PAGE = 12

export const getStaticProps: GetStaticProps<{
  articles: Article[]
  initialDisplayArticles: Article[]
  pagination: { currentPage: number; totalPages: number }
}> = async () => {
  const articles = await Promise.all(
    articlesData.map(async (article) => {
      const { base64 } = await getPlaiceholder(article.imgSrc)
      return {
        title: article.title,
        description: article.description,
        imgSrc: article.imgSrc,
        blurDataURL: base64,
        href: article.href,
      } as Article
    })
  )

  const initialDisplayArticles = articles.slice(0, ARTICLES_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(articles.length / ARTICLES_PER_PAGE),
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
