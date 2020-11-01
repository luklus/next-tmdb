import { tmdbConfig } from '../config'

export const movieRepository = {
  getMovie: (id) =>
    fetch(`${tmdbConfig.basePath}/movie/${id}`, {
      headers: tmdbConfig.headers,
    }),
}
