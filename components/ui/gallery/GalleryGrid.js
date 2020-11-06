import cl from './GalleryGrid.module.scss'

export const GalleryGridComponent = ({ children }) => (
  <div className={cl.galleryGrid}>{children}</div>
)
