import cl from './Hero.module.scss'
import cn from 'classnames'

export const HeroComponent = ({ children, small = false }) => (
  <section className={cn(cl.hero, { [cl.heroSmall]: small })}>
    <div className="wrap">{children}</div>
  </section>
)
