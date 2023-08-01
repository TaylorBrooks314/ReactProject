import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    item:"",
    cuisine:"",
    diet:"",
    type:""
}

const inputSlice = createSlice({
    name: 'input',
    initialState,
    reducers: {
        // dispatch(setInput(evt.target.value))
        setItem: (state, action) => {
            // action.payload.toLowerCase()
            state.item = action.payload
            console.log(action.payload)
        },
        setCuisine: (state, action) => {
            state.cuisine = action.payload
        },
        setDiet: (state, action) => {
            state.diet = action.payload
        },
        setType:(state ,action) =>{
            state.type = action.payload
            console.log(action.payload)
        }
    }
})

export default inputSlice.reducer

export const {setItem, setCuisine, setDiet, setType}= inputSlice.actions