import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";

describe("Prueba de authReducer", () => {
  const name = "Jhon";
  const user = { id: "ABC", name };
  const initialSate = {
    logged: false,
    user: "Demo TODO",
  };
  test("debe de retornar el estado por defecto", () => {
    const newState = authReducer(initialSate, {});
    expect(newState).toBe(initialSate);
  });

  test("debe de (login) llamar el login autenticar y establecer el user", () => {
    const action = {
      type: types.login,
      payload: user,
    };
    const newState = authReducer(initialSate, action);
    expect(newState.logged).toBeTruthy();
    expect(newState.user).toEqual(user);
  });

  test("debe de (logout) borrar el name del usuario y logged en false", () => {
    const action = {
      type: types.logout,
      payload: user,
    };
    const newState = authReducer(initialSate, action);
    expect(newState.logged).toBeFalsy();
    expect(newState.user).toBeUndefined();
  });
});
