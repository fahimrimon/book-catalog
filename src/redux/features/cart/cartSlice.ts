import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../../types/GlobalTypes";

interface ICart {
  books: IProduct[];
}

const initialState: ICart = {
  books: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<IProduct>) => {
      const existing = state.books.find(
        (book) => book._id === action.payload._id
      );

      if (!existing) {
        state.books.push({ ...action.payload });
      }
    },
    removeFromWishlist: (state, action: PayloadAction<IProduct>) => {
      const existing = state.books.find(
        (book) => book._id === action.payload._id
      );

      if (existing) {
        state.books = state.books.filter(
          (book) => book._id !== action.payload._id
        );
      }
    },
  },
});

export const { addToWishlist, removeFromWishlist } = cartSlice.actions;

export default cartSlice.reducer;