import Error from 'next/error'

import { appsConfig } from '../../config/apps'
import { CardModel } from '../../services/tmdb/models/CardModel'
import { tmdb } from '../../services/tmdb'
import { TVBaseModel } from '../../services/tmdb/models/TVBaseModel'

import { CardComponent } from '../../components/ui/card'
import { CarouselComponent } from '../../components/ui/carousel'
import { LabelComponent } from '../../components/ui/label'
import { LayoutComponent } from '../../components/core/layout'
import { LeadComponent } from '../../components/ui/lead'
import { HeroComponent } from '../../components/ui/hero'

import cl from '../../styles/modules/TV.module.scss'

export const getServerSideProps = async ({ params }) => {
  const resp = await tmdb.tvRepository.getTV(params.id)
  const erroCode = resp.status === 200 ? false : resp.status
  const tv = await resp.json()

  return {
    props: {
      erroCode,
      tv: TVBaseModel(tv),
    },
  }
}

const TVPage = ({ erroCode, tv }) => {
  if (erroCode) return <Error statusCode={erroCode} />

  const castCarousel = tv.cast.map((card) => (
    <CardComponent data={CardModel(card, 'person')} key={card.id} />
  ))

  return (
    <LayoutComponent
      title={`${appsConfig.seo.defaultTitle} | ${tv.heroInfo.title}`}
    >
      <HeroComponent background={tv.heroInfo.backdrop}>
        <div className={cl.tvHero}>
          <div className={cl.tvHeroInfo}>
            <LabelComponent>tv series</LabelComponent>
            <h1 className="lead">{tv.heroInfo.title}</h1>
            <p>
              {tv.heroInfo.originalLanguage !== 'en' && (
                <span>{tv.heroInfo.titleOriginal}</span>
              )}
              <span>
                {tv.heroInfo.firstAirDate}{' '}
                {tv.heroInfo.lastAirDate === tv.heroInfo.firstAirDate
                  ? null
                  : `- ${tv.heroInfo.lastAirDate}`}
              </span>
              <span>
                {tv.heroInfo.runtime[0]}min{' '}
                {tv.heroInfo.runtime[1]
                  ? `- ${tv.heroInfo.runtime[0]}min`
                  : null}
              </span>
            </p>
          </div>
        </div>
      </HeroComponent>

      <main className="wrap">
        <div className="part">
          <div className={cl.tvBase}>
            <div>
              <img src={tv.baseInfo.poster} alt="Poster" />
            </div>
            <div>
              <div>
                {tv.baseInfo.genres.map((genre, index) => (
                  <LabelComponent key={index}>
                    {genre.name.toLowerCase()}
                  </LabelComponent>
                ))}
              </div>

              <div>
                <p className="lead">overview</p>
                <p>{tv.baseInfo.overview}</p>
              </div>

              <div>
                <p className="lead">creators</p>
                <p>
                  {tv.baseInfo.creators
                    .map((creator) => creator.name)
                    .join(', ')}
                </p>
              </div>

              <div>
                <p className="lead">origin countries</p>
                <p>{tv.baseInfo.originCountries.join(', ')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="part">
          <LeadComponent>cast</LeadComponent>
          <CarouselComponent>{castCarousel}</CarouselComponent>
        </div>

        <div className="part">
          <LeadComponent>seasons</LeadComponent>
        </div>
      </main>
    </LayoutComponent>
  )
}

export default TVPage
