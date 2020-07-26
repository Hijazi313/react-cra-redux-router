import { types } from "actions/types";
export default (state = {}, action) => {
  switch (action.type) {
    case "FIRST_CASE":
      break;

    default:
      return state;
      break;
  }
};
