import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

interface AdvancedCounterState {
  value: number;
  status: "idle" | "loading" | "failed";
}

const initialState: AdvancedCounterState = {
  value: 0,
  status: "idle",
};

// Hàm bất đồng bộ giả lập delay 1 giây giống như đợi Server phản hồi
export const incrementAsync = createAsyncThunk(
  "advancedCounter/fetchCount",
  async (amount: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return amount;
  }
);

export const advancedSlice = createSlice({
  name: "advancedCounter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        incrementAsync.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.status = "idle";
          state.value += action.payload;
        }
      )
      .addCase(incrementAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { increment, decrement } = advancedSlice.actions;
export default advancedSlice.reducer;
