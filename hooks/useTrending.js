import useSWR from 'swr'
import { fetcher } from '../helpers/fetcher'

export const useTrending = (period) => {
  const { data, error } = useSWR(`/api/trending?period=${period}`, fetcher)

  return {
    isError: error,
    isLoading: !error && !data,
    trending: data,
  }
}
