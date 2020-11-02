export const tmdbConfig = {
  basePath: 'https://api.themoviedb.org/3',
  basePathBack: 'https://image.tmdb.org/t/p/w780',
  basePathProfile: 'https://image.tmdb.org/t/p/h632',
  basePathPoster: 'https://image.tmdb.org/t/p/w185',
  headers: {
    Authorization: 'Bearer ' + process.env.TMDB_AUTH,
    'Content-Type': 'application/json',
  },
}
