export const appsConfig = {
  seo: {
    defaultTitle: 'Next.js TMDB',
    defaultDescription: 'Next.js TMDB',
  },
  switches: {
    popular: [
      { name: 'movies', type: 'movie' },
      { name: 'tv shows', type: 'tv' },
      { name: 'pepole', type: 'person' },
    ],
    trending: [
      { name: 'today', type: 'day' },
      { name: 'this week', type: 'week' },
    ],
  },
}
