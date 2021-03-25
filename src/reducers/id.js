export default function idReducer(state, action) {
  switch (action.type) {
    case "saveId":
      console.log("mon état: ", state);
      console.log("mon action: ", action);

      return action.id;
    default:
      return state;
  }
}
