import { shallow } from "enzyme";
import { TodoAdd } from "../../../components/08-useReducer/TodoAdd";
describe("Pruebas del todoadd", () => {
  const guardarTarea = jest.fn();
  const wrapper = shallow(<TodoAdd guardarTarea={guardarTarea} />);
  test("Deberia de cargar correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("NO deberia de llamarse a guardar tarea", () => {
    const onSubmit = wrapper.find("form").prop("onSubmit");
    onSubmit({ preventDefault: jest.fn() });
    expect(guardarTarea).toHaveBeenCalledTimes(0);
  });

  test("Deberia de llamarse a guardar tarea", () => {
    wrapper
      .find("input")
      .simulate("change", { target: { name: "todoInput", value: "Changed" } });
    const onSubmit = wrapper.find("form").prop("onSubmit");
    onSubmit({ preventDefault: jest.fn() });
    expect(guardarTarea).toHaveBeenCalledTimes(1);
    expect(guardarTarea).toHaveBeenLastCalledWith({
      id: expect.any(Number),
      todo: "Changed",
      done: false,
    });
    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
