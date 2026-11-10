# React Redux Tutorial

Ứng dụng demo React, TypeScript và Redux Toolkit, gồm ví dụ quản lý state đồng bộ, xử lý bất đồng bộ với `createAsyncThunk` và gọi API với RTK Query.

## Yêu cầu

- Node.js
- pnpm

## Cài đặt và chạy

```bash
pnpm install
pnpm dev
```

Mở URL được Vite hiển thị trong terminal (thường là `http://localhost:5173`).

## Các trang demo

- `/` — bộ đếm cơ bản với Redux Toolkit: tăng, giảm và tăng theo số lượng nhập vào.
- `/advanced` — bộ đếm bất đồng bộ với `createAsyncThunk` và danh sách 3 bài viết tải qua RTK Query từ JSONPlaceholder.

## Lệnh

```bash
pnpm dev      # Chạy server phát triển
pnpm build    # Kiểm tra TypeScript và tạo bản build production trong dist/
pnpm preview  # Xem thử bản build production
```

## Cấu trúc chính

```text
.
├── index.html                 # HTML entry point của Vite
├── public/
│   ├── favicon.svg
│   └── manifest.json
└── src/
    ├── app/                   # Các trang demo
    ├── hooks/                 # Typed hooks cho từng store
    ├── slices/counter/        # Redux slices và RTK Query API
    ├── stores/                # Basic store và advanced store
    ├── App.tsx                # Điều hướng giữa các trang
    └── index.tsx              # Khởi chạy React và BrowserRouter
```

## Nếu pnpm chặn build script của esbuild

Nếu `pnpm install` báo `ERR_PNPM_IGNORED_BUILDS` cho `esbuild`, chạy `pnpm approve-builds`, chọn `esbuild` để cho phép script, rồi chạy lại `pnpm install`.
