import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  // local State Variable
  const [btnName, setbtnName] = useState("Log IN");

  return (
    <header className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About Us</Link></li>
          <li><Link to='/contact'>Contact Us</Link></li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName === "Log IN"
                ? setbtnName("Log OUT")
                : setbtnName("Log IN");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </header>
  );
};

export default HeaderComponent;
