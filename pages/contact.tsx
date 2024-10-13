import { Widget } from '@typeform/embed-react'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata.mjs'

/* eslint-disable jsx-a11y/iframe-has-title */
export default function Contact() {
  return (
    <>
      <PageSEO title={`Contact - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="flex flex-col items-start justify-start md:justify-center md:items-center md:flex-row md:space-x-6 md:mt-24">
        <Widget id="qRUXvCNb" style={{ width: '100%', height: '500px' }} />
      </div>
    </>
  )
}
