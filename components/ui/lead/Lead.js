import cl from './Lead.module.scss'

export const LeadComponent = ({ children }) => (
  <section className={cl.lead}>
    <h2>{children}</h2>
  </section>
)
