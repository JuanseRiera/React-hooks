import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "../../Hooks/useForm";

describe("Prubas del hook useForm", () => {
  const initialValues = {
    nombre: "Juanse",
    email: "juanse@gmail.com",
  };

  test("Deberia devolver un formulario por defecto", () => {
    const { result } = renderHook(() => useForm(initialValues));
    const { formState } = result.current;
    expect(formState).toEqual(initialValues);
  });

  test("Deberia cambiar el nombre del formstate", () => {
    const { result } = renderHook(() => useForm(initialValues));
    const { changeInput } = result.current;
    act(() => {
      changeInput({
        target: { name: "nombre", value: "Juansegundo" },
      });
    });

    const { formState } = result.current;
    expect(formState).toEqual({ ...initialValues, nombre: "Juansegundo" });
  });

  test("Deberia reiniciarse a los valor iniciales", () => {
    const { result } = renderHook(() => useForm(initialValues));
    const { changeInput, reset } = result.current;
    act(() => {
      changeInput({
        target: { name: "nombre", value: "Juansegundo" },
      });
      reset();
    });

    const { formState } = result.current;
    expect(formState).toEqual(initialValues);
  });
});
