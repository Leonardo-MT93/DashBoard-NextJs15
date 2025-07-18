'use client'
import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid";
import { useEffect, useState } from "react";
import { IoHeartOutline } from "react-icons/io5";

export const PokemonFavourites = () => {

    const favorites = useAppSelector(state => state.pokemons);

    const favouritesPokemons = Object.values(favorites);

    const [pokemons, setPokemons] = useState(favouritesPokemons);

    useEffect(() => {
        setPokemons(favouritesPokemons);
    }, [favorites]);

  return (
    // <PokemonGrid pokemons={favouritesPokemons} />
    <>
        {
            pokemons.length === 0 
            ? (<NoFavorites />) 
            : (<PokemonGrid pokemons={pokemons} />)
        }
    </>
    
  )
}

export const NoFavorites = () => {
    return (
        
      <div className="flex flex-col h-[50vh] items-center justify-center">
        <IoHeartOutline size={100} className="text-red-500" />
        <span className="text-5xl my-2">No hay pokemons favoritos</span>
      </div>
    )
  }