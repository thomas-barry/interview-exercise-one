import React, { useContext } from "react";

import FormContext from "./FormContext";

import "./SupportingText.css";

const SupportingText = ({ children }) => {
  const { hasFocus } = useContext(FormContext);
  return hasFocus ? (
    <div className="supportingText transition">{children}</div>
  ) : null;
};

export default SupportingText;
