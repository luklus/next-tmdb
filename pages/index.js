import { useState } from 'react'
import { appsConfig } from '../config/apps'
import { usePopular } from '../hooks/usePopular'
import { useTrending } from '../hooks/useTrending'
import { CardModel } from '../services/tmdb/models/CardModel'

import { CardComponent } from '../components/ui/card'
import {
  CarouselComponent,
  CarouselLoadComponent,
} from '../components/ui/carousel'
import { HeroComponent } from '../components/ui/hero'
import { LayoutComponent } from '../components/core/layout'
import { LeadComponent } from '../components/ui/lead'
import { SwitchComponent } from '../components/ui/switch'

import cl from '../styles/modules/Home.module.scss'

const HomePage = () => {
  const [popular, setPopular] = useState(appsConfig.switches.type[0].type)
  const [trending, setTrending] = useState(appsConfig.switches.period[0].type)

  const {
    data: dataPopular,
    isLoading: isLoadingPopular,
    isError: isErrorPopular,
  } = usePopular(popular)

  const {
    data: dataTrending,
    isLoading: isLoadingTrending,
    isError: isErrorTrending,
  } = useTrending(trending)

  const popularCarousel = dataPopular?.popular?.results.map((card) => (
    <CardComponent data={CardModel(card, popular)} key={card.id} />
  ))

  const trendingCarousel = dataTrending?.trending?.results.map((card) => (
    <CardComponent data={CardModel(card, card.media_type)} key={card.id} />
  ))

  return (
    <LayoutComponent>
      <HeroComponent small={true}>
        <div className={cl.homeHero}>
          <h1>
            what do you want to watch today <span>?</span>
          </h1>
        </div>
      </HeroComponent>

      <main className="wrap">
        <div className="part">
          <LeadComponent>popular</LeadComponent>

          <SwitchComponent
            elements={appsConfig.switches.type}
            selected={popular}
            onSelected={(selectedElement) => setPopular(selectedElement)}
          />

          {isLoadingPopular ? (
            <CarouselLoadComponent />
          ) : (
            <CarouselComponent>{popularCarousel}</CarouselComponent>
          )}
        </div>

        <div className="part">
          <LeadComponent>trending</LeadComponent>

          <SwitchComponent
            elements={appsConfig.switches.period}
            selected={trending}
            onSelected={(selectedElement) => setTrending(selectedElement)}
          />

          {isLoadingTrending ? (
            <CarouselLoadComponent />
          ) : (
            <CarouselComponent>{trendingCarousel}</CarouselComponent>
          )}
        </div>
      </main>
    </LayoutComponent>
  )
}

export default HomePage
