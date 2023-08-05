import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/product-list/productSlice";
import authReducer from "../features/Auth/authSlice";
import thunk from "redux-thunk";
import cartReducer from "../features/cart/cartSlice";
import orderReducer from "../features/order/orderSlice";
import userReducer from "../features/user/userSlice";
export const store = configureStore({
  reducer: {
    product: productReducer,
    auth: authReducer,
    cart: cartReducer,
    order: orderReducer,
    user: userReducer,
  },
  middleware: [thunk],
});
