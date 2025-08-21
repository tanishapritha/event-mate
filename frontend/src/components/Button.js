import React from "react";
import "../styles/button.scss";

const Button = ({ children, onClick, type = "button" }) => {
  return (
    <button className="mnc-btn" onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
