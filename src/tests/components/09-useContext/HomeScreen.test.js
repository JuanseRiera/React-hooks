import { mount } from "enzyme";
import { HomeScreen } from "../../../components/08-useContext/HomeScreen";
import { userContext } from "../../../components/08-useContext/UserContex";
describe("Pruebas del homescreen", () => {
  const user = {
    name: "juanse",
    email: "rierajuanse@gmail.com",
  };
  const wrapper = mount(
    <userContext.Provider value={{ user }}>
      <HomeScreen />
    </userContext.Provider>
  );
  test("Deberia de cargar correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
