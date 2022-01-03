import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SideBar from "../sideBar/SideBar";
import p1 from "./p1.jpg";
const Header = () => {
  return (
    <React.Fragment>
      <div className="Header-main-cont1">
        <div className="Header-main-fabar">
          {/* Sidebar Component */}
          <SideBar className="sideBar" />
          Menu
        </div>
        <div className="Header-main-h2">
          <img src={p1} href="#" className="Header-main-img" />
          <div>
            {/* Company Name */}
            <Link to="/" style={{ color: "black", textDecoration: "none" }}>
              <h3 style={{fontSize:"1.5rem"}}>inshorts</h3>
            </Link>
            <p className="Header-main-h2-p">Stay informed.</p>
          </div>
        </div>
        {/* Hidden Element */}
        <div className="Header-main-hidden">
          <h2>blah blah</h2>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Header;
