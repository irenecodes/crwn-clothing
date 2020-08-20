import React from "react";
import "./custom-button.styles.scss";

// i.e putting this into sign-in.component ... "Sign In" becomes rendered children. otherProps is type and value attribute
const CustomButton = ({ children, ...otherProps }) => (
  <button className="custom-button" {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
