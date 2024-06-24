import { configureStore } from '@reduxjs/toolkit';
import { currentThemeSlice } from './theme/themeSlice';
import { sidebarSlice } from './sidebar/sidebarSlice';
import { productsSlice } from './products/productsSlice';

export const store = configureStore({
  reducer: {
    currentTheme: currentThemeSlice.reducer,
    isMenuOpened: sidebarSlice.reducer,
    products: productsSlice.reducer,
  },
});
