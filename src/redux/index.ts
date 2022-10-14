import { configureStore } from '@reduxjs/toolkit'
import userSlice from "@reducer/user"

export const store = configureStore({
    reducer: {
        user: userSlice
    }
})