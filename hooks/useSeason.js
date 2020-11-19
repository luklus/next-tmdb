import useSWR from 'swr'
import { fetcher } from '../helpers/fetcher'

export const useSeason = (tvID, seasonNumber) => {
  const { data, error } = useSWR(
    `/api/season?tvID=${tvID}&seasonNumber=${seasonNumber}`,
    fetcher
  )

  return {
    data,
    isError: error,
    isLoading: !error && !data,
  }
}
