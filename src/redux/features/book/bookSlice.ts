import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
});

export default bookSlice.reducer;