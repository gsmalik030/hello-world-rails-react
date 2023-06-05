import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = "http://localhost:3000/api/v1/greetings"

const initialState = {
    url: ""
}

export const fetchGreeting = createAsyncThunk(
    "greeting/fetchGreeting",
    async () => {
        const response = await fetch(url)
        const data = await response.json()
        return data
    }
)

const greetingSlice = createSlice({
    name: "greeting",
    initialState,
    reducers: {
        setUrl: (state, action) => {
            state.url = action.payload
        }
    },
    extraReducers: {
        [fetchGreeting.fulfilled]: (state, action) => {
            state.url = action.payload
        }
    }
})

export const { setUrl } = greetingSlice.actions
export default greetingSlice.reducer