import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface IState {
    light: boolean;
}

const initialState:IState = {
    light: false
}


export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setLight: (state, action:PayloadAction<true>) => {
            state.light = action.payload
        },
        setDark: (state, action:PayloadAction<false>) => {
            state.light = action.payload
        }
    }
})
export const { setLight, setDark } = themeSlice.actions;

export default themeSlice.reducer;


