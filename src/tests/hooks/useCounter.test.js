import { renderHook, act } from "@testing-library/react-hooks";
import { useCounter } from "../../Hooks/useCounter";
describe("Pruabs del hook useCounter", () => {
  test("Deberia traerme un numero por defecto y tres funciones", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.counter).toBe(10);
    expect(typeof result.current.decrementar).toBe("function");
    expect(typeof result.current.incrementar).toBe("function");
    expect(typeof result.current.reset).toBe("function");
  });

  test("Deberia traerme el counter con 100", () => {
    const { result } = renderHook(() => useCounter(100));
    expect(result.current.counter).toBe(100);
  });

  test("Deberia incrementar en 1", () => {
    const { result } = renderHook(() => useCounter(100));
    act(() => {
      result.current.incrementar(1);
    });
    expect(result.current.counter).toBe(101);
  });

  test("Deberia decrementar en 1", () => {
    const { result } = renderHook(() => useCounter(100));
    act(() => {
      result.current.decrementar(1);
    });
    expect(result.current.counter).toBe(99);
  });

  test("Deberia reiniciar al valor inicial que se envio", () => {
    const { result } = renderHook(() => useCounter(100));
    act(() => {
      result.current.incrementar(1);
      result.current.incrementar(1);
      result.current.incrementar(1);
      result.current.reset();
    });
    expect(result.current.counter).toBe(100);
  });
});
