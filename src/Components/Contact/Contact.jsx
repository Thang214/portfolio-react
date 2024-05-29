import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import { toast } from "react-toastify";

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "5fc39cd7-871d-4d17-ac06-1557c39a8a57");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      toast.success("Successful submission!")
      console.log("Success", res);
    }
  };


  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-sections">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            Cuộc đời là vô thường, vũ trụ này tồn tại trong sự chi phối của luật
            nhân quả, còn trong khía cạnh khoa học thì luật nhân quả có thể dễ
            hiểu là "Có làm thì mới có ăn"
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /> <p>thang234321@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" /> <p>+84924819542</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />{" "}
              <p>Căn số 13, khu nhà ở Vinhome Reverside</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="text" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea name="message" rows="8" placeholder="Enter your message" />
          <button type="submit" className="contact-submit">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
