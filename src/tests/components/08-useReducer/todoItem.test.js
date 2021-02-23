import React from "react";
import { shallow } from "enzyme";

import { TodoItem } from "../../../components/08-useReducer/TodoItem";
import { demoTodo } from "../../fixtures/demoTodos";

describe("Prubas del componente todoItem", () => {
  const item = demoTodo[0];
  const toggle = jest.fn();
  const eliminar = jest.fn();
  const wrapper = shallow(
    <TodoItem item={JSON.stringify(item)} toggle={toggle} eliminar={eliminar} />
  );
  test("Deberia de cargar correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Deberia de llamarse a la funcion eliminar", () => {
    wrapper.find("button").simulate("click");
    expect(eliminar).toHaveBeenCalledTimes(1);
    expect(eliminar).toHaveBeenCalledWith(item.id);
  });

  test("Deberia de llamarse a la funcion toggle", () => {
    wrapper.find("h6").simulate("click");
    expect(toggle).toHaveBeenCalledTimes(1);
    expect(toggle).toHaveBeenCalledWith(item.id);
  });
});
