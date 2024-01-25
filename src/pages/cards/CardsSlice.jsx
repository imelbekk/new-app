import { createSlice } from "@reduxjs/toolkit";

const initialState =[
    {id: 1, header: 'open', title: 'task 1', status: 'open' },
    {id: 2, header: 'pending', title: 'task 2', status: 'pending' },
    {id: 3, header: 'inproge', title: 'task 3', status: 'inproge' },
    {id: 4, header: 'progress', title: 'task 4', status: 'progress' }
]


const CardsSlice = createSlice({
    name: "cards",
    initialState,
    reducers:{
        cardsAdded(state, action){
            state.push(action.payload)
        },
        cardDelete(state,action){
            let index = action.payload
            state.splice(index, 1)
        }
    }
})

export const {cardsAdded, cardDelete} = CardsSlice.actions
export default CardsSlice.reducer
