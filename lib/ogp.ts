import { getPlaiceholder } from 'plaiceholder'
import { Ogp } from 'types/Ogp'

export async function getBlurConvertedOgps(ogps): Promise<Ogp[]> {
  return await Promise.all(
    ogps.map(async (ogp) => {
      const { base64 } = await getPlaiceholder(ogp.imgSrc)
      return {
        title: ogp.title,
        description: ogp.description,
        imgSrc: ogp.imgSrc,
        blurDataURL: base64,
        href: ogp.href,
      }
    })
  )
}
