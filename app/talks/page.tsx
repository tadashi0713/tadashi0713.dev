import { genPageMetadata } from 'app/seo'
import talks from '@/data/talksData'
import TalkListLayout from '@/layouts/TalksListLayout'

const TALKS_PER_PAGE = 10

export const metadata = genPageMetadata({ title: 'Articles' })

export default async function ArticlePage(props: { searchParams: Promise<{ page: string }> }) {
  const pageNumber = 1
  const totalPages = Math.ceil(talks.length / TALKS_PER_PAGE)
  const initialDisplayTalks = talks.slice(0, TALKS_PER_PAGE * pageNumber)
  const pagination = {
    currentPage: pageNumber,
    totalPages: totalPages,
  }

  return (
    <TalkListLayout
      talks={talks}
      initialDisplayTalks={initialDisplayTalks}
      pagination={pagination}
    />
  )
}
