import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnHeaderName, setBtnHeaderName] = useState("Login");
  return (
    <div className="header">
      <img className="logo" src={LOGO_URL} alt="company logo" />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="login-btn"
            onClick={() => {
              btnHeaderName === "Login"
                ? setBtnHeaderName("Logout")
                : setBtnHeaderName("Login");
            }}
          >
            {btnHeaderName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
