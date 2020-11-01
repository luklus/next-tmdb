import { tmdbConfig } from '../config'

export const CardCarouselModel = (cardResponse, type) => {
  switch (type) {
    case 'movie':
      return {
        desc: new Date(cardResponse.release_date).toLocaleDateString('en-US', {
          year: 'numeric',
        }),
        imgs: `${tmdbConfig.basePathPoster}${cardResponse.poster_path}`,
        name: cardResponse.title,
        type: 'movie',
      }

    case 'person':
      return {
        desc: cardResponse.known_for_department,
        imgs: `${tmdbConfig.basePathPoster}${cardResponse.profile_path}`,
        name: cardResponse.name,
        type: 'movie',
      }

    case 'tv':
      return {
        desc: new Date(cardResponse.first_air_date).toLocaleDateString(
          'en-US',
          {
            year: 'numeric',
          }
        ),
        imgs: `${tmdbConfig.basePathPoster}${cardResponse.poster_path}`,
        name: cardResponse.name,
        type: 'tv',
      }

    default:
      return {
        type: 'nodata',
      }
  }
}
