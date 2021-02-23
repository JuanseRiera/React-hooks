import { mount } from "enzyme";
import { LoginScreen } from "../../../components/08-useContext/LoginScreen";
import { userContext } from "../../../components/08-useContext/UserContex";

describe("Pruebas del loginScreen", () => {
  const setvalue = jest.fn();
  const wrapper = mount(
    <userContext.Provider value={{ setvalue }}>
      <LoginScreen />
    </userContext.Provider>
  );
  test("Deberia cargar correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe ejecutar el setValue correctamente", () => {
    wrapper.find("button").simulate("click");
    expect(setvalue).toHaveBeenCalledWith({
      id: 123,
      nombre: "Juanse",
    });
  });
});
