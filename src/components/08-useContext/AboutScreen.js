import React, { useContext } from "react";
import { userContext } from "./UserContex";

export const AboutScreen = () => {
  const { value, setvalue } = useContext(userContext);
  return (
    <>
      <h1>AboutScreen</h1>
      <hr />

      <pre>{JSON.stringify(value, null, 3)}</pre>

      <button
        className="btn btn-danger"
        onClick={() => {
          setvalue({});
        }}
      >
        Logout
      </button>
    </>
  );
};
