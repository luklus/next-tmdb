import Link from 'next/link'
import cl from './Card.module.scss'

export const CardTableComponent = ({ data }) => {
  return (
    <Link
      href={{
        pathname: `/${data.type}/[id]`,
        query: { id: data.id },
      }}
    >
      <article className={cl.cardTable}>
        <div className={cl.cardTablePoster}>
          <img alt="Poster" loading="lazy" src={data.imgs} />
        </div>
        <div className={cl.cardTableInfo}>
          <p>{data.desc}</p>
          <p>{data.name}</p>
        </div>
      </article>
    </Link>
  )
}
