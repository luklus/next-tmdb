import { tmdb } from '../../services/tmdb'

export default async (req, res) => {
  const resp = await tmdb.tvRepository.getTVSeason(
    req.query.tvID,
    req.query.seasonNumber
  )
  const season = await resp.json()

  res.status(200).json({ season })
}
