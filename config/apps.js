export const appsConfig = {
  seo: {
    defaultTitle: 'Next.js TMDB',
    defaultDescription: 'Next.js TMDB',
  },
  switches: {
    credits: [
      { name: 'acting', type: 'acting' },
      { name: 'crew', type: 'crew' },
      { name: 'directing', type: 'directing' },
      { name: 'production', type: 'production' },
      { name: 'writing', type: 'writing' },
    ],

    period: [
      { name: 'today', type: 'day' },
      { name: 'this week', type: 'week' },
    ],

    type: [
      { name: 'movies', type: 'movie' },
      { name: 'tv shows', type: 'tv' },
      { name: 'pepole', type: 'person' },
    ],
  },
}
