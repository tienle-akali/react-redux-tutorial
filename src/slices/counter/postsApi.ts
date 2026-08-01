import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    // Định nghĩa endpoint lấy danh sách bài viết giới hạn 3 phần tử
    getPosts: builder.query<any[], void>({
      query: () => "posts?_limit=3",
    }),
  }),
});

// RTK Query tự động sinh ra hook này dựa trên tên endpoint getPosts ở trên
export const { useGetPostsQuery } = postsApi;
