import { tmdbConfig } from '../config'

export const TVBaseModel = ({
  backdrop_path,
  created_by,
  credits,
  episode_run_time,
  first_air_date,
  genres,
  last_air_date,
  name,
  origin_country,
  original_language,
  original_name,
  overview,
  poster_path,
  seasons,
}) => ({
  heroInfo: {
    backdrop: `${tmdbConfig.basePathBack}${backdrop_path}`,
    originalLanguage: original_language,
    firstAirDate: new Date(first_air_date).toLocaleDateString('en-US', {
      year: 'numeric',
    }),
    lastAirDate: new Date(last_air_date).toLocaleDateString('en-US', {
      year: 'numeric',
    }),
    runtime: episode_run_time,
    title: name,
    titleOriginal: original_name,
  },
  baseInfo: {
    creators: created_by,
    genres,
    originCountries: origin_country,
    overview,
    poster: `${tmdbConfig.basePathPoster}${poster_path}`,
    seasons,
  },
  cast: credits.cast,
})
