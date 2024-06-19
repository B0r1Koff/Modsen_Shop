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
    name: "isMenuOpened",
    initialState: { value: false },
    reducers: {
        switchMenuState: (state, action) => {
            state.value = action.payload
        }
    }
})

const productsArray = createSlice({
    name: "products",
    initialState: { value: [] },
    reducers: {
        switchProductsState: (state, action) => {
            state.value = action.payload                        
        }
    }
})

export const {switchTheme} = currentThemeSlice.actions;
export const {switchMenuState} = sidebarSlice.actions;
export const {switchProductsState} = productsArray.actions;

export const store = configureStore({
    reducer: {
        currentTheme: currentThemeSlice.reducer,
        isMenuOpened: sidebarSlice.reducer, 
        products: productsArray.reducer
    },
})