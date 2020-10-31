import { tmdb } from '../../services/tmdb'

export default async (req, res) => {
  const resp = await tmdb.trendingRepository.getTrending(req.query.period)
  const trending = await resp.json()

  res.status(200).json({ trending })
}
