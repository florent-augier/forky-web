const initialState = "";
export default function idReducer(state, action) {
  switch (action.type) {
    case "saveId":
      console.log("mon état: ", state);
      console.log("mon action: ", action);
      return action.id;
    case "removeId":
      console.log("mon état: ", state);
      console.log("mon action: ", action);

      return initialState;
    default:
      return state;
  }
}
