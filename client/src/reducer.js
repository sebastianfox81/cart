const reducer = (state, action) => {

  if (action.type === 'CLEAR_CART') {
    return {...state, cart: []}
  }

  if (action.type === 'REMOVE') {
    return {...state, cart: state.cart.filter(item => item.id !== action.payload)}
  }

  if (action.type === 'INCREASE') {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        return {...cartItem, amount: cartItem.amount + 1}
      }
      return cartItem
    });
    return {...state, cart: tempCart}
  }

  if (action.type === 'DECREASE') {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        return {...cartItem, amount: cartItem.amount - 1}
      }
      return cartItem
    }).filter((cartItem) => cartItem.amount !== 0);

    return {...state, cart: tempCart}
  }

  if (action.type === 'GET_TOTALS') {
    const { amount, total } = state.cart.reduce((cartTotal, cartItem) => {
      const { price, amount} = cartItem;
      cartTotal.amount += amount
      return cartTotal
    }, {
      amount: 0,
      total: 0
    })

    return {...state, amount, total}
  }


  return state
}

export default reducer;


