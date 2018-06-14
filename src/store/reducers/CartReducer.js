import {
  ADD_TO_CART,
  CREATE_ORDER,
  CREATE_PAYMENT,
  CREATE_SHIPPING,
  DELETE_FROM_CART,
  ADD_REPEAT_PRODUCT,
  UPDATE_QTY,
  SIGNED,
  DELETE_CART
} from "../actions/ActionTypes";

const initialState = {
  productsOfCart: localGetProducts(),
  loggedIn: false,
};

export default (state = initialState, action) => {
  switch (action.type){
    case ADD_TO_CART:
      localAddProduct(action.payload.productsOfCart);
      return {
        ...state,
        productsOfCart: [ action.payload.newProduct, ...state.productsOfCart ]
      }
    case DELETE_FROM_CART:
      localDeleteProduct(action.payload.id);
      return {
        ...state,
        productsOfCart: state.productsOfCart.filter(({id}) => action.payload.id !== id)
      }
    case DELETE_CART:
      localDeleteAllProducts();
      return {
        ...state,
        productsOfCart: []
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
      const newArray = state.productsOfCart.map((value, indexMap) => {
        if (action.payload.index === indexMap) {
          return {...value, qty: action.payload.qty}
        } else {
          return value;
        }
      })
      console.log("newArray : ", newArray);
      return {
        ...state, productsOfCart : [...newArray]
      }
    case SIGNED:
      console.log("nouvel état de loggedIn", state.loggedIn, " => ", !action.payload.signedInOut);
      return {
        ...state,
        loggedIn: !action.payload.signedInOut
      }
    default:
      return state;

  }
}

function storeData(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.warn("something wrong happened", error);
    return false;
  }
}

function localAddProduct (product) {
  const key = "product_" + product.id;
  let current = localStorage.getItem(key);
  if (current !== null) {
    current.qty += product.qty;
  } else {
    current = product;
  }
  storeData(key, JSON.stringify(current));
}

function localDeleteProduct(product) {
  const key = "product_" + product.id;
  let current = localStorage.getItem(key);
  if (current !== null) {
    localStorage.removeItem(key);
  }
}

function localDeleteAllProducts() {
  const productKey = "product_";
  for (let i = localStorage.length - 1; i >= 0; i--) {
    const key = localStorage.key(i);
    if (key.substr(0, productKey.length) === productKey) {
      localStorage.removeItem(key);
    }
  }
}

function storeData(key, value) {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch (error) {
    console.warn("something wrong happened", error);
    return false;
  }
}

function localAddProduct (product) {
  if (product){
    const key = "product_" + product.id;
    let current = localStorage.getItem(key);
    if (current !== null) {
      current.qty += product.qty;
    } else {
      current = product;
    }
    storeData(key, JSON.stringify(current));
  }
}

function localDeleteProduct(product) {
  const key = "product_" + product.id;
  let current = localStorage.getItem(key);
  if (current !== null) {
    localStorage.removeItem(key);
  }
}

function localDeleteAllProducts() {
  const productKey = "product_";
  for (let i = localStorage.length - 1; i >= 0; i--) {
    const key = localStorage.key(i);
    if (key.substr(0, productKey.length) === productKey) {
      localStorage.removeItem(key);
    }
  }
}

function localGetProducts(product) {
  const productKey = "product_";
  let cart = [];
  if (localStorage !== undefined) {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.substr(0, productKey.length) === productKey) {
        const sValue = localStorage.getItem(key);
        cart.push(JSON.parse(sValue));
      }
    }
  }
  return cart;
}
