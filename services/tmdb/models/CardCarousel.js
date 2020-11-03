import { tmdbConfig } from '../config'

export const CardCarouselModel = (cardResponse, type) => {
  switch (type) {
    case 'movie':
      return {
        desc: new Date(cardResponse.release_date).toLocaleDateString('en-US', {
          year: 'numeric',
        }),
        id: cardResponse.id,
        imgs: cardResponse.poster_path
          ? `${tmdbConfig.basePathPoster}${cardResponse.poster_path}`
          : '/images/icons/no-photos.svg',
        name: cardResponse.title,
        type: 'movie',
      }

    case 'person':
      return {
        desc: cardResponse.known_for_department,
        imgs: cardResponse.profile_path
          ? `${tmdbConfig.basePathPoster}${cardResponse.profile_path}`
          : '/images/icons/no-photos.svg',
        id: cardResponse.id,
        name: cardResponse.name,
        type: 'person',
      }

    case 'tv':
      return {
        desc: new Date(cardResponse.first_air_date).toLocaleDateString(
          'en-US',
          {
            year: 'numeric',
          }
        ),
        id: cardResponse.id,
        imgs: cardResponse.poster_path
          ? `${tmdbConfig.basePathPoster}${cardResponse.poster_path}`
          : '/images/icons/no-photos.svg',
        name: cardResponse.name,
        type: 'tv',
      }

    default:
      return {
        type: 'nodata',
      }
  }
}
