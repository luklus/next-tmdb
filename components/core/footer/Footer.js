import Link from 'next/link'
import cl from './Footer.module.scss'
import cn from 'classnames'

export const FooterComponent = () => (
  <footer className={cl.footer}>
    <div className={cn('wrap', [cl.footerWrap])}>
      <div className="copy">
        <p>
          <a
            href="https://www.themoviedb.org"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src="/images/icons/tmdb.svg" alt="TMDB Logo" height="16" />
          </a>
        </p>
        <p>
          this product uses the TMDb API but is not endorsed or certified by
          TMDb
        </p>
        <p>copyright © 2020 - next-tmdb - all rights reserved</p>
      </div>
    </div>
  </footer>
)
