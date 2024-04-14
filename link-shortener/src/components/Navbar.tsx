import "./navbar.css";
import logo from "../../../images/logo.svg";

function Navbar() {
  return (
    <div className="navbar">
      <div className="left">
        <img className="logo" src={logo} alt="logo" />
        <h4 className="header-text">Features</h4>
        <h4 className="header-text">Pricing</h4>
        <h4 className="header-text">Resources</h4>
      </div>
      <div className="right">
        <h4 className="header-text">Login</h4>
        <button className="sign-up-btn">Sign Up</button>
      </div>
    </div>
  );
}
export default Navbar;
