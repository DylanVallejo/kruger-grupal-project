import { createSlice } from "@reduxjs/toolkit";

export const starSlice = createSlice({ 
    name: 'star',
    initialState: {
        value: null
    },
    reducers: {
        
        localStar: (state, {payload} ) =>{
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

export const { localStar } = starSlice.actions

//debo exportar el reducer de dataSlice
export default starSlice.reducer