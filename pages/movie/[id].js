import Error from 'next/error'

import { appsConfig } from '../../config/apps'
import { MovieBaseModel } from '../../services/tmdb/models/MovieBase'
import { tmdb } from '../../services/tmdb'

import { LayoutComponent } from '../../components/core/layout'
import { HeroComponent } from '../../components/ui/hero'

import cl from '../../styles/modules/Movie.module.scss'

export const getServerSideProps = async ({ params }) => {
  const resp = await tmdb.movieRepository.getMovie(params.id)
  const erroCode = resp.status === 200 ? false : resp.status
  const movie = await resp.json()

  return {
    props: {
      erroCode,
      movie: MovieBaseModel(movie),
    },
  }
}

const MoviePage = ({ erroCode, movie }) => {
  if (erroCode) return <Error statusCode={erroCode} />

  return (
    <LayoutComponent
      title={`${appsConfig.seo.defaultTitle} | ${movie.heroInfo.title}`}
    >
      <HeroComponent background={movie.heroInfo.backdrop}>
        <div className={cl.movieHero}>
          <div className={cl.movieHeroInfo}>
            <h1 className="lead">{movie.heroInfo.title}</h1>
            <p>{movie.heroInfo.tagline}</p>
            <p>
              {movie.heroInfo.originalLanguage !== 'en' && (
                <span>{movie.heroInfo.titleOriginal}</span>
              )}
              <span>{movie.heroInfo.releaseDate}</span>
              <span>{movie.heroInfo.runtime}min</span>
            </p>
          </div>
        </div>
      </HeroComponent>
      <main className="wrap">
        <div className="part">
          <h1>Movie - WIP</h1>
        </div>
      </main>
    </LayoutComponent>
  )
}

export default MoviePage
