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
    addMealToFavorites: (state, action: PayloadAction<string>) => {
      if (state.favorites.includes(action.payload)) return;
      state.favorites.push(action.payload);
    },
    removeMealfromFavorites: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter(
        (item) => item !== action.payload
      );
    },
  },
});

export const { addMealToFavorites, removeMealfromFavorites } =
  mainSlice.actions;
export default mainSlice.reducer;
