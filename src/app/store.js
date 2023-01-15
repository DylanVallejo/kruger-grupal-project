import { configureStore } from '@reduxjs/toolkit';
// import {dataSlice} from '../features/data/dataSlice';
import dataReducer from '../features/data/dataSlice';
import starReducer from '../features/newStar/starSlice';


const store = configureStore({
    reducer: {

        //importando el reducer (taskReducer )
        //nos permite acceder a los valores
        data: dataReducer,
        //taryendo la data de star creada
        star: starReducer
    }
})

export default store;
