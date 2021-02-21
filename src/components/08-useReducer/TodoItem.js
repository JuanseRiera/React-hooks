import React from "react";
import PropTypes from "prop-types";

export const TodoItem = ({ item, toggle, eliminar }) => {
  const { id, todo, done } = JSON.parse(item);
  return (
    <>
      <div className="card mb-3">
        <div className="card-body row">
          <div className="col-12 col-sm-8 my-auto">
            <h6
              className={done ? "text-decoration-line-through" : null}
              onClick={() => {
                toggle(id);
              }}
            >
              {todo}
            </h6>
          </div>
          <div className="col-12 col-sm-4 text-end">
            <button
              className="btn btn-danger ms-2"
              onClick={() => {
                eliminar(id);
              }}
            >
              Borrar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

TodoItem.propTypes = {
  item: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired,
  eliminar: PropTypes.func.isRequired,
};
