import { createSlice } from '@reduxjs/toolkit';

export const sidebarSlice = createSlice({
    name: 'isMenuOpened',
    initialState: { value: false },
    reducers: {
        switchMenuState: (state, action) => {
        state.value = action.payload;
      },
    },
});

export const { switchMenuState } = sidebarSlice.actions;
