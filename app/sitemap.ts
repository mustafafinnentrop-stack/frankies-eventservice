import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://frankies-eventservice.de',
      lastModified: new Date('2026-04-24'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://frankies-eventservice.de/cocktailbar-lennestadt',
      lastModified: new Date('2026-04-24'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://frankies-eventservice.de/getraenkeservice-schuetzenfest',
      lastModified: new Date('2026-04-24'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://frankies-eventservice.de/hochzeit-sauerland',
      lastModified: new Date('2026-04-24'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://frankies-eventservice.de/eventservice-kreis-olpe',
      lastModified: new Date('2026-04-24'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]
}
