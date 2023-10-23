import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk("data/fetchPosts", async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(response.data);
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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },

  // extraReducers: {
  //   [fetchPosts.pending]: (state, action) => {
  //     state.isLoading = true;
  //   },
  //   [fetchPosts.fulfilled]: (state, action) => {
  //     state.data = action.payload;
  //   },
  //   [fetchPosts.rejected]: (state, action) => {
  //     state.isError = true;
  //   },
  // },
});

export default aboutSlice.reducer;
