import { useState } from 'react'
import Error from 'next/error'

import { appsConfig } from '../../config/apps'
import { CardCarouselModel } from '../../services/tmdb/models/CardCarousel'
import { PersonModel } from '../../services/tmdb/models/PersonModel'
import { tmdb } from '../../services/tmdb'
import { useCredits } from '../../hooks/useCredits'
import { useKnovnFor } from '../../hooks/useKnovnFor'

import { CardCarouselComponent } from '../../components/ui/card'
import {
  CarouselComponent,
  CarouselLoadComponent,
} from '../../components/ui/carousel'
import { HeroComponent } from '../../components/ui/hero'
import { LabelComponent } from '../../components/ui/label'
import { LayoutComponent } from '../../components/core/layout'
import { LeadComponent, LeadDescComponent } from '../../components/ui/lead'
import { SwitchComponent } from '../../components/ui/switch'
import {
  TableComponent,
  TableCreditsComponent,
} from '../../components/ui/table'

import cl from '../../styles/modules/Person.module.scss'

export const getServerSideProps = async ({ params }) => {
  const resp = await tmdb.personRepository.getPerson(params.id)
  const erroCode = resp.status === 200 ? false : resp.status
  const person = await resp.json()

  return {
    props: {
      erroCode,
      person: PersonModel(person),
    },
  }
}

const PersonPage = ({ erroCode, person }) => {
  if (erroCode) return <Error statusCode={erroCode} />

  const { creditsObiect, switchCredits } = useCredits(person.credits)

  const [credits, setCredits] = useState(switchCredits[0].type)

  const { knovnForArray } = useKnovnFor(person.credits)

  const knovnFor = knovnForArray.map((card) => (
    <CardCarouselComponent
      data={CardCarouselModel(card, card.media_type)}
      key={card.id}
    />
  ))

  console.log('hi', creditsObiect)

  return (
    <LayoutComponent title={`${appsConfig.seo.defaultTitle} | ${person.name}`}>
      <HeroComponent background={person.profile} onlyMobi={true}>
        <div className={cl.personHero}>
          <div className={cl.personHeroImage}>
            <img alt="Profile" loading="lazy" src={person.profile} />
          </div>
          <div className={cl.personHeroInfo}>
            <LabelComponent>{person.role}</LabelComponent>
            <h1 className="lead">{person.name}</h1>

            <div>
              <p className="lead">birthday</p>
              <p>{person.birthday}</p>
            </div>

            {person.deathdat && (
              <div>
                <p className="lead">birthday</p>
                <p>{person.birthday}</p>
              </div>
            )}

            <div>
              <p className="lead">place of birth</p>
              <p>{person.birthPlace}</p>
            </div>
          </div>
        </div>
      </HeroComponent>
      <main className="wrap">
        <div className="part">
          <LeadComponent>biography</LeadComponent>
          <LeadDescComponent>
            {person.biography || 'no data yet'}
          </LeadDescComponent>
        </div>

        <div className="part">
          <LeadComponent>known for</LeadComponent>

          {knovnForArray.length ? (
            <CarouselComponent>{knovnFor}</CarouselComponent>
          ) : (
            <CarouselLoadComponent />
          )}
        </div>

        <div className="part">
          <LeadComponent>full filmography</LeadComponent>

          <SwitchComponent
            elements={switchCredits}
            selected={credits}
            onSelected={(selectedElement) => setCredits(selectedElement)}
          />

          <TableComponent>
            <TableCreditsComponent credits={creditsObiect[credits]} />
          </TableComponent>
        </div>
      </main>
    </LayoutComponent>
  )
}

export default PersonPage
