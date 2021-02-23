import { shallow } from "enzyme";
import { HookApp } from "../HookApp";

describe("Pruebas del modulo hookapp", () => {
  test("Debe cargar el componente correctamente", () => {
    const wrapper = shallow(<HookApp />);
    expect(wrapper).toMatchSnapshot();
  });
});
