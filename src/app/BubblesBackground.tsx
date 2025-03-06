import React from "react";
import "./BubblesBackground.css";

const BubblesBackground: React.FC = () => {
  return (
    <div className="bubbles-background">
      {[...Array(10)].map((_, i) => (
        <div key={i} className="bubble"></div>
      ))}
    </div>
  );
};

export default BubblesBackground;
