import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";


// Reducers slices
import detailSlice from './details-slice'


const rootReducer = combineReducers({
    detailsSlice: detailSlice
})


export const store = configureStore({
    reducer: rootReducer
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store