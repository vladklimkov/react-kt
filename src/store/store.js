import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../components/ui/products/productsSlice';
import cartReducer from '../components/ui/cart/cartSlice';
import categoriesReducer from '../components/ui/categories/categoriesSlice';
import categoryReducer from '../components/ui/category/categorySlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    categories: categoriesReducer,
    category: categoryReducer,
    products: productsReducer,
  },
});

/*
Redux is a pattern and library for managing and updating application state, using events called "actions". reducer as an event listener which handles events based on the received action (event) type.

Note that this one configureStore call automatically does all the usual setup work you'd have done manually:

    The slice reducers were automatically passed to combineReducers()
    The redux-thunk middleware was automatically added
    Dev-mode middleware was added to catch accidental mutations
    The Redux DevTools Extension was automatically set up
    The middleware and DevTools enhancers were composed together and added to the store

Redux Toolkit to solve those problems:

    Redux Toolkit simplifies store setup down to a single clear function call, while retaining the ability to fully configure the store's options if you need to
    Redux Toolkit eliminates accidental mutations, which have always been the #1 cause of Redux bugs
    Redux Toolkit eliminates the need to write any action creators or action types by hand
    Redux Toolkit eliminates the need to write manual and error-prone immutable update logic
    Redux Toolkit makes it easy to write a Redux feature's code in one file, instead of spreading it across multiple separate files
    Redux Toolkit offers excellent TS support, with APIs that are designed to give you excellent type safety and minimize the number of types you have to define in your code
    RTK Query can eliminate the need to write any thunks, reducers, action creators, or effect hooks to manage fetching data and tracking loading state
*/