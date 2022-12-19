import CartWidget from "../CartWidget/CartWidget";
import Brand from "./Brand";
import "./NavBar.css";
import NavItem from "./NavItem";

export default function NavBar() {
  return (
    <header>
      <div className="container-fluid">
        <nav className="navbar-app">
          <Brand
            src="../public/imgs/tierra-c-brand.png"
            title="logo de marca"
          />
            <ul className="container-item-nav">
              <NavItem href="/Inicio"> Inicio </NavItem>
              <NavItem href="/Catalogo">Catálogo</NavItem>
              <NavItem href="/Salta">Salta</NavItem>
              <NavItem href="/Jujuy">Jujuy</NavItem>
              <NavItem href="/Tucumán">Tucumán</NavItem>
              <NavItem href="/Iguazú"> Iguazú</NavItem>
              <CartWidget amount={5}/>
            </ul>
        </nav>
      </div>
    </header>    
  );
}
