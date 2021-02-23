import { act } from "@testing-library/react";
import { shallow, mount } from "enzyme";
import { TodoApp } from "../../../components/08-useReducer/TodoApp";
import { demoTodo } from "../../fixtures/demoTodos";

describe("Pruebas para todoApp", () => {
  const wrapper = shallow(<TodoApp />);
  Storage.prototype.setItem = jest.fn();
  test("Se deberia cargar el documento correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe cargarse dos elementos y se debe llamar dos veces a setItem del localstorage", () => {
    const wrapper = mount(<TodoApp />);
    act(() => {
      wrapper.find("TodoAdd").prop("guardarTarea")(demoTodo[0]);
      wrapper.find("TodoAdd").prop("guardarTarea")(demoTodo[1]);
    });

    console.log(wrapper.find("TodoItem"));
    expect(localStorage.setItem).toBeCalledTimes(2);
  });
});
