import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface detailsInterface {
    details: string,
    method: string,
    date: string,
    sign: string
} 


const initialState: detailsInterface= {
    details: 'Sachindu Kavishka',
    method: 'Schrödinger',
    date: '["Date: 2001/03/12", "Time: 2"]',
    sign: 'Pisces'
}


const detailSlice = createSlice({
    name: 'detailSlice',
    initialState,
    reducers: {
        setDetails: (state, action: PayloadAction<detailsInterface>) => {
            return action.payload
        }
    }
})


export {detailsInterface}
export const {setDetails} = detailSlice.actions
export default detailSlice.reducer


