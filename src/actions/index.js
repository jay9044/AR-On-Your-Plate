//example
export function updateCameraPermission() {
  return {
    type: "UPDATE_CAMERA_PERMISSION",
  };
}

export function updateTurkeyObj(object) {
  return {
    type: "UPDATE_TURKEY_OBJ",
    object,
  };
}

export function updateTurkeyMtl(mtl) {
  return {
    type: "UPDATE_TURKEY_MTL",
    mtl,
  };
}

export function updateDish(url) {
  return {
    type: "UPDATE_DISH",
    url,
  };
}

export function setModalVisible() {
  return {
    type: "SET_MODAL_VISIBLE",
  };
}

export function hideModal() {
  return {
    type: "HIDE_MODAL",
  };
}

export function receiveCourse(course) {
  return {
    type: "RECEIVE_COURSE",
    course,
  };
}

export function filterStarter() {
  return {
    type: "FILTER_STARTER",
  };
}

export function filterMain() {
  return {
    type: "FILTER_MAIN",
  };
}

export function filterDessert() {
  return {
    type: "FILTER_DESSERT",
  };
}

//Jamal (Basket)
export function addQuantity(quantity,dish){
  return{
    type: 'ADD_QUANTITY',
    quantity,
    dish
  }
}
export function decreaseQuantity(quantity,dish){
  return{
    type: 'DECREASE_QUANTITY',
    quantity,
    dish
  }
}




// export const addToBasket = (id, quantity) => (
//   {
//     type: 'ADD_TO_BASKET',
//     id,
//     quantity
//   }
//  );
 
//  // removeFromCart
//  export const removeFromBasket = (id) => (
//   {
//     type: 'REMOVE_FROM_BASKET',
//     id,
//   }
//  );
 
//  // updateCartItem
//  export const updateBasketItemQuantity = (id, quantity) => (
//   {
//     type: 'UPDATE_BASKET_ITEM',
//     id,
//     quantity
//   }
//  );
