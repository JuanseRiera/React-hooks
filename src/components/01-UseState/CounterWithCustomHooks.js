import React from "react";
import { useCounter } from "../../Hooks/useCounter";
import "./CounterApp.css";

export const CounterWithCustomHooks = () => {
  const valorInicial = 15;
  const factor = 3;
  const { state: counter, incrementar, decrementar, reset } = useCounter(
    valorInicial
  );
  return (
    <>
      <h1>Counter {counter}</h1>
      <hr />

      <div className="row">
        <div className="col-12">
          <button
            className="btn btn-success"
            onClick={() => {
              incrementar(factor);
            }}
          >
            +{factor}
          </button>

          <button
            className="btn btn-success"
            onClick={() => {
              decrementar(factor);
            }}
          >
            -{factor}
          </button>

          <button
            className="btn btn-success"
            onClick={() => {
              reset();
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};
