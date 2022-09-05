/* eslint-disable jsx-a11y/iframe-has-title */
export default function Contact() {
  return (
    <div className="flex flex-col items-start justify-start md:justify-center md:items-center md:flex-row md:space-x-6 md:mt-24">
      <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js" defer></script>
      <iframe
        className="airtable-embed airtable-dynamic-height"
        src="https://airtable.com/embed/shrJ0A9ke1QkJZ2wt?backgroundColor=blue"
        frameBorder="0"
        width="100%"
        height="1207"
        // style="background: transparent; border: 1px solid #ccc;"
      ></iframe>
    </div>
  )
}
