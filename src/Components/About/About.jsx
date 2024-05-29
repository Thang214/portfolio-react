import React from "react";
import "./About.css";
import theme_parttern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile_img.svg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_parttern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>Hanh trinh tim kiem Thanh Cong khong bao gio la de dang ca</p>
            <p>Thu thach ty le thuan voi giac mo cua ban</p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "30%" }} /><span>50%</span>
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "35%" }} /><span>60%</span>
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "30%" }} /><span>50%</span>
            </div>
            <div className="about-skill">
              <p>Node JS</p>
              <hr style={{ width: "40%" }} /><span>70%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1+</h1>
          <p>YEARS OF EXPERINCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>PORJECT COMPLED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
