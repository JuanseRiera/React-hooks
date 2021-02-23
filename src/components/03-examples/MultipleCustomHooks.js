import React from "react";
import { useCounter } from "../../Hooks/useCounter";
import { useFetch } from "../../Hooks/useFetch";
import "./MultipleCustomHooks.css";

export const MultipleCustomHooks = () => {
  const { counter, incrementar } = useCounter(1);
  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { quote, author } = !!data && data[0];

  return (
    <>
      <h1>Breaking Bad quotes</h1>
      <hr />

      {loading ? (
        <div className="mt-5 alert alert-info">Cargando información...</div>
      ) : (
        <>
          <div className="mt-5">
            <figure className="text-center">
              <blockquote className="blockquote">
                <p id="quote">{quote}</p>
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
        </>
      )}
    </>
  );
};
