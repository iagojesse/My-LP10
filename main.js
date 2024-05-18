
import React from "react";
import ContactForm from "./Components/ContactForm";
import ButtonComponent from "./Components/ButtonComponent"; // Alterado para ButtonComponent
import "./styles/App.css";

function App() {
  const handleButtonClick = (buttonName) => {
    console.log(`${buttonName} clicado`);
  };

  return React.createElement(
    "div",
    { className: "App" },
    React.createElement(ButtonComponent, { // Alterado para ButtonComponent
      text: "Contato",
      onClick: () => handleButtonClick("Contato"),
    }),
    React.createElement(ButtonComponent, { // Alterado para ButtonComponent
      text: "Portfolio",
      onClick: () => handleButtonClick("Portfolio"),
    }),
    React.createElement(ButtonComponent, { // Alterado para ButtonComponent
      text: "Curriculo",
      onClick: () => handleButtonClick("Curriculo"),
    }),
    React.createElement(ContactForm, null)
  );
}

export default App;
