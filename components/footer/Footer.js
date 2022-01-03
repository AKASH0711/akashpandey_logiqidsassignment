import React from "react";
import "./footer.css";
import p1 from "./p1.jpg";
const Footer = () => {
  return (
    <React.Fragment>
      <div className="Footer-main-cont1 container-fluid">
      {/* Footer Company Logo Img */}
        <div>
          <div className="Footer-main-cont1-div1 container">
            <img src={p1} className="Footer-main-img" />
            <h1 className="Footer-main-h1">Inshorts</h1>
          </div>
          <div className="Footer-main-cont1-div2 container">
            <p className="Footer-main-cont1-div2-p1">Inshorts</p>
            <p className="Footer-main-cont1-div2-p2">
              medialabs pvt. ltd. ©COPYRIGHT 2021
            </p>
          </div>
        </div>
        <div className="Footer-main-cont1-1">
          <div className="Footer-main-cont1-div3 container">
            <h1 className="Footer-main-h1">Contact Us</h1>
          </div>
          {/* Footer Vertical Bar */}
          <div class="vertical"></div>
          <div className="Footer-main-cont1-div4 container">
            <p className="Footer-main-cont1-div4-p1">Terms & Conditions</p>
            <p className="Footer-main-cont1-div4-p2">Privacy Policy</p>
          </div>
          <div></div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Footer;
