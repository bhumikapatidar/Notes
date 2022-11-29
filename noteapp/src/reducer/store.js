import {configureStore} from '@reduxjs/toolkit';
import notesReducer from './notesApp'

const store = configureStore({
    reducer: notesReducer,
})

export default store