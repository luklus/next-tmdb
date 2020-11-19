import { tmdbConfig } from '../config'

export const tvRepository = {
  getTV: (id) =>
    fetch(`${tmdbConfig.basePath}/tv/${id}?append_to_response=credits`, {
      headers: tmdbConfig.headers,
    }),
  getTVSeason: (tvID, seasonNumber) =>
    fetch(`${tmdbConfig.basePath}/tv/${tvID}/season/${seasonNumber}`, {
      headers: tmdbConfig.headers,
    }),
}
