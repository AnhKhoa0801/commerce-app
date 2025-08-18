import { createSlice } from "@reduxjs/toolkit";

const getInitDarkMode = () => {
  const darkMode = localStorage.getItem("darkMode");
  return darkMode ? JSON.parse(darkMode) : false;
};

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isLoading: false,
    darkMode: getInitDarkMode(),
  },
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    stopLoading: (state) => {
      state.isLoading = false;
    },
    toggleDarkMode: (state) => {
      localStorage.setItem("darkMode", JSON.stringify(!state.darkMode));
      state.darkMode = !state.darkMode;
    },
  },
});

export const { startLoading, stopLoading, toggleDarkMode } = uiSlice.actions;
