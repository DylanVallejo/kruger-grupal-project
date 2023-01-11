import { configureStore } from '@reduxjs/toolkit'; 
import dataReducer from '../features/data/dataSlice';
const space = configureStore({
    reducer: {
        
        //importando el reducer (taskReducer )
        //nos permite acceder a los valores
        data: dataReducer,
    }
})

export default space;
