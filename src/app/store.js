import { configureStore } from '@reduxjs/toolkit'; 
// import {dataSlice} from '../features/data/dataSlice';
import dataReducer from '../features/data/dataSlice';


const store = configureStore({
    reducer: {
        
        //importando el reducer (taskReducer )
        //nos permite acceder a los valores
        data: dataReducer
    }
})

export default store;
