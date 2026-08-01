import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Định nghĩa kiểu dữ liệu cho state của slice này
interface CounterState {
  value: number;
}

// Khởi tạo state ban đầu với kiểu dữ liệu đã định nghĩa
const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Sử dụng PayloadAction<number> để chỉ định payload bắt buộc phải là kiểu số
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
