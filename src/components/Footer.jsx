function Footer() {
  return (
    <footer className="footer">
      <div className="sponsors">
      <a href="https://koneharjuoy.fi/" target="_blank" rel="noopener noreferrer">
  <img
    src="assets/images/Sponsorit/koneharju.webp"
    style={{ height: '50px' }}
    alt="Koneharju Oy, Jylhä Racing tukija"
    className="sponsor-logo"
  />
</a>

<a href="https://play.google.com/store/apps/details?id=com.jususteri.pathto100&hl=fi_FI" target="_blank" rel="noopener noreferrer">
  <img
    src="assets/images/Sponsorit/Path to 100.webp"
    alt="Path to 100, Jylhä Racing tukija"
    style={{ height: '65px' }}
    className="sponsor-logo"
  />
</a>

<a href="https://www.autokorjaamohytonen.fi/" target="_blank" rel="noopener noreferrer">
  <img
    src="assets/images/Sponsorit/hytonen.webp"
    alt="Autokorjaamo Velj. Hytönen Oy, Jylhä Racing tukija"
    style={{ height: '50px' }}
    className="sponsor-logo"
  />
</a>


      </div>

      <p>© Jylhä Racing 2021–{new Date().getFullYear()}</p>

      <p>
        Sivuston toteuttanut{' '}
        <a href="https://www.linkedin.com/in/jere-luomanmäki" target="_blank" rel="noopener noreferrer">
          Jere Luomanmäki
        </a>
      </p>
    </footer>
  );
}

export default Footer;
