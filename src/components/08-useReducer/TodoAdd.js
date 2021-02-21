import React from "react";
import PropTypes from "prop-types";
import { useForm } from "../../Hooks/useForm";

export const TodoAdd = ({ guardarTarea }) => {
  const { formState, changeInput, reset } = useForm({
    todoInput: "",
  });

  const submit = (e) => {
    e.preventDefault();
    guardarTarea({
      id: Math.round(Math.random() * 100000),
      todo: formState.todoInput,
      done: false,
    });
    reset();
  };
  return (
    <>
      <form onSubmit={submit} className="text-end">
        <input
          type="text"
          className="form-control"
          placeholder="Ingrese su tarea por hacer..."
          name="todoInput"
          autoComplete="off"
          onChange={changeInput}
          value={formState.todoInput}
        />
      </form>
    </>
  );
};

TodoAdd.propTypes = {
  guardarTarea: PropTypes.func.isRequired,
};
