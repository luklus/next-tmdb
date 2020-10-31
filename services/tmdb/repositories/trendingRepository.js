import { tmdbConfig } from '../config'

export const trendingRepository = {
  getTrending: (period) =>
    fetch(`${tmdbConfig.basePath}/trending/all/${period}`, {
      headers: tmdbConfig.headers,
    }),
}
