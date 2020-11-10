import { tmdbConfig } from '../config'

export const SearchModel = (searchResponse, type) => {
  switch (type) {
    case 'movie':
      return {}

    case 'person':
      return {}

    case 'tv':
      return {}

    default:
      return {
        movie: searchResponse.results.filter(
          (item) => item.media_type === 'movie'
        ),
        person: searchResponse.results.filter(
          (item) => item.media_type === 'person'
        ),
        tv: searchResponse.results.filter((item) => item.media_type === 'tv'),
      }
  }
}
