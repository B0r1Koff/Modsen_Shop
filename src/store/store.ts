import theme from '../constants/static_theme';
import { configureStore, createSlice } from '@reduxjs/toolkit'

const currentThemeSlice = createSlice({
    name: "currentTheme",
    initialState: { value: theme.light },
    reducers: {
        switchTheme: (state, action) => {
            state.value = action.payload
        }
    }
})

const sidebarSlice = createSlice({
    name: "sidebar",
    initialState: { value: false },
    reducers: {
        switchMenuState: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {switchTheme} = currentThemeSlice.actions;
export const {switchMenuState} = sidebarSlice.actions;

export const store = configureStore({
    reducer: {
        currentTheme: currentThemeSlice.reducer,
        isMenuOpened: sidebarSlice.reducer, 
    },
})