import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodo, unDemoTodo } from "../../fixtures/demoTodos";

describe("Pruba del todoReducer", () => {
  test("Deberia traer el state anterior", () => {
    const state = todoReducer(demoTodo, {});
    expect(state).toBe(demoTodo);
  });
  test("Deberia agregar un todo", () => {
    const state = todoReducer(demoTodo, {
      type: "agregar",
      payload: unDemoTodo,
    });
    expect(state.length).toBe(3);
  });

  test("Deberia de borrar un todo", () => {
    const state = todoReducer(demoTodo, {
      type: "eliminar",
      payload: 2,
    });
    expect(state.length).toBe(1);
  });

  test("deberia hacer el toogle", () => {
    const state = todoReducer(demoTodo, {
      type: "toggle",
      payload: demoTodo[0].id,
    });
    expect(state[0].done).toBe(!demoTodo[0].done);
  });

  test("deberia traer el state anterior", () => {
    const state = todoReducer(demoTodo, {
      type: "eliminar",
      payload: 3,
    });
    expect(state.length).toBe(2);
  });
});
