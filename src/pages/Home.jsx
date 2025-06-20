import heroImage from '/assets/images/Hero/hero.jpg'
import h1Image from '/assets/images/Hero/h1.png'
import './Home.css'


function Home() {
  return (
    <>
      <div className="blurred-background"></div>

      <section
        className="hero-section full-width"
        style={{
          backgroundImage: `url(${heroImage})`
        }}
      >
        <div className="hero-content">
          <img src={h1Image} alt="Jylhä Racing" className="hero-title-image" />
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
