
import { apiSlice } from "../../api/apiSlice";

const bookApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      query: (params) => `/books${params ? `?${params}` : ""}`,
      providesTags: ["post", "deletepost"],
    })
  }),
});

export const {
  useGetBooksQuery,
} = bookApi;