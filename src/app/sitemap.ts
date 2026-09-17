import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://coeurs-sans-frontieres.cm';

  const routes = [
    '',
    '/a-propos',
    '/nos-actions',
    '/programmes',
    '/partenaires',
    '/nos-besoins',
    '/nous-soutenir',
    '/contact',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
