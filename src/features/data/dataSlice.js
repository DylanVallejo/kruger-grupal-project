import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({ 
    name: 'data',
    initialState: {
        value: null
    },
    reducers: {
        
        fetchDataMain: (state, {payload} ) =>{
            // console.log('payload')
            // console.log(payload)
            state.value = (payload);
            // console.log(action)
            
            // console.log(state)
            // state = (action.payload);
            // [...state, action.payload];
        },
        
    }
    
})

export const { fetchDataMain } = dataSlice.actions

//debo exportar el reducer de dataSlice
export default dataSlice.reducer