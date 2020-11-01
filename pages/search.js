import { useRouter } from 'next/router'

import { LayoutComponent } from '../components/core/layout'
import { HeroComponent } from '../components/ui/hero'

import cl from '../styles/modules/Search.module.scss'

const SearchPage = () => {
  const router = useRouter()

  return (
    <LayoutComponent>
      <HeroComponent small={true}>
        <div className={cl.searchHero}>
          <h1>
            search results for: <span>{router.query.q}</span>
          </h1>
        </div>
      </HeroComponent>
      <main className="wrap">
        <h1>Search - WIP</h1>
      </main>
    </LayoutComponent>
  )
}

export default SearchPage
