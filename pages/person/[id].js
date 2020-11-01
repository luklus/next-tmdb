import { LayoutComponent } from '../../components/core/layout'
import { HeroComponent } from '../../components/ui/hero'

import cl from '../../styles/modules/Person.module.scss'

const PersonPage = () => {
  return (
    <LayoutComponent>
      <HeroComponent small={true}>
        <div className={cl.personHero}>
          <h1>Person</h1>
        </div>
      </HeroComponent>
      <main className="wrap">
        <h1>Person - WIP</h1>
      </main>
    </LayoutComponent>
  )
}

export default PersonPage
