import React, { useRef } from "react";
import "./FocusScreen.css";

export const FocusScreen = () => {
  const inputRef = useRef();
  const handleClick = () => {
    inputRef.current.select();
  };

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input
        ref={inputRef}
        type="text"
        className="form-control mt-3"
        placeholder="Hola"
      />

      <button className="btn btn-secondary mt-3" onClick={handleClick}>
        Focus
      </button>
    </>
  );
};
