import { mount } from "enzyme";
import { AppRouter } from "../../../components/08-useContext/AppRouter";
import { userContext } from "../../../components/08-useContext/UserContex";

describe("Prubas del componente app router", () => {
  const user = {
    name: "juanse",
    email: "rierajuanse@gmail.com",
  };
  const wrapper = mount(
    <userContext.Provider value={{ user }}>
      <AppRouter />
    </userContext.Provider>
  );

  test("Deberia cargar correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
