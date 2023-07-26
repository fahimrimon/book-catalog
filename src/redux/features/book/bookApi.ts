
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
  }),
});

export const {
  useGetBooksQuery,
  useGetLatestBooksQuery
} = bookApi;