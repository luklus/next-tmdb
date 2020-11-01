export const tmdbConfig = {
  basePath: 'https://api.themoviedb.org/3',
  basePathPoster: 'https://image.tmdb.org/t/p/w342',
  headers: {
    Authorization: 'Bearer ' + process.env.TMDB_AUTH,
    'Content-Type': 'application/json',
  },
}
