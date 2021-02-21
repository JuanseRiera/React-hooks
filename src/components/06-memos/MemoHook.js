import React, { useMemo, useState } from "react";
import { procesoPesado } from "../../helpers/procesoPesado";
import { useCounter } from "../../Hooks/useCounter";
import "./memo.css";

export const MemoHook = () => {
  const { counter, incrementar } = useCounter(5);

  const [state, setstate] = useState(false);

  const prosesoPesadoMemo = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <>
      <h1>MEMOHOOK</h1>
      <h1>
        Contador: <small>{counter}</small>
      </h1>
      <hr />

      <p>{prosesoPesadoMemo}</p>

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
