export const tmdbConfig = {
  basePath: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: 'Bearer ' + process.env.TMDB_AUTH,
    'Content-Type': 'application/json',
  },
}