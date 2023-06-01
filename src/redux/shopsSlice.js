// import { createSlice } from '@reduxjs/toolkit';

// // const initialState = {
// //   shops: [],
// //   orderedMeals: localStorage.getItem('orders')
// //     ? JSON.parse(localStorage.getItem('orders'))
// //     : [],
// // };

// export const shopsSlice = createSlice({
//   name: 'shops',
//   initialState,
//   reducers: {
//     addShops: (state, action) => {
//       state.shops = [...state.shops, ...action.payload];
//       // localStorage.setItem('orders', JSON.stringify(state.orderedMeals));
//     },
//     // clearOrders: state => {
//     //   state.users = initialState.users;
//     // },
//     addOrder: (state, { payload }) => {
//       const order = { ...payload };

//       state.orderedMeals.push(order);
//       localStorage.setItem('orders', JSON.stringify(state.orderedMeals));
//     },
//     removeOrder: (state, { payload }) => {
//       state.orderedMeals = state.orderedMeals.filter(
//         meal => meal.id !== payload
//       );
//       localStorage.setItem('orders', JSON.stringify(state.orderedMeals));
//     },
//   },
// });

// export const { addShops, removeOrder, addOrder } = shopsSlice.actions;
// export const shopsReducer = shopsSlice.reducer;
