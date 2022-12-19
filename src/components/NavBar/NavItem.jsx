import './NavBar.css'

const NavItem = ({href, text}) => 
  <li className="item-nav">
    <a href={href}>{text}</a>
  </li>

export default NavItem;
