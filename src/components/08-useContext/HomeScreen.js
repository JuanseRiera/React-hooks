import React, { useContext } from "react";
import { userContext } from "./UserContex";

export const HomeScreen = () => {
  const { value } = useContext(userContext);
  console.log(value);
  return (
    <>
      <h1>HomeScreen</h1>
      <hr />

      <pre>{JSON.stringify(value, null, 3)}</pre>
    </>
  );
};
