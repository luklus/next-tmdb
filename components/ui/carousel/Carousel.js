import cl from './Carousel.module.scss'

export const CarouselComponent = ({ children }) => {
  return <section className={cl.carousel}>{children}</section>
}
