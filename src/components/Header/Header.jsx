import "./Header.css";

function Header() {
  return(
    <div className="header">
      <h1 className="header__title">ARC</h1>
      <div className="header__user">
        <p className="header__name"></p>
        <img src="" alt="Avatar of User" className="header__avatar" />
      </div>
    </div>
  )
}

export default Header;