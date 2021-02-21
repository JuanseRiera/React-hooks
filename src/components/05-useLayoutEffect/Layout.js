import React, { useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../../Hooks/useCounter";
import { useFetch } from "../../Hooks/useFetch";
import "./Layout.css";

export const UseLayoutEffect = () => {
  const { counter, incrementar } = useCounter(1);
  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { quote, author } = !!data && data[0];

  const [state, setstate] = useState();
  const ref = useRef();
  useLayoutEffect(() => {
    setstate(ref.current.getBoundingClientRect());
  }, [quote]);

  return (
    <>
      <h1>UseLayoutEffect</h1>
      <hr />
      <>
        <div className="mt-5">
          <figure className="text-center">
            <blockquote className="blockquote">
              <p ref={ref}>{quote}</p>
            </blockquote>
            <figcaption className="blockquote-footer">{author}</figcaption>
          </figure>
        </div>
        <div className="mt-3 text-end">
          <button
            className="btn btn-info"
            onClick={() => {
              incrementar(1);
            }}
          >
            Siguiente quote
          </button>
        </div>

        <div className="mt-5">
          <p>{JSON.stringify(state)}</p>
        </div>
      </>
    </>
  );
};
