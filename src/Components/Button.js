import React from "react";
import "./Button.css";

function ButtonComponent({ text, onClick }) {
  return (
    <button className="btn-efeito" onClick={onClick}>
      {text}
    </button>
  );
}

export default ButtonComponent; // Alterado para exportar ButtonComponent
