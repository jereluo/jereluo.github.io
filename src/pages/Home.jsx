import heroImage from '/assets/images/Hero/hero.webp'
import './Home.css'


function Home() {
  return (
    <>
      <div className="blurred-background"></div>
      <img  src={heroImage}  alt="Hero preload"  fetchpriority="high"  loading="eager"  decoding="async"  style={{ display: 'none' }} />
     
      <section
        className="hero-section full-width"
        style={{
          backgroundImage: `url(${heroImage})`
        }}
      >
        <div className="hero-content">
            <h1 className="hero-title-text">JYLHÄ RACING</h1>
          <h2>Moottoriurheilua suurella sydämellä</h2>
          <div className="hero-buttons">
            <a href="#/gallery" className="hero-button">Katso kuvia</a>
            <a href="#/contact" className="hero-button">Ota yhteyttä</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
