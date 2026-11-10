import { Provider } from "react-redux";
import {
  useAdvancedAppDispatch,
  useAdvancedAppSelector,
} from "../hooks/advancedHooks";
import {
  decrement,
  increment,
  incrementAsync,
} from "../slices/counter/advancedCounterSlice";
import { useGetPostsQuery } from "../slices/counter/postsApi";
import { advancedStore } from "../stores/advancedStore";

function AdvancedDemo() {
  const count = useAdvancedAppSelector((state) => state.advancedCounter.value);
  const status = useAdvancedAppSelector(
    (state) => state.advancedCounter.status,
  );
  const dispatch = useAdvancedAppDispatch();

  // Gọi API bằng RTK Query
  const { data: posts, isLoading, isError } = useGetPostsQuery();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Ví dụ nâng cao (Thunk & RTK Query)</h2>
      <div style={{ fontSize: "2rem", margin: "20px" }}>{count}</div>

      {/* 1. Tính năng đếm đồng bộ */}
      <button onClick={() => dispatch(increment())}>Tăng 1</button>
      <button
        onClick={() => dispatch(decrement())}
        style={{ marginLeft: "10px" }}
      >
        Giảm 1
      </button>

      {/* 2. Tính năng bất đồng bộ sử dụng createAsyncThunk */}
      <button
        onClick={() => dispatch(incrementAsync(5))}
        disabled={status === "loading"}
        style={{ marginLeft: "10px" }}
      >
        {status === "loading" ? "Đang tải..." : "Tăng thêm 5 (Sau 1s)"}
      </button>

      <hr style={{ margin: "40px 0" }} />

      {/* 3. Tính năng lấy dữ liệu bất đồng bộ sử dụng RTK Query */}
      <h3>Danh sách bài viết từ API</h3>
      {isLoading && <p>Đang tải bài viết...</p>}
      {isError && <p>Lỗi khi load dữ liệu!</p>}

      <ul
        style={{
          listStyleType: "none",
          padding: 0,
          textAlign: "left",
          maxWidth: "400px",
          margin: "0 auto",
        }}
      >
        {posts?.map((post: any) => (
          <li key={post.id} style={{ margin: "5px 0" }}>
            {post.id}. {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Xuất bản Component đã được bao bọc độc lập bởi Advanced Store
export default function AdvancedPage() {
  return (
    <Provider store={advancedStore}>
      <AdvancedDemo />
    </Provider>
  );
}
