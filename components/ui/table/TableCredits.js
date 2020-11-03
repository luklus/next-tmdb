import Link from 'next/link'
import cl from './Table.module.scss'

export const TableCreditsComponent = ({ credits }) => {
  const list = credits
    .sort((a, b) => b.date - a.date)
    .map((item, index) => (
      <Link
        href={{
          pathname: `/${item.type}/[id]`,
          query: { id: item.id },
        }}
        key={index}
      >
        <li className={cl.tableItem}>
          <div className={cl.tableItemImage}>
            <img alt="Poster" loading="lazy" src={item.imgs} width="64" />
          </div>
          <div className={cl.tableItemInfo}>
            <p>{item.date === '3000' ? 'in production' : item.date}</p>
            <p>{item.title}</p>
            <p>as {item.character}</p>
          </div>
        </li>
      </Link>
    ))

  return (
    <>
      <div className={cl.tableSummary}>total results: {list.length}</div>
      <ul>{list}</ul>
    </>
  )
}
