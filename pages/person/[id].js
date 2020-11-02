import Error from 'next/error'
import { tmdb } from '../../services/tmdb'
import { PersonModel } from '../../services/tmdb/models/PersonModel'

import { LabelComponent } from '../../components/ui/label'
import { LayoutComponent } from '../../components/core/layout'
import { HeroComponent } from '../../components/ui/hero'

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

  return (
    <LayoutComponent>
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
          <h1>{person.name}</h1>
        </div>
      </main>
    </LayoutComponent>
  )
}

export default PersonPage
