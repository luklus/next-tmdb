import { movieRepository } from './repositories/movieRepository'
import { personRepository } from './repositories/personRepository'
import { popularRepository } from './repositories/popularRepository'
import { searchRepository } from './repositories/searchRepository'
import { trendingRepository } from './repositories/trendingRepository'
import { tvRepository } from './repositories/tvRepository'

export const tmdb = {
  movieRepository,
  personRepository,
  popularRepository,
  searchRepository,
  trendingRepository,
  tvRepository,
}
