'use client'
import { Provider } from "react-redux"
import { store } from "."
import { useEffect } from "react"
import { SimplePokemon } from "@/pokemons/interfaces/simple-pokemon"
import { setFavorites } from "./pokemons/pokemons"

interface Props {
    children: React.ReactNode
}


export const Providers = ({ children }: Props) => {

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites-pokemons') ?? '{}');
    store.dispatch(setFavorites(favorites as { [key: string]: SimplePokemon }));
  }, []);

  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}
