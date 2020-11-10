import Error from 'next/error'

import { appsConfig } from '../../config/apps'
import { CardModel } from '../../services/tmdb/models/CardModel'
import { MovieBaseModel } from '../../services/tmdb/models/MovieBaseModel'
import { tmdb } from '../../services/tmdb'

import { CardComponent } from '../../components/ui/card'
import { CarouselComponent } from '../../components/ui/carousel'
import { HeroComponent } from '../../components/ui/hero'
import { LabelComponent } from '../../components/ui/label'
import { LayoutComponent } from '../../components/core/layout'
import { LeadComponent } from '../../components/ui/lead'

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

  const castCarousel = movie.cast.map((card) => (
    <CardComponent data={CardModel(card, 'person')} key={card.id} />
  ))

  return (
    <LayoutComponent
      title={`${appsConfig.seo.defaultTitle} | ${movie.heroInfo.title}`}
    >
      <HeroComponent background={movie.heroInfo.backdrop}>
        <div className={cl.movieHero}>
          <div className={cl.movieHeroInfo}>
            <LabelComponent>movie</LabelComponent>
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
          <div className={cl.movieBase}>
            <div>
              <img src={movie.baseInfo.poster} alt="Poster" />
            </div>
            <div>
              <div>
                {movie.baseInfo.genres.map((genre, index) => (
                  <LabelComponent key={index}>
                    {genre.name.toLowerCase()}
                  </LabelComponent>
                ))}
              </div>

              <div>
                <p className="lead">overview</p>
                <p>{movie.baseInfo.overview}</p>
              </div>

              <div>
                <p className="lead">production countries</p>
                <p>
                  {movie.baseInfo.productionCountries
                    .map((country) => country.name)
                    .join(', ')}
                </p>
              </div>

              <div>
                <p className="lead">box office</p>
                <p>budget: {movie.baseInfo.budget}</p>
                <p>revenue: {movie.baseInfo.revenue}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="part">
          <LeadComponent>cast</LeadComponent>
          <CarouselComponent>{castCarousel}</CarouselComponent>
        </div>
      </main>
    </LayoutComponent>
  )
}

export default MoviePage
