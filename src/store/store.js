import { configureStore } from '@reduxjs/toolkit'
import speciesSlice from '../features/species/speciesSlice'

export const store = configureStore({
  reducer: {
    species:speciesSlice,
  },  
})

