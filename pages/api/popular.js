import { tmdb } from '../../services/tmdb'

export default async (req, res) => {
  const resp = await tmdb.popularRepository.getPopular(req.query.type)
  const popular = await resp.json()

  res.status(200).json({ popular })
}
