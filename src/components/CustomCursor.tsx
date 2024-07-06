import React, { useEffect, useState } from "react";
import "./style/CustomCursor.css";

interface CustomCursorProps {
  isVisible: boolean;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ isVisible }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMoveHandler = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${isVisible ? "visible" : ""}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      <div className="text">Explore</div>
    </div>
  );
};

export default CustomCursor;
