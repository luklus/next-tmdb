import { tmdbConfig } from '../config'

export const tvRepository = {
  getTV: (id) =>
    fetch(`${tmdbConfig.basePath}/tv/${id}?append_to_response=credits`, {
      headers: tmdbConfig.headers,
    }),
}
