import toBase64 from '@/lib/utils/toBase64'
import Image from './Image'
import Link from './Link'
import LinesEllipsis from 'react-lines-ellipsis'
import shimmer from '@/lib/shimmer'

const SmallCard = ({ title, description, imgSrc, href }) => (
  <div className="p-3 md:w-1/3 md max-w-[544px]">
    <div
      className={`${
        imgSrc && 'h-full'
      } overflow-hidden border-2 border-gray-200 rounded-md border-opacity-60 dark:border-gray-700`}
    >
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center lg:h-48 md:h-36"
              width={544}
              height={306}
              quality={50}
              placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(544, 306))}`}
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center lg:h-48 md:h-36"
            width={544}
            height={306}
            quality={50}
            placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(544, 306))}`}
          />
        ))}
      <div className="p-4">
        <h2 className="mb-3 font-bold leading-6 tracking-tight">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              <LinesEllipsis text={title} maxLine="3" ellipsis="..." trimRight basedOn="letters" />
            </Link>
          ) : (
            <LinesEllipsis text={title} maxLine="3" ellipsis="..." trimRight basedOn="letters" />
          )}
        </h2>
        <span className="mb-3 prose text-gray-500 max-w-none text-sm dark:text-gray-400">
          <LinesEllipsis
            text={description}
            maxLine="3"
            ellipsis="..."
            trimRight
            basedOn="letters"
          />
        </span>
        {href && (
          <Link
            href={href}
            className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Link to ${title}`}
          >
            Learn more &rarr;
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default SmallCard
