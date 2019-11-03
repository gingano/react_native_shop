import { createStore } from 'redux';
import { reducer } from './reducer';
import products from '../api/products'

const initialState = {
  products: [...products],
  basketItems: []
};

const store = createStore(reducer, initialState);

export default store