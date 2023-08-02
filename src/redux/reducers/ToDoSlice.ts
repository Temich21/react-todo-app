import { IToDo } from "@/models/IToDo"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: IToDo[] = []

export const toDoSlice = createSlice({
    name: 'toDo',
    initialState,
    reducers: {
        addToDo(state, action: PayloadAction<IToDo>) {
            state.push(action.payload)
        },
        removeFromToDo(state, action: PayloadAction<number>) {
            state.splice(action.payload, 1)
        }
    }
})

export default toDoSlice.reducer