import logo from '/assets/images/Hero/logo.png'

function SplashScreen() {
  return (
    <div className="splash-screen">
      <img src={logo} alt="Logo" className="splash-logo" />
    </div>
  )
}

export default SplashScreen