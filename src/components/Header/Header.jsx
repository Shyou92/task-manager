import Avatar from '../../images/me.jpg'

function Header () {
  return (
    <section className="header">
      <div className="header__logo"></div>
      {/* clicking on logo will open navbar */}
      <div className="header__userInfo">
        <span className="header__userInfo-name">Александр</span>
        <img src={Avatar} alt="user avatar" className="header__userInfo-avatar" /> 
        {/* clicking on photo will open user Info popup */}
      </div>
    </section>
  )
}

export default Header;