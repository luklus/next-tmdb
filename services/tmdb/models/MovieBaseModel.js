import { tmdbConfig } from '../config'

export const MovieBaseModel = ({
  backdrop_path,
  budget,
  credits,
  genres,
  original_language,
  original_title,
  overview,
  poster_path,
  production_countries,
  release_date,
  revenue,
  runtime,
  tagline,
  title,
}) => ({
  baseInfo: {
    budget: budget
      ? budget.toLocaleString('en-US', {
          currency: 'USD',
          style: 'currency',
        })
      : 'no data',
    genres,
    productionCountries: production_countries,
    overview,
    poster: `${tmdbConfig.basePathPoster}${poster_path}`,
    revenue: revenue
      ? revenue.toLocaleString('en-US', {
          currency: 'USD',
          style: 'currency',
        })
      : 'no data',
  },
  cast: credits.cast,
  heroInfo: {
    backdrop: `${tmdbConfig.basePathBack}${backdrop_path}`,
    originalLanguage: original_language,
    releaseDate: new Date(release_date).toLocaleDateString('en-US', {
      year: 'numeric',
    }),
    runtime,
    tagline,
    title,
    titleOriginal: original_title,
  },
})
