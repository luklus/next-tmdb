import cl from './Lead.module.scss'

export const LeadDescComponent = ({ children }) => (
  <section className={cl.leadDesc}>
    <p>{children}</p>
  </section>
)
