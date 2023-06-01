import { getPlaiceholder } from 'plaiceholder'
import { Ogp } from 'types/Ogp'

export async function getBlurConvertedOgps(ogps): Promise<Ogp[]> {
  return await Promise.all(
    ogps.map(async (ogp) => {
      const buffer = await fetch(ogp.imgSrc).then(async (res) =>
        Buffer.from(await res.arrayBuffer())
      )
      const { base64 } = await getPlaiceholder(buffer)
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
