import { configureStore } from "@reduxjs/toolkit";

import mainSlice from "./mainSlice";

const store = configureStore({
  reducer: mainSlice,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
