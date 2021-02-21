import React, { useState } from "react";
import { MultipleCustomHooks } from "../03-examples/MultipleCustomHooks";
import "./FocusScreen.css";

export const RealExampleUseRef = () => {
  const [mostrar, setmostrar] = useState(false);

  return (
    <>
      <h1>Real example use ref</h1>
      <hr />

      {mostrar && (
        <div className="p-5">
          <MultipleCustomHooks />
        </div>
      )}

      <div className="mt-5">
        <button
          className="btn btn-info"
          onClick={() => {
            setmostrar(!mostrar);
          }}
        >
          Mostrar
        </button>
      </div>
    </>
  );
};
