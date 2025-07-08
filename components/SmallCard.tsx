import Image from './Image'
import Link from './Link'
import { generateBlurDataURL } from './utils/image-placeholder'

const SmallCard = ({ title, description, imgSrc, href }) => (
  <div className="md max-w-[544px] p-3 md:w-1/3">
    <div
      className={`${
        imgSrc && 'h-full'
      } overflow-hidden rounded-md border-2 border-gray-200/60 dark:border-gray-700/60`}
    >
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={306}
              quality={50}
              placeholder={generateBlurDataURL(544, 306)}
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center md:h-36 lg:h-48"
            width={544}
            height={306}
            quality={50}
            placeholder={generateBlurDataURL(544, 306)}
          />
        ))}
      <div className="p-6">
        <h2 className="mb-3 line-clamp-3 leading-6 font-bold tracking-tight">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="prose mb-3 line-clamp-3 max-w-none text-sm text-gray-500 dark:text-gray-400">
          {description}
        </p>
        {href && (
          <Link
            href={href}
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-base leading-6 font-medium"
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
