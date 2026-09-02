import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0
};

const conversionSlice = createSlice({
  name: "conversion",
  initialState,
  reducers: {
    USA: (state) => {
      state.value += 94.97;
    },

    Australia: (state) => {
      state.value += 67.84;
    },

    India: (state) => {
      state.value += 1;
    },

    UK: (state) => {
      state.value += 128.22;
    },
    
    Reset: (state) => {
      state.value =0;
    }
  }
});

export const { USA, Australia, India, UK, Reset} = conversionSlice.actions;

export default conversionSlice.reducer;