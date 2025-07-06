import { genPageMetadata } from 'app/seo'
import articles from '@/data/articlesData'
import ArticlesListLayout from '@/layouts/ArticlesListLayout'

const ARTICLES_PER_PAGE = 15

export const metadata = genPageMetadata({ title: 'Articles' })

export default async function ArticlePage(props: { searchParams: Promise<{ page: string }> }) {
  const pageNumber = 1
  const totalPages = Math.ceil(articles.length / ARTICLES_PER_PAGE)
  const initialDisplayArticles = articles.slice(0, ARTICLES_PER_PAGE * pageNumber)
  const pagination = {
    currentPage: pageNumber,
    totalPages: totalPages,
  }

  return (
    <ArticlesListLayout
      articles={articles}
      initialDisplayArticles={initialDisplayArticles}
      pagination={pagination}
    />
  )
}
