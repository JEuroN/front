import { configureStore } from '@reduxjs/toolkit'
import ejemploReducer from './reducerEjemplo'

export default configureStore({
    reducer: {
        ejemplo: ejemploReducer
    }
})
