import Link from 'next/link'
import cl from './CardCarousel.module.scss'

export const CardCarouselComponent = ({ data }) => {
  return (
    <Link
      href={{
        pathname: `/${data.type}/[id]`,
        query: { id: data.id },
      }}
    >
      <article className={cl.card}>
        <div className={cl.cardPoster}>
          <img alt="Poster" loading="lazy" src={data.imgs} />
        </div>
        <div className={cl.cardInfo}>
          <p>{data.name}</p>
          <p>{data.desc}</p>
        </div>
      </article>
    </Link>
  )
}
