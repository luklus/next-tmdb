import Link from 'next/link'
import cl from './Footer.module.scss'
import cn from 'classnames'

export const FooterComponent = () => (
  <footer className={cl.footer}>
    <div className={cn('wrap', [cl.footerWrap])}>
      <div className="copy">
        <p>api from tmdb</p>
        <p>copyright © 2020 - next-tmdb - all rights reserved</p>
      </div>
    </div>
  </footer>
)
