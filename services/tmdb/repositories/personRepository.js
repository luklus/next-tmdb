import { tmdbConfig } from '../config'

export const personRepository = {
  getPerson: (id) =>
    fetch(`${tmdbConfig.basePath}/person/${id}`, {
      headers: tmdbConfig.headers,
    }),
}
