import {
  ADD_TO_CART,
  CREATE_ORDER,
  CREATE_PAYMENT,
  CREATE_SHIPPING,
  DELETE_FROM_CART,
  ADD_REPEAT_PRODUCT,
  UPDATE_QTY
} from "../actions/ActionTypes";

const initialState = {
  productsOfCart: []
};

export default (state = initialState, action) => {
  switch (action.type){
    case ADD_TO_CART:
      // const { qty } = action.payload.newProduct
      return {
        ...state,
        productsOfCart: [ action.payload.newProduct, ...state.productsOfCart ]
        // productsOfCart: state.productsOfCart.concat(action.payload.newProduct)
      }

      // let hash = {};
      // return Object.assign({}, state, {
      //   productsOfCart: state.productsOfCart.concat(action.payload.newProduct).reduce(function(item, next) {
      //     hash[next.name] ? '' : hash[next.name] = true && item.push(next);
      //     return item
      //   }, [])
      // });

      //


      //
      // return {
      //   ...state,
      //   productsOfCart: state.productsOfCart.concat(action.payload.newProduct).reduce(function(item, next) {
      //     hash[next.id] ? '' : hash[next.id] = true && item.push(next);
      //     return item
      //   }, [])
      // };

    case DELETE_FROM_CART:
      console.log("reducer");
      return {
        ...state,
        productsOfCart: state.productsOfCart.filter(({id}) => action.payload.id !== id)
      }
    case ADD_REPEAT_PRODUCT:
      const updatedItems = state.productsOfCart.map(item => {
        if(item.id === action.payload.id){
          return { ...item, qty: item.qty+1 }
        }
        return item
      })
      return {
        ...state,
        productsOfCart: [...updatedItems]
      }

      /*******Dont delete*******/
      // incrementQtyRepeatProducts(state.productsOfCart, action.payload.id);
      // return {
      //   ...state,
      //   productsOfCart: [...state.productsOfCart]
      // }
    case CREATE_SHIPPING:
      return {
        ...state,
        shipping: action.payload.shipping
      }
    case CREATE_PAYMENT:
      return {
        ...state,
        payment: action.payload.payment
      }
    case CREATE_ORDER:
      return {
        ...state,
        order: [...state.order, action.payload.order]
      }
    case UPDATE_QTY:
      state.productsOfCart.map((value, indexMap) => {
        if (action.payload.index === indexMap) {
          return {...value, qty: action.payload.qty}
        } else {
          return value;
        }
      })

      // console.log("newArray : ", newArray);
      return {
        productsOfCart : state.productsOfCart
      }
    default:
      return state;
  }
}

/*****Dont delete*****/
// function incrementQtyRepeatProducts(list, repeatId){
//   let newList = list.forEach((element) => {
//     if(element.id === repeatId){
//       element.qty = element.qty+1;
//     }
//   })
//   return newList;
// }

