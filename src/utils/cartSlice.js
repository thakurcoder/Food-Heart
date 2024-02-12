import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    // it need some configration
    name:"cart",
    initialState : {
        item : []
    },
    reducers:{
        additem:(state, action)=>{
            state.item.push(action.payload)
        },
        removeitem:(state,action)=>{
            const index = state.item.findIndex(item=> item.id === action.payload.id);
            if (index!==-1){
                state.item.splice(index,1)
            }
        },
        clearitem:(state)=>{
            state.item.length = 0
        }
        
    }
})

export const {additem,removeitem,clearitem} = cartSlice.actions
export default cartSlice.reducer;