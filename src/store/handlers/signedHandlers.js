import { signedAction } from "../actions/cartAction";


export function signedHandler(signedInOut, dispatch) {
  console.log("handlers sign");
  dispatch(signedAction());
}
