import { combineReducers } from '@reduxjs/toolkit'
import toDoReducer from './reducers/ToDoSlice'

export const rootReducer = combineReducers({
    //your TODO should go here
    toDoReducer
})

export type RootState = ReturnType<typeof rootReducer>
