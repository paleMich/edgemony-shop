import './Header.css'

function Header(props){
  return <header className='Header'>
    <img src={props.logo} alt="edgemony-shop-logo" />
    <span>{props.name}</span>
  </header>
}

export default Header
