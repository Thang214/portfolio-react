import React from "react";
import "./Header.css";
import profile_img from "../../assets/profile_img.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";


const Header = () => {
  return (
    <div id="home" className="header">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Thang Duc,</span> frontend developer based in Viet Nam.
      </h1>
      <p>I'm a student at FPT Polytechnic, single.</p>
      <div className="header-action">
        <div className="header-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink></div>
        <div className="header-resume">My resume</div>
      </div>
    </div>
  );
};

export default Header;
