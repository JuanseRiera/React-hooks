import React, { useState } from "react";
import { useCounter } from "../../Hooks/useCounter";
import { Small } from "./Small";
import "./memo.css";

export const Memorize = () => {
  const { counter, incrementar } = useCounter(10);

  const [state, setstate] = useState(false);
  return (
    <>
      <h1>
        Contador: <Small value={counter} />
      </h1>
      <hr />

      <button
        className="btn btn-info"
        onClick={() => {
          incrementar(1);
        }}
      >
        +1
      </button>

      <button
        className="btn btn-success ms-2"
        onClick={() => {
          setstate(!state);
        }}
      >
        Show/Hide {state}
      </button>
    </>
  );
};
