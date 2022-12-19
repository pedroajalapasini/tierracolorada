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
              <NavItem href="/ "text="Inicio" />
              <NavItem href="/Catalogo" text="Catálogo" />
              <NavItem href="/Salta"  text="Salta" />
              <NavItem href="/Jujuy"  text="Jujuy" />
              <NavItem href="/Tucumán"  text="Tucumán" />
              <NavItem href="/Iguazú" text="Iguazú" />
              <CartWidget amount={5}/>
            </ul>
        </nav>
      </div>
    </header>    
  );
}
