import useSWR from 'swr'
import { fetcher } from '../helpers/fetcher'

export const usePopular = (type) => {
  const { data, error } = useSWR(`/api/popular?type=${type}`, fetcher)

  return {
    data,
    isError: error,
    isLoading: !error && !data,
  }
}
