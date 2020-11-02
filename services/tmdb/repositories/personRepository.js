import { tmdbConfig } from '../config'

export const personRepository = {
  getPerson: (id) =>
    fetch(
      `${tmdbConfig.basePath}/person/${id}?append_to_response=combined_credits`,
      {
        headers: tmdbConfig.headers,
      }
    ),
}
