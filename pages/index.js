import { useState } from 'react'
import { appsConfig } from '../config/apps'
import { useTrending } from '../hooks/useTrending'

import { CardCarouselComponent } from '../components/ui/card'
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
  const [trending, setTrending] = useState(appsConfig.switches.trending[0].type)
  const {
    trending: trendingData,
    isLoading: isLoadingTrending,
    isError,
  } = useTrending(trending)

  const trendingCarousel = trendingData?.trending?.results.map((card) => (
    <CardCarouselComponent key={card.id}></CardCarouselComponent>
  ))

  return (
    <LayoutComponent>
      <HeroComponent small={true}>
        <div className={cl.homeHero}>
          <h1>what do you want to see today?</h1>
        </div>
      </HeroComponent>
      <main className="wrap">
        <LeadComponent>trending</LeadComponent>
        <SwitchComponent
          elements={appsConfig.switches.trending}
          selected={trending}
          onSelected={(selectedElement) => setTrending(selectedElement)}
        ></SwitchComponent>
        {isLoadingTrending ? (
          <CarouselLoadComponent></CarouselLoadComponent>
        ) : (
          <CarouselComponent>{trendingCarousel}</CarouselComponent>
        )}
      </main>
    </LayoutComponent>
  )
}

export default HomePage
