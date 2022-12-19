import logo from "../imgs/tierra-c-brand.png"
import './NavBar.css'

const Brand = (props) => (
  <>
    <a href="/" className="brand-app">
      <img src={logo} alt={props.title} height="auto" width="auto"/>
    </a>
  </>
);

export default Brand;
