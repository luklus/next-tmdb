import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/router'
import cl from './Search.module.scss'

export const SearchComponent = () => {
  const [search, setSearch] = useState('')
  const router = useRouter()

  const handleSearch = (event) => {
    if (event.key === 'Enter' && search.length >= 3) {
      event.preventDefault()

      router.push({
        pathname: '/search',
        query: { q: search, t: 'multi' },
      })

      setSearch('')
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (search.length >= 3) {
      router.push({
        pathname: '/search',
        query: { q: search, t: 'multi' },
      })

      setSearch('')
    }
  }

  return (
    <form
      autoComplete="off"
      className={cl.search}
      onSubmit={(event) => handleSubmit(event)}
    >
      <input
        placeholder="Find Movie, TV or People in TMDB"
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        onKeyDown={(event) => handleSearch(event)}
      />

      <button type="submit">
        <Image
          alt="Search"
          height={24}
          src="/images/icons/search.svg"
          width={24}
        />
      </button>
    </form>
  )
}
