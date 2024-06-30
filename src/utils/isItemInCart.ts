import { store } from "src/store/store";

export function isItemInCart(itemId: number){
    const itemIndex = store.getState().cart.items.findIndex((item) => item.productId === itemId);
    return itemIndex === -1
}