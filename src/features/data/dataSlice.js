import { createAsyncThunk, createSlice, } from "@reduxjs/toolkit";
import axios from "axios";

const mainUrl = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY_NASA}&count=6`;

const initialState = {
    entities: [],
    loading: false
}
export const getImages = createAsyncThunk(
    "images/getImages",
    async () => {
        const response = await axios.get(mainUrl)
        return response.data
    }
)

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        //agreaga estrella al objeto inicial  
        concatApiAndLocal: (state, { payload }) => {

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
            state.value = [payload, ...state.value];

        },

    },
    extraReducers: {
        [getImages.pending]: (state) => {
            state.loading = true
        },
        [getImages.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.entities = payload
        },
        [getImages.rejected]: (state) => {
            state.loading = false
        },
    }

})



export const selectAllImages = state => state.data.images

export const selectImagesById = (state, postId) =>
    state.data.images.find(post => post.id === postId)

export const { fetchDataMain, concatApiAndLocal } = dataSlice.actions

//debo exportar el reducer de dataSlice
export default dataSlice.reducer