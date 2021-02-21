export const todoReducer = (state, action) => {
  switch (action.type) {
    case "agregar":
      return [...state, action.payload];

    case "toggle":
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        } else {
          return todo;
        }
      });

    case "eliminar":
      return state.filter((x) => x.id !== action.payload);

    default:
      return state;
  }
};
