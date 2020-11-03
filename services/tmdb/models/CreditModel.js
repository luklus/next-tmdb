import { tmdbConfig } from '../config'

export const CreditModel = (credit, type) => {
  switch (type) {
    case 'acting':
      return {
        character: credit.character,
        date:
          credit.media_type === 'movie'
            ? credit?.release_date
              ? new Date(credit.release_date).toLocaleDateString('en-US', {
                  year: 'numeric',
                })
              : '3000'
            : credit?.first_air_date
            ? new Date(credit.first_air_date).toLocaleDateString('en-US', {
                year: 'numeric',
              })
            : '3000',
        id: credit.id,
        imgs: credit.poster_path
          ? `${tmdbConfig.basePathPoster}${credit.poster_path}`
          : '/images/icons/no-photos.svg',
        title: credit.media_type === 'movie' ? credit.title : credit.name,
        type: credit.media_type,
      }

    case 'crew':
    case 'directing':
    case 'production':
    case 'writing':
      return {
        character: credit.job,
        date:
          credit.media_type === 'movie'
            ? credit?.release_date
              ? new Date(credit.release_date).toLocaleDateString('en-US', {
                  year: 'numeric',
                })
              : '3000'
            : credit?.first_air_date
            ? new Date(credit.first_air_date).toLocaleDateString('en-US', {
                year: 'numeric',
              })
            : '3000',
        id: credit.id,
        imgs: credit.poster_path
          ? `${tmdbConfig.basePathPoster}${credit.poster_path}`
          : '/images/icons/no-photos.svg',
        title: credit.media_type === 'movie' ? credit.title : credit.name,
        type: credit.media_type,
      }

    default:
      return {
        type: 'nodata',
      }
  }
}
