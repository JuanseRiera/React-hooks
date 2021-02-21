import React, { useState } from "react";
import { AppRouter } from "./AppRouter";
import { userContext } from "./UserContex";

export const MainApp = () => {
  const [value, setvalue] = useState({});
  return (
    <>
      <userContext.Provider value={{ value, setvalue }}>
        <AppRouter />
      </userContext.Provider>
    </>
  );
};
