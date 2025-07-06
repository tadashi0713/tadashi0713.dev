import React from 'react'
import twemoji from '@twemoji/api'
import Image from '@/components/Image'

type TwemojiProps = {
  emoji: string
  alt?: string
  style?: React.CSSProperties
}

const Twemoji: React.FC<TwemojiProps> = ({ emoji, alt, style }) => {
  const codePoint = twemoji.convert.toCodePoint(emoji)
  const url = `https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/${codePoint}.svg`

  return (
    <Image
      src={url}
      alt={alt || emoji}
      width={24}
      height={24}
      style={{
        width: '1em',
        height: '1em',
        display: 'inline-block',
        verticalAlign: 'middle',
        position: 'relative',
        top: '-0.15em',
        ...style,
      }}
      loading="lazy"
    />
  )
}

export default Twemoji
