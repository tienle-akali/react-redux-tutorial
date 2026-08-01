import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/counter/basicCounterSlice";

export const basicStore = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// Xuất các kiểu dữ liệu RootState và AppDispatch từ chính store
export type BasicRootState = ReturnType<typeof basicStore.getState>;
export type BasicAppDispatch = typeof basicStore.dispatch;
