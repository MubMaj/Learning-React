import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const HeaderComponent = () => {

  
  const [btnName, setbtnName] = useState("Log IN");

  return (
    <header className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
