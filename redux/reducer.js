let basketItem;
let basket

export const reducer = (state, action) => {
  switch (action.type) {
    case 'addToBasket':
      basketItem = state.products.find(product =>  product.id === action.id);
      basket = [...state.basketItems];
      if (basket.some(item => item.id === basketItem.id)) {
        basket[basket.findIndex(item => item.id === basketItem.id)].count += 1;
      } else {
        basketItem.count = 1;
        basket.push(basketItem)
      }
      return {
        ...state,
        basketItems: basket
      }
    case 'increase':
      basket = [...state.basketItems];
      basketItem = basket.find(item => item.id === action.id)
      basket[basket.findIndex(item => item.id === basketItem.id)].count += 1;
      return {
        ...state,
        basketItems: basket
      }
    case 'decrease':
      basket = [...state.basketItems];
      basketItem = basket.find(item => item.id === action.id)
      basket[basket.findIndex(item => item.id === basketItem.id)].count -= 1;
      return {
        ...state,
        basketItems: basket
      }
    case 'deleteFromBasket':
      basket = [...state.basketItems];
      basket.splice(basket.findIndex(item => item.id === action.id), 1)
      return {
        ...state,
        basketItems: basket
      }
    default:
      return state
  }
}