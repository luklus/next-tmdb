import { useEffect } from 'react'
import cl from './Modal.module.scss'

export const ModalComponent = ({ children, toggOpen }) => {
  const closeOnEsc = (e) => {
    if (e.code === 'Escape') return toggOpen()
  }

  useEffect(() => {
    document.addEventListener('keyup', closeOnEsc)
    return () => document.removeEventListener(`keyup`, closeOnEsc)
  })

  return (
    <div className={cl.modal}>
      <div className={cl.modalChildren}>
        <div className={cl.modalClose} onClick={() => toggOpen()}>
          <img
            alt="Close"
            height="32"
            src="/images/icons/close.svg"
            width="32"
          />
        </div>
        {children}
      </div>
    </div>
  )
}
