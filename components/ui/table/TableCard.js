import Link from 'next/link'
import cl from './Table.module.scss'

export const TableCardComponent = ({ data }) => {
  const item = (
    <Link
      href={{
        pathname: `/${data.type}/[id]`,
        query: { id: data.id },
      }}
    >
      <li className={cl.tableItem}>
        <div className={cl.tableItemImage}>
          <img alt="Poster" loading="lazy" src={data.imgs} width="64" />
        </div>
        <div className={cl.tableItemInfo}>Hello</div>
      </li>
    </Link>
  )

  return { item }
}
