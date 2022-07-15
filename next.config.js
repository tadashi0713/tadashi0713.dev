// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// })
const { withPlaiceholder } = require('@plaiceholder/next')

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
module.exports = withPlaiceholder({
  // Next.js 12
  swcMinify: true,
  images: {
    domains: [
      'files.speakerdeck.com',
      'repository-images.githubusercontent.com',
      'opengraph.githubassets.com',
      'circleci.com',
      'd2908q01vomqb2.cloudfront.net',
      'cdn-ak.f.st-hatena.com',
      'storage.googleapis.com',
      'codezine.jp',
      'ascii.jp',
      'dpd29bjwmgbr8.cloudfront.net',
      'assets.st-note.com',
      'd1.awsstatic.com',
      'res.cloudinary.com',
      'thinkit.co.jp',
    ],
  },
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  eslint: {
    dirs: ['pages', 'components', 'lib', 'layouts', 'scripts'],
  },
  experimental: { esmExternals: true },
  webpack: (config, { dev, isServer }) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|mp4)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]',
          },
        },
      ],
    })

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    if (!dev && !isServer) {
      // Replace React with Preact only in client production build
      Object.assign(config.resolve.alias, {
        'react/jsx-runtime.js': 'preact/compat/jsx-runtime',
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      })
    }

    return config
  },
})
