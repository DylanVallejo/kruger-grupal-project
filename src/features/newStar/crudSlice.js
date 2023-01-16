import { createSlice } from '@reduxjs/toolkit'

export const crudSlice = createSlice({
    name:'crud',
    initialState: JSON.parse(window.localStorage.getItem('myStars')) || [],
    reducers:{
        addLocalStorage:(state, {payload}) => {
            
            // state.push(payload);
            console.log('local storage valor actual ')
        },
    }
})

export const { addLocalStorage} = crudSlice.actions;

export default crudSlice.reducer