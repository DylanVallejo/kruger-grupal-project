import { configureStore } from '@reduxjs/toolkit';
// import {dataSlice} from '../features/data/dataSlice';
import dataReducer from '../features/data/dataSlice';
import starReducer from '../features/newStar/starSlice';
import crudReducer from '../features/newStar/crudSlice';


const store = configureStore({
    reducer: {

        //importando el reducer (taskReducer )
        //nos permite acceder a los valores
        data: dataReducer,
        //taryendo la data de star creada
        star: starReducer,
        //creando un nuevo reducer para local storage
        crud: crudReducer,
    }
})

export default store;
