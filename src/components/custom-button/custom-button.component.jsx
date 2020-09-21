import React from "react";
import "./custom-button.styles.scss";

// i.e putting this into sign-in.component ... "Sign In" becomes rendered children. otherProps is type and value attribute
const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button
    className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
