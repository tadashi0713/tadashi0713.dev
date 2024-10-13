import fs from 'fs'
import globby from 'globby'
import prettier from 'prettier'
import siteMetadata from '../data/siteMetadata'
;(async () => {
  // Prettier設定を解決
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js')

  // 対象となるファイルを取得
  const pages: string[] = await globby([
    'pages/*.js',
    'data/blog/**/*.mdx',
    'data/blog/**/*.md',
    'public/tags/**/*.xml',
    '!pages/_*.js',
    '!pages/api',
  ])

  // サイトマップの生成
  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((page) => {
          const path = page
            .replace('pages/', '/')
            .replace('data/blog', '/blog')
            .replace('public/', '/')
            .replace('.js', '')
            .replace('.mdx', '')
            .replace('.md', '')
            .replace('/feed.xml', '')
          const route = path === '/index' ? '' : path
          if (page === `pages/404.js` || page === `pages/blog/[...slug].js`) {
            return ''
          }
          return `
            <url>
              <loc>${siteMetadata.siteUrl}${route}</loc>
            </url>
          `
        })
        .join('')}
    </urlset>
  `

  // フォーマットを適用
  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  })

  // sitemap.xmlを保存
  fs.writeFileSync('public/sitemap.xml', await formatted)
})()
