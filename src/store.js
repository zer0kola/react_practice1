import { configureStore, createSlice } from "@reduxjs/toolkit";
// redux를 사용하면 component 간 state 공유가 편리해진다.
// props, emit, event 등을 사용하지 않아도 된다.
// 반대로 component 간 state 공유가 필요없다면 useState를 사용한다.

let user = createSlice({
  name: "user", // state 이름
  initialState: { name: "kim", age: 20 }, // 초기값
  reducers: {
    // action을 만들어준다.
    changeName(state) {
      return { name: "park", age: 30 };
    },
  },
});
// createSlice를 사용하면 action, reducer를 자동으로 생성해준다.
// action은 type, payload를 가진다.
// store안에 있는 state를 수정하고 싶으면 state 수정해주는 함수를 store.js에 만들어두고
// component에서는 action을 dispatch하는 방식으로만 state를 수정할 수 있다.
// state를 수정하는 함수를 reducer라고 한다.

let stock = createSlice({
  name: "stock",
  initialState: [10, 20, 30],
});

let cart = createSlice({
  name: "cart",
  initialState: [
    { id: 1, name: "white and black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 3 },
  ],
  reducers: {
    addCart(state, action) {
      let found = state.findIndex((cartItem) => cartItem.id === action.payload.id);
      // action.type은 state를 수정하는 함수의 이름이고
      // action.payload는 state를 수정하는 함수의 parameter이다.
      // cartItem.id가 action.payload.id와 같은 index를 찾아서 found에 저장한다.
      state[found].count++;
    },
    addItem(state, action) {
      console.log("action.payload :>> ", action.payload);
      state.push(action.payload);
    },
    removeCart(state, action) {
      let found = state.findIndex((a) => a.id === action.payload.id);
      if (found >= 0) {
        state.splice(found, 1);
      }
    },
  },
});

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    cart: cart.reducer,
    // 여기에 reducer를 추가해야 store에 추가된다.
  },
});

export let { changeName } = user.actions;
export let { addCart, removeCart, addItem } = cart.actions;
