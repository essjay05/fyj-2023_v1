import './Header.css'

const Header = ({ currentPageName }) => {
  return (
    <header>
      <h1>{ currentPageName }</h1>
    </header>
  )
}

export default Header