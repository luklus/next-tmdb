import { HeroComponent } from '../../components/ui/hero'
import { LayoutComponent } from '../../components/core/layout'

const MoviesPage = () => {
  return (
    <LayoutComponent>
      <HeroComponent small={true}></HeroComponent>
      <main className="wrap"></main>
    </LayoutComponent>
  )
}

export default MoviesPage
