import React, { useState, useCallback } from "react";
import { ShowIncrement } from "./ShowIncrement";
import "./memo.css";

export const CallbackHook = () => {
  const [state, setstate] = useState(10);

  const incrementar = useCallback(
    (a) => {
      setstate((counterActual) => counterActual + a);
    },
    [setstate]
  );

  return (
    <>
      <h1>Callback Hook {state}</h1>
      <hr />
      <ShowIncrement incrementar={incrementar} />
    </>
  );
};
