import { movieRepository } from './repositories/movieRepository'
import { popularRepository } from './repositories/popularRepository'
import { searchRepository } from './repositories/searchRepository'
import { trendingRepository } from './repositories/trendingRepository'

export const tmdb = {
  movieRepository,
  popularRepository,
  searchRepository,
  trendingRepository,
}
