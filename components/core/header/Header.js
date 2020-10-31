import Link from 'next/link'
import { SearchComponent } from '../search'
import cl from './Header.module.scss'
import cn from 'classnames'

export const HeaderComponent = () => (
  <header className={cl.header}>
    <div className={cn('wrap', [cl.headerWrap])}>
      <nav>
        <Link href="/">
          <a className={cl.logo}>NextTMDB</a>
        </Link>
      </nav>
      <SearchComponent />
    </div>
  </header>
)
