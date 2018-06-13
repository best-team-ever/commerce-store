import { deleteFromCartAction, updateQtyAction } from "../actions/cartAction";


export function deleteFromCartHandler(id, dispatch) {
  console.log("handlers");
  // return {
  //   deleteFromCart: (id) => {
  //     console.log("id", id);
  //     dispatch(deleteFromCartAction(id))
  //   },
  // }
  dispatch(deleteFromCartAction(id))
}

export function updateQtyHandlers(qty, index, dispatch) {
  // return {
  //   updateQty: (value, index) => dispatch(updateQtyAction(value, index))
  // }
  console.log("updateQty ", qty, "index", index);
  dispatch(updateQtyAction(qty, index));
}
