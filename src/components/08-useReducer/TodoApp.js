import React, { useEffect, useReducer } from "react";
import { TodoItem } from "./TodoItem";
import { todoReducer } from "./todoReducer";
import "./reducer.css";
import { TodoAdd } from "./TodoAdd";

export const TodoApp = () => {
  const init = () => {
    return JSON.parse(localStorage.getItem("tareas")) || [];
  };

  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const guardarTarea = (todo) => {
    let actionAgregar = {
      type: "agregar",
      payload: todo,
    };
    dispatch(actionAgregar);
  };

  const toggle = (id) => {
    let actiontoggle = {
      type: "toggle",
      payload: id,
    };
    dispatch(actiontoggle);
  };

  const eliminar = (id) => {
    let actionEliminar = {
      type: "eliminar",
      payload: id,
    };
    dispatch(actionEliminar);
  };

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <div className="row">
        <div className="col-12 col-md-4 my-auto">
          <h1>TodoApp</h1>
        </div>
        <div className="col-12 col-md-8 my-auto">
          <TodoAdd guardarTarea={guardarTarea} />
        </div>
      </div>

      <hr />

      <div className="row">
        <div className="col-12 p-3">
          {todos.map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                item={JSON.stringify(todo)}
                toggle={toggle}
                eliminar={eliminar}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
