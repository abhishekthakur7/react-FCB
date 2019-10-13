import React from "react";
import { FcbLogo } from "../ui/fcb-logo.component";

const Footer = () => {
  return (
    <footer className="bck_blue">
      <div className="footer_logo">
        <FcbLogo width="70px" height="70px" link={true} linkTo="/" />
      </div>
      <div className="footer_discl">
        Made with ❤ by Abhishek Thakur. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
