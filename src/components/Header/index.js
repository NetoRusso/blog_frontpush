/* eslint-disable jsx-a11y/anchor-is-valid */
import logosvg from "../../svg/logo.svg";

const Header = () => {

  const descLogo = "Essa é a logo do blog"

  return (
    <>
      <header className="flex-space-between">
        <div className="logo">
          <img src={logosvg} alt={descLogo} />
        </div>
        <div className="search">
          <input className="input-search" type="text" name="search"  />
        </div>
        <ul className="menu">
          <li><a href="#" className="nav-link">Categories</a></li>
          <li><a href="#" className="nav-link">About</a></li>
          <li><a href="#" className="nav-link">Contact</a></li>
        </ul>
      </header>
    </>
  )
}

export default Header;
