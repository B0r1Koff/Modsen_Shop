import { createSlice } from '@reduxjs/toolkit';
import theme from '../../constants/static_theme';

export const currentThemeSlice = createSlice({
  name: 'currentTheme',
  initialState: { value: theme.light },
  reducers: {
      switchTheme: (state, action) => {
      state.value = action.payload;      
    },
  },
});

export const { switchTheme } = currentThemeSlice.actions;