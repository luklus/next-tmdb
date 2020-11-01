import { tmdbConfig } from '../config'

export const MovieBaseModel = ({
  backdrop_path,
  budget,
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
