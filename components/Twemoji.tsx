import React, { memo } from 'react'
import twemoji from '@twemoji/api'

const Twemoji = ({ emoji }) => (
  <span
    dangerouslySetInnerHTML={{
      __html: twemoji.parse(emoji, {
        folder: 'svg',
        ext: '.svg',
      }),
    }}
  />
)

export default memo(Twemoji)
