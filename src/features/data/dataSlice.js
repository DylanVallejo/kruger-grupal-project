import { createSlice, } from "@reduxjs/toolkit";

export const dataSlice = createSlice({ 
    name: 'data',
    initialState: {
        value: null
    },
    reducers: {
        
        fetchDataMain: (state, {payload} ) =>{
            
            //steando el value con el fetch de la api 

            state.value = (payload);

        },
        //agreaga estrella al objeto inicial  
        concatApiAndLocal: (state, {payload} ) => {
            
            // const add = [...state.value]
            
            // state.push ( payload)
            console.log('hola payload')
            // state.value.push(action.payload)
            
            // (state, action) => {
            //     state.push({
            //       lnglat: action.payload,
            //     });
            //   }
            // state.push(action.payload)
            
            console.log(state.value)
            state.value = [payload, ...state.value ];
            
        },
        
    }
    
})

export const { fetchDataMain,concatApiAndLocal } = dataSlice.actions

//debo exportar el reducer de dataSlice
export default dataSlice.reducer