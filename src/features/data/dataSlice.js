import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({ 
    name: 'data',
    initialState: {
        value: 1  
    },
    reducers: {
        
        fetchData: (state,action) =>{
            state.value += 1
        }
        
    }
    
})

export const { fetchData } = dataSlice.actions

//debo exportar el reducer de taskSlice
export default dataSlice.reducer