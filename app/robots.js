import sitemap from "./sitemap";

export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: '',
      },
      sitemap: sitemap(),
    }
  }