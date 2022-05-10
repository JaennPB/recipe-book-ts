import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MainState {
  favorites: string[];
}

const initialState: MainState = {
  favorites: [],
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    addMealToFavorites: () => {},
    removeMealfromFavorites: () => {},
  },
});

export const { addMealToFavorites, removeMealfromFavorites } =
  mainSlice.actions;
export default mainSlice.reducer;
