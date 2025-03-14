import { getSitemap } from "@/lib/post"

export default async function sitemap() {
  const SiteData = await getSitemap()

  return [
    {
      url: process.env.BASE_DOMAIN,
      lastModified: new Date().toString(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${process.env.BASE_DOMAIN}/blogs`,
      lastModified: new Date().toString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...SiteData
  ]
}