import { tmdbConfig } from '../config'

export const CardModel = (cardResponse, type) => {
  switch (type) {
    case 'movie':
      return {
        desc: new Date(cardResponse.release_date).toLocaleDateString('en-US', {
          year: 'numeric',
        }),
        id: cardResponse.id,
        imgs: cardResponse.poster_path
          ? `${tmdbConfig.basePathPoster}${cardResponse.poster_path}`
          : tmdbConfig.basePathEmpty,
        name: cardResponse.title,
        type: 'movie',
      }

    case 'person':
      return {
        character: cardResponse?.character ? cardResponse.character : null,
        desc: cardResponse.known_for_department,
        imgs: cardResponse.profile_path
          ? `${tmdbConfig.basePathPoster}${cardResponse.profile_path}`
          : tmdbConfig.basePathEmpty,
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
          : tmdbConfig.basePathEmpty,
        name: cardResponse.name,
        type: 'tv',
      }

    default:
      return {
        type: 'nodata',
      }
  }
}
