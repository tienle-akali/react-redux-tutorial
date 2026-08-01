import { configureStore } from "@reduxjs/toolkit";
import advancedCounterReducer from "../slices/counter/advancedCounterSlice";
import { postsApi } from "../slices/counter/postsApi";

export const advancedStore = configureStore({
  reducer: {
    // Sử dụng reducer nâng cao mới
    advancedCounter: advancedCounterReducer,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  // Bắt buộc thêm middleware của RTK Query để kích hoạt tính năng caching
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
});

export type AdvancedRootState = ReturnType<typeof advancedStore.getState>;
export type AdvancedAppDispatch = typeof advancedStore.dispatch;
