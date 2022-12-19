import './NavBar.css'

const NavItem = ({href, children}) => 
  <li className="item-nav">
    <a href={href}>{children}</a>
  </li>

export default NavItem;
