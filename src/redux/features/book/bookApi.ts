/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */

import { apiSlice } from "../../api/apiSlice";

const bookApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      query: (params) => `/books${params ? `?${params}` : ""}`,
      providesTags: ["post", "deletepost"],
    }),
    getLatestBooks: builder.query({
      query: () => "/books/recent",
    }),
    getSingleBook: builder.query({
      query: (id) => `/book/${id}`,
      providesTags: ["bookDetails"],
    }),
    createBook: builder.mutation({
      query: (data) => ({
        url: "/books",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["addNewBook"],
    }),
    postComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/comment/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["comments"],
    }),
    getComment: builder.query({
      query: (id) => `/comment/${id}`,
      providesTags: ["comments"],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["deletepost"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetLatestBooksQuery,
  useCreateBookMutation,
  useGetCommentQuery,
  usePostCommentMutation,
  useGetSingleBookQuery,
  useDeleteBookMutation,
} = bookApi;
