import { shallow } from "enzyme";
import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks";
import { useFetch } from "../../../Hooks/useFetch";

jest.mock("../../../Hooks/useFetch");

describe("Pruebas del componente multiple custom hooks", () => {
  test("Deberia cargar correctamente", () => {
    useFetch.mockReturnValue({
      loading: true,
      data: null,
      error: null,
    });
    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Deberia mostrar como autor juanse y como frase hola mundo", () => {
    useFetch.mockReturnValue({
      loading: false,
      data: [
        {
          author: "juanse",
          quote: "Hola mundo",
        },
      ],
      error: null,
    });
    const wrapper = shallow(<MultipleCustomHooks />);

    expect(wrapper.find("#quote").text().trim()).toBe("Hola mundo");
    expect(wrapper.find("figcaption").text().trim()).toBe("juanse");
  });
});
