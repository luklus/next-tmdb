import { LayoutComponent } from '../../components/core/layout'
import { HeroComponent } from '../../components/ui/hero'

import cl from '../../styles/modules/TV.module.scss'

const TVPage = () => {
  return (
    <LayoutComponent>
      <HeroComponent small={true}>
        <div className={cl.tvHero}>
          <h1>TV</h1>
        </div>
      </HeroComponent>
      <main className="wrap">
        <h1>TV - WIP</h1>
      </main>
    </LayoutComponent>
  )
}

export default TVPage
