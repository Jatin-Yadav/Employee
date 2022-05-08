import React from "react";
import "./header.css";

import Logo from "../../assets/logo.svg";
import { ReactComponent as Phone } from "../../assets/phone.svg";
import { ReactComponent as Email } from "../../assets/email.svg";

function header() {
  return (
    <div className="headwrapper">
      <div className="logo">
        <img src={Logo} alt="React Logo" />
      </div>
      <div className="connectinfo">
        <div className="contact">
          <Phone />
          +91-9340002156
        </div>
        <div className="email">
          <Email />
          info@bharatclaims.com
        </div>
      </div>
    </div>
  );
}

export default header;
