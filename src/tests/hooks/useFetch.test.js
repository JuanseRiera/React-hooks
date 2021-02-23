import { renderHook, act } from "@testing-library/react-hooks";
import { useFetch } from "../../Hooks/useFetch";

describe("Prubas del hook usefetch", () => {
  test("Deberia traer info por defecto", () => {
    const { result } = renderHook(() =>
      useFetch("https://reqres.in/api/users?page=2")
    );
    const { data, loading, error } = result.current;
    expect(data).toBe(null);
    expect(loading).toBe(true);
    expect(error).toBe(null);
  });

  test("Deberia traer data", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch("https://reqres.in/api/users?page=2")
    );
    await waitForNextUpdate({ timeout: 5000 });
    const { data, loading, error } = result.current;
    expect(data).not.toBe(null);
    expect(loading).toBe(false);
    expect(error).toBe(null);
  });

  test("Deberia traer un error", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch("https://reqres.in/apii/users?page=2")
    );
    await waitForNextUpdate({ timeout: 5000 });
    const { data, loading, error } = result.current;
    expect(data).toBe(null);
    expect(loading).toBe(false);
    expect(error).toBe("error");
  });
});
