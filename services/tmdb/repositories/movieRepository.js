import { tmdbConfig } from '../config'

export const movieRepository = {
  getMovie: (id) =>
    fetch(`${tmdbConfig.basePath}/movie/${id}?append_to_response=credits`, {
      headers: tmdbConfig.headers,
    }),
}
