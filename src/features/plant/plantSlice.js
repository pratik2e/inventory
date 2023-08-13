import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  plant: "",
};

export const plantSlice = createSlice({
  name: "plant",
  initialState,
  reducers: {
    updatePlant: (state, action) => {
      state.plant = action.payload;
    },
  },
});

export const { updatePlant } = plantSlice.actions;
export default plantSlice.reducer;
