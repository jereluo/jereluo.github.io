import { useState, useEffect } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { dbFirestore } from '/firebase'
import './Gallery.css'

const GALLERY_CONFIG = [
  { id: 1, category: 'KevatSlalom2023', title: 'XXX AKU Kevät23', thumbnailTitle: 'ks23' },
  { id: 2, category: 'SyysSlalom2022', title: 'XXVI AKU Syys22', thumbnailTitle: 'ss22' },
  { id: 3, category: 'Sekalaiset', title: 'Sekalaisia kuvia', thumbnailTitle: 'seka' },
]

function Gallery() {
  const [thumbnails, setThumbnails] = useState([])
  const [events, setEvents] = useState([])
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    const fetchThumbnails = async () => {
      try {
        const q = query(collection(dbFirestore, 'images'), where('category', '==', 'Thumbnails'))
        const snapshot = await getDocs(q)
        const thumbs = snapshot.docs.map(doc => doc.data())

        // Esilataa kuvat
        thumbs.forEach(t => {
          const img = new Image()
          img.src = t.url
        })

        const eventThumbs = GALLERY_CONFIG.map(config => {
          const thumb = thumbs.find(t => t.title === config.thumbnailTitle)
          return {
            id: config.id,
            title: config.title,
            category: config.category,
            thumbnail: thumb?.url || '',
          }
        })

        setThumbnails(thumbs)
        setEvents(eventThumbs)
      } catch (error) {
        console.error("Virhe haettaessa thumbnail-kuvia:", error)
      }
    }

    fetchThumbnails()
  }, [])

  const openPopup = async (eventConfig) => {
    setSelectedEvent(null)
    setSelectedImageIndex(0)
    setIsFullscreen(false)

    try {
      const q = query(collection(dbFirestore, 'images'), where('category', '==', eventConfig.category))
      const snapshot = await getDocs(q)
      const images = snapshot.docs.map(doc => doc.data().url)

      const thumb = thumbnails.find(t => t.title === GALLERY_CONFIG.find(g => g.category === eventConfig.category)?.thumbnailTitle)

      setSelectedEvent({
        id: eventConfig.id,
        title: eventConfig.title,
        thumbnail: thumb?.url || '',
        images,
      })
    } catch (error) {
      console.error("Virhe haettaessa kuvia:", error)
    }
  }

  const closePopup = () => {
    setSelectedEvent(null)
    setIsFullscreen(false)
  }

  const nextImage = () => {
    setSelectedImageIndex(prev =>
      prev + 1 < selectedEvent.images.length ? prev + 1 : 0
    )
  }

  const prevImage = () => {
    setSelectedImageIndex(prev =>
      prev - 1 >= 0 ? prev - 1 : selectedEvent.images.length - 1
    )
  }

  const toggleFullscreen = () => {
    setIsFullscreen(prev => !prev)
  }

  return (
    <section className="gallery-section">
      <h1 className="gallery-title">Kuvagalleria</h1>
      <p className="gallery-description">
        Kuvia kisoista ja kulisseista. Päivitämme galleriaa aika ajoin.
      </p>

      <div className="gallery-grid">
        {events.map(event => (
          <div
            key={event.id}
            className="thumbnail-wrapper"
            onClick={() => openPopup(event)}
          >
            <h3 className="thumbnail-title">{event.title}</h3>
            {event.thumbnail && (
              <img
                src={event.thumbnail}
                alt={event.title}
                className="thumbnail"
                loading="lazy"
              />
            )}
          </div>
        ))}
      </div>

      {selectedEvent && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={e => e.stopPropagation()}>
            <button className="popup-close" onClick={closePopup}>
              &times;
            </button>
            <h2 className="popup-title">{selectedEvent.title}</h2>
            <img
              src={selectedEvent.images[selectedImageIndex]}
              alt={`${selectedEvent.title} kuva ${selectedImageIndex + 1}`}
              className={`popup-image ${isFullscreen ? 'fullscreen-image' : ''}`}
              onClick={toggleFullscreen}
              loading="eager"
            />

            {selectedImageIndex + 1 < selectedEvent.images.length && (
              <link
                rel="preload"
                as="image"
                href={selectedEvent.images[selectedImageIndex + 1]}
              />
            )}

            {!isFullscreen && (
              <div className="popup-buttons">
                <button onClick={prevImage} className="popup-button">Edellinen</button>
                <button onClick={nextImage} className="popup-button">Seuraava</button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
