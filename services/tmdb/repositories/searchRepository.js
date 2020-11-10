import { tmdbConfig } from '../config'

export const searchRepository = {
  getSearch: (query) =>
    fetch(
      `${tmdbConfig.basePath}/search/${query.t || 'multi'}?query=${query.q}`,
      {
        headers: tmdbConfig.headers,
      }
    ),
}
