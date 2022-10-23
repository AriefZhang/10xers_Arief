import { configureStore  } from "@reduxjs/toolkit"
import tokenReducer from './reducer/token'

export const store = configureStore({
  reducer: {
    tokenReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  })
})
