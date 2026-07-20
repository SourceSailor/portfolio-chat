import React from "react";

const SuggestedButton = ({ onClick, btnText }) => {
  return (
    <button onClick={onClick} className="suggested-button text-sm">
      {btnText}
    </button>
  );
};

export default SuggestedButton;
