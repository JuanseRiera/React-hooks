import { shallow } from "enzyme";
import { RealExampleUseRef } from "../../../components/04-useRef/RealExampleUseRef";
describe("Prubas del componente <RealExampleUseRef/>", () => {
  test("deberia cargar el componente correctamente", () => {
    const wrapper = shallow(<RealExampleUseRef />);
    expect(wrapper).toMatchSnapshot();
  });

  test("deberia cargar el componente <MultipleCustomHooks/> correctamente", () => {
    const wrapper = shallow(<RealExampleUseRef />);
    wrapper.find("button").simulate("click");
    expect(wrapper.find("MultipleCustomHooks").exists()).toBe(true);
  });
});
