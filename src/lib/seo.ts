export function getSeoHead({
  title,
  description,
  url,
  keywords,
  image,
}: {
  title: string
  description: string
  url: string
  keywords: string
  image?: string
}) {
  const metaTitle = title ? `${title} | Ilham Wahabi` : 'Ilham Wahabi'
  const metaUrl = `https://ilhamwahabi.com${url}`
  const metaKeywords = `ilhamwahabi,${keywords}`
  const metaImage =
    image || 'https://i.ibb.co/6mzTs13/Google-Play-Header.png'

  return {
    meta: [
      { title: metaTitle },
      { property: 'og:title', content: metaTitle },
      { name: 'twitter:title', content: metaTitle },
      { name: 'application-name', content: metaTitle },
      { name: 'apple-mobile-web-app-title', content: metaTitle },
      { name: 'description', content: description },
      { property: 'og:description', content: description },
      { name: 'twitter:description', content: description },
      { property: 'og:url', content: metaUrl },
      { name: 'twitter:url', content: metaUrl },
      { name: 'keywords', content: metaKeywords },
      { property: 'og:image', content: metaImage },
      { name: 'twitter:image', content: metaImage },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:creator', content: '@ilhamwahabigx' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'ilhamwahabi' },
    ],
    links: [{ rel: 'canonical', href: metaUrl }],
  }
}
