import cl from './Table.module.scss'

export const TableComponent = ({ children }) => (
  <section className={cl.tableWrap}>{children}</section>
)
