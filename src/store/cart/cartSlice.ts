import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
  productId: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const getCartFromLocalStorage = (): CartItem[] => {
    const cartItemsJson = localStorage.getItem('cartItems');
    return cartItemsJson ? JSON.parse(cartItemsJson) : [];
};

const initialState: CartState = {
  items: getCartFromLocalStorage(),
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    addToCart(state, action: PayloadAction<CartItem>) {
      const itemIndex = state.items.findIndex((item) => item.productId === action.payload.productId);
      if (itemIndex !== -1) {
        state.items = state.items.filter((item) => item.productId !== action.payload.productId);
      } else {
        state.items.push(action.payload);
      }
      localStorage.setItem('cartItems', JSON.stringify(state.items))
    },

    removeFromCart(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.productId !== action.payload);
      localStorage.setItem('cartItems', JSON.stringify(state.items))
    },

    updateCartItem(state, action: PayloadAction<CartItem>) {
      const itemIndex = state.items.findIndex((item) => item.productId === action.payload.productId);
      if (itemIndex !== -1) {
        state.items[itemIndex].quantity = action.payload.quantity;
        if (state.items[itemIndex].quantity === 0) {
          state.items.splice(itemIndex, 1);
        }
      }
      localStorage.setItem('cartItems', JSON.stringify(state.items))
    },

  },
});

export const { addToCart, removeFromCart, updateCartItem } = cartSlice.actions;
