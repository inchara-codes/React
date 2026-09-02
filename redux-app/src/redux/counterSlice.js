import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },

    decrement: (state) => {
      state.value -= 1;
    },

    reset: (state) => {
      state.value = 0;
    },
    million: (state) => {
      state.value = 1000000
    }
  }
});

export const { increment, decrement, reset, million } = counterSlice.actions;

export default counterSlice.reducer;