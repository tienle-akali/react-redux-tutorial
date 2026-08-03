```
src/
├── components/           # Các component giao diện dùng chung
├── hooks/                # Nơi chứa các Typed Hooks đã ép kiểu sẵn
│   ├── basicHooks.ts
│   └── advancedHooks.ts
├── slices/               # Logic Actions & Reducers
│   └── counter/
│       ├── basicCounterSlice.ts
│       ├── advancedCounterSlice.ts
│       └── postsApi.ts
├── stores/               # Cấu hình kho lưu trữ tập trung
│   ├── basicStore.ts
│   └── advancedStore.ts
├── app/                  # Chứa trực tiếp các trang giao diện hiển thị
│   ├── CounterPage.tsx   # Trang demo của bài cơ bản (Bọc basicStore)
│   └── AdvancedPage.tsx  # Trang demo của bài nâng cao (Bọc advancedStore)
├── App.tsx               # Router chính và thanh điều hướng (Navbar)
└── index.tsx             # File root khởi chạy ứng dụng (BrowserRouter)
```
