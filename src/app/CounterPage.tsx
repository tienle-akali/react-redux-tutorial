import React, { useState } from "react";
import { Provider } from "react-redux";
import { basicStore } from "../stores/basicStore";
import { useBasicAppSelector, useBasicAppDispatch } from "../hooks/basicHooks";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../slices/counter/basicCounterSlice";

function CounterDemo() {
  const count = useBasicAppSelector((state) => state.counter.value);
  const dispatch = useBasicAppDispatch();

  // Thêm state local để quản lý giá trị ô nhập
  const [incrementAmount, setIncrementAmount] = useState("2");
  const value = Number(incrementAmount) || 0;

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Ví dụ cơ bản (Đồng bộ)</h2>
      <div style={{ fontSize: "3rem", margin: "20px", fontWeight: "bold" }}>
        {count}
      </div>

      {/* Các nút bấm cơ bản */}
      <button onClick={() => dispatch(increment())}>Tăng 1</button>
      <button
        onClick={() => dispatch(decrement())}
        style={{ marginLeft: "10px" }}
      >
        Giảm 1
      </button>

      {/* Khu vực nhập số lượng nâng cao của bài 1 */}
      <div style={{ marginTop: "20px" }}>
        <input
          type="number"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
          style={{ width: "60px", padding: "5px", textAlign: "center" }}
        />
        <button
          onClick={() => dispatch(incrementByAmount(value))}
          style={{ marginLeft: "10px" }}
        >
          Tăng theo số lượng
        </button>
      </div>
    </div>
  );
}

export default function CounterPage() {
  return (
    <Provider store={basicStore}>
      <CounterDemo />
    </Provider>
  );
}
