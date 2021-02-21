import React, { useContext } from "react";
import { userContext } from "./UserContex";

export const LoginScreen = () => {
  const { setvalue } = useContext(userContext);
  console.log(setvalue);
  return (
    <>
      <h1>LoginScreen</h1>
      <hr />

      <button
        className="btn btn-info"
        onClick={() => {
          setvalue({
            id: 123,
            nombre: "Juanse",
          });
        }}
      >
        Login
      </button>
    </>
  );
};
