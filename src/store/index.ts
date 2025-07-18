import { configureStore, Middleware } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import { useDispatch, useSelector } from 'react-redux'
import pokemonReducer from './pokemons/pokemons'
import { localStorageMiddleware } from './middlewares/localstorage-middleware'


export const store = configureStore({
  reducer: {
    count: counterReducer,
    pokemons: pokemonReducer
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware as Middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()