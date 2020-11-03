import { useState } from 'react'

import cl from './Scroll.module.scss'

export const ScrollComponent = () => {
  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false)
    }
  }

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  window.addEventListener('scroll', checkScrollTop)

  return (
    <div
      className={cl.scroll}
      onClick={scrollTop}
      style={{ display: showScroll ? 'flex' : 'none' }}
    >
      <img alt="Scroll" src="/images/icons/scroll.svg" width="32" />
    </div>
  )
}
