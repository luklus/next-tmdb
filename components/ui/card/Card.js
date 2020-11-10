import Link from 'next/link'
import cl from './Card.module.scss'

export const CardComponent = ({ data }) => {
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
          {data.character && <p>as {data.character}</p>}
        </div>
      </article>
    </Link>
  )
}
