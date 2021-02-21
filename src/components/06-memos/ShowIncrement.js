import React from "react";

export const ShowIncrement = React.memo(({ incrementar }) => {
  console.log("hola");
  return (
    <>
      <button
        className="btn btn-info"
        onClick={() => {
          incrementar(5);
        }}
      >
        Incrementar
      </button>
    </>
  );
});
