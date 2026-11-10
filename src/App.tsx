import { Link, Route, Routes } from "react-router-dom";
import AdvancedPage from "./app/AdvancedPage";
import CounterPage from "./app/CounterPage";

function App() {
  return (
    <div>
      {/* Thanh Menu điều hướng nhanh */}
      <nav
        style={{ padding: "15px", background: "#23282d", textAlign: "center" }}
      >
        <Link
          to="/"
          style={{
            color: "#fff",
            marginRight: "20px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          🔄 1. Bài cơ bản
        </Link>
        <Link
          to="/advanced"
          style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}
        >
          🚀 2. Bài nâng cao (Thunk & RTK Query)
        </Link>
      </nav>

      {/* Định tuyến trực tiếp đến các trang trong folder app */}
      <Routes>
        <Route path="/" element={<CounterPage />} />
        <Route path="/advanced" element={<AdvancedPage />} />
      </Routes>
    </div>
  );
}

export default App;
