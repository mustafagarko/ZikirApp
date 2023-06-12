import React from "react";

const ButtonComponent = ({ functionClick, text, className }) => {
  return (
    <button
      className={className}
      onClick={() => {
        functionClick();
      }}
    >
      {text}
    </button>
  );
};

export default ButtonComponent;
