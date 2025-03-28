import { configureStore } from "@reduxjs/toolkit";
import appReducer from './reduxSlice'


const store = configureStore({
    reducer : {
        allReducers : appReducer
    }
})

export default store