import { useState } from 'react'
import Error from 'next/error'
import { useRouter } from 'next/router'

import { tmdb } from '../services/tmdb'
import { SearchModel } from '../services/tmdb/models/SearchModel'
import { CardModel } from '../services/tmdb/models/CardModel'

import { CardTableComponent } from '../components/ui/card'
import { HeroComponent } from '../components/ui/hero'
import { LayoutComponent } from '../components/core/layout'
import { LeadComponent } from '../components/ui/lead'
import { SwitchComponent } from '../components/ui/switch'

import cl from '../styles/modules/Search.module.scss'

export const getServerSideProps = async ({ query }) => {
  const resp = await tmdb.searchRepository.getSearch(query)
  const erroCode = resp.status === 200 ? false : resp.status
  const searchResults = await resp.json()

  return {
    props: {
      erroCode,
      searchResults,
    },
  }
}

const SearchPage = ({ erroCode, searchResults }) => {
  if (erroCode) return <Error statusCode={erroCode} />

  const router = useRouter()
  const searchData = SearchModel(searchResults, router.query.t)

  const switchSearchObiect = [
    { name: `movies (${searchData.movie.length})`, type: 'movie' },
    { name: `tv (${searchData.tv.length})`, type: 'tv' },
    { name: `people (${searchData.person.length})`, type: 'person' },
  ]

  const [switchSearch, setSwitchSearch] = useState(switchSearchObiect[0].type)

  const cardTable = searchData[switchSearch].map((card) => (
    <CardTableComponent data={CardModel(card, switchSearch)} key={card.id} />
  ))

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
        <div className="part">
          {searchResults?.results.length ? (
            <LeadComponent>
              total results: {searchResults.results.length}
            </LeadComponent>
          ) : (
            <LeadComponent>no results find</LeadComponent>
          )}
          <SwitchComponent
            elements={switchSearchObiect}
            selected={switchSearch}
            onSelected={(selectedElement) => setSwitchSearch(selectedElement)}
          />
          {cardTable}
        </div>
      </main>
    </LayoutComponent>
  )
}

export default SearchPage
