import React, { useEffect } from "react";
import { useForm } from "../../Hooks/useForm";
import "./effect.css";

export const SimpleFormWithCustomHook = () => {
  const { formState: state, changeInput } = useForm({
    nombre: "",
    email: "",
  });

  const { nombre, email } = state;

  useEffect(() => {
    console.log("Hola mundo");
  }, []); //Solo al principio

  useEffect(() => {
    console.log("Hola mundo2");
  }, [state]); //Cuando cambia cualquier valor del state

  useEffect(() => {
    console.log("Hola mundo2");
  }, [email]); //Cuando cambia el valor del email

  return (
    <>
      <h1>Simple form</h1>
      <hr />

      <div className="form-group row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Nombre"
            autoComplete="off"
            className="form-control"
            name="nombre"
            value={nombre}
            onChange={changeInput}
          />
        </div>

        <div className="col-6">
          <input
            type="text"
            placeholder="Email"
            autoComplete="off"
            className="form-control"
            name="email"
            value={email}
            onChange={changeInput}
          />
        </div>
      </div>
    </>
  );
};
