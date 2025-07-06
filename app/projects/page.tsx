import { genPageMetadata } from 'app/seo'
import projects from '@/data/projectsData'
import ProjectListLayout from '@/layouts/ProjectsListLayout'

const PROJECTS_PER_PAGE = 10

export const metadata = genPageMetadata({ title: 'Projects' })

export default async function ProjectPage(props: { searchParams: Promise<{ page: string }> }) {
  const pageNumber = 1
  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE)
  const initialDisplayProjects = projects.slice(0, PROJECTS_PER_PAGE * pageNumber)
  const pagination = {
    currentPage: pageNumber,
    totalPages: totalPages,
  }

  return (
    <ProjectListLayout
      projects={projects}
      initialDisplayProjects={initialDisplayProjects}
      pagination={pagination}
    />
  )
}
