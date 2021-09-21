import { createSlice } from "@reduxjs/toolkit";

createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        totalAmount: 0
    },
    reducers {
        addItemToCart(state, action) {
            //  Remember, "payload" is a pre-coded property.
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            if (!existingItem) {
                //  It's only ok to manipulate an object like this in Redux Toolkit, not reg Redux!
                state.items.push({
                    itemId: newItem.id, 
                    price: newItem.price, 
                    quantity: 1, 
                    totalPrice: newItem.price,
                    name: newItem.title
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = totalPrice + newItem.price;
            }
        },
        removeItemFromCart() {}
    }
});