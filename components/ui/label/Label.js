import cl from './Label.module.scss'

export const LabelComponent = ({ children }) => (
  <div className={cl.label}>{children}</div>
)
