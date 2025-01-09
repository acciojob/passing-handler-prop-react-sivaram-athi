import React, { useState } from "react";

const Selection = ({ nextBackground }) => {
  const [style, setStyle] = useState({});

  // Function to change the background color of the div when clicked
  const changeColor = () => {
    setStyle({ background: nextBackground.background });
  };

  return (
    <div
      onClick={changeColor}
      style={{
        ...style,
        border: "2px solid #FFF",
        width: "400px",
        height: "400px",
        cursor: "pointer", // Add a pointer cursor to indicate it is clickable
      }}
    >
      <div style={{ textAlign: "center", color: "#FFF" }}>
        <h2>Selection</h2>
      </div>
    </div>
  );
};

export default Selection;
