import AsyncStorage from "@react-native-async-storage/async-storage";

import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "job",
  initialState: {
    favoriteJobs: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.favoriteJobs = [...state.favoriteJobs, action.payload];
      AsyncStorage.setItem("@jobs", JSON.stringify(state.favoriteJobs));
    },
    removeFavorite: (state, action) => {
      state.favoriteJobs = state.favoriteJobs.filter((item) => {
        return item.id !== action.payload;
      });
      AsyncStorage.setItem("@jobs", JSON.stringify(state.favoriteJobs));
    },
  },
  extraReducers: {},
});

export const { changeJob, addFavorite, removeFavorite } = jobSlice.actions;

export default jobSlice.reducer;
