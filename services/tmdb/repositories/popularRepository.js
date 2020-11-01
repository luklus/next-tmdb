import { tmdbConfig } from '../config'

export const popularRepository = {
  getPopular: (type) =>
    fetch(`${tmdbConfig.basePath}/${type}/popular`, {
      headers: tmdbConfig.headers,
    }),
}
