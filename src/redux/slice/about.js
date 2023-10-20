import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk("data/fetchPosts", async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const aboutSlice = createSlice({
  name: "about",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
  },

  extraReducers: {
    [fetchPosts.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
    [fetchPosts.rejected]: (state, action) => {
      state.isError = true;
    },
  },
});

export default aboutSlice.reducer;
