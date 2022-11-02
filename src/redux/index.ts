import { configureStore } from '@reduxjs/toolkit'
import userSlice from "../redux/reducer/user"
import subjectSlice from "../redux/reducer/subject"

export const store = configureStore({
    reducer: {
        user: userSlice,
        subject: subjectSlice
    },
    devTools: true
});