import { configureStore } from '@reduxjs/toolkit'
import userSlice from "../redux/reducer/user"

export const store = configureStore({
    reducer: {
        user: userSlice
    }
})