import cl from './Hero.module.scss'
import cn from 'classnames'

export const HeroComponent = ({ background, children, small = false }) => (
  <section
    className={cn(cl.hero, { [cl.heroSmall]: small })}
    style={{
      backgroundImage: background ? `url(${background})` : null,
    }}
  >
    <div className={cl.heroWrap}>
      <div className="wrap">{children}</div>
    </div>
  </section>
)
