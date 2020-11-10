import { useState } from 'react'
import cl from './Gallery.module.scss'
import { ModalComponent } from '../modal'

export const GalleryComponent = ({ gallery }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  const toggModal = (image, state) => {
    setSelectedImage(image)
    setModalOpen(state)
  }

  return (
    <div className={cl.gallery}>
      {modalOpen && (
        <ModalComponent toggOpen={() => toggModal(null, false)}>
          <img loading="lazy" src={selectedImage} />
        </ModalComponent>
      )}

      <div className={cl.galleryImages}>
        {gallery.map((image, index) => (
          <div key={index}>
            <img
              loading="lazy"
              src={image.img}
              onClick={() => toggModal(image.img, true)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
