import { signedInAction } from "../actions/cartAction";


export function signedInHandler(dispatch) {
  console.log("handlers sign");
  dispatch(signedInAction());
}
