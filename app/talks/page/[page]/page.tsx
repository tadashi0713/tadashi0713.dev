import talks from '@/data/talksData'
import { notFound } from 'next/navigation'
import ArticlesListLayout from '@/layouts/ArticlesListLayout'

const TALKS_PER_PAGE = 15

export const generateStaticParams = async () => {
  const totalPages = Math.ceil(talks.length / TALKS_PER_PAGE)
  const paths = Array.from({ length: totalPages }, (_, i) => ({ page: (i + 1).toString() }))

  return paths
}

export default async function Page(props: { params: Promise<{ page: string }> }) {
  const params = await props.params
  const pageNumber = parseInt(params.page as string)
  const totalPages = Math.ceil(talks.length / TALKS_PER_PAGE)

  // Return 404 for invalid page numbers or empty pages
  if (pageNumber <= 0 || pageNumber > totalPages || isNaN(pageNumber)) {
    return notFound()
  }
  const initialDisplayTalks = talks.slice(
    TALKS_PER_PAGE * (pageNumber - 1),
    TALKS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: totalPages,
  }

  return (
    <ArticlesListLayout
      articles={talks}
      initialDisplayArticles={initialDisplayTalks}
      pagination={pagination}
    />
  )
}
