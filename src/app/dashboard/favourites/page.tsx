import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";
import { PokemonFavourites } from "@/pokemons/components/PokemonFavourites";
import { useAppSelector } from "@/store";
import { Metadata } from "next";
import { IoHeartOutline } from "react-icons/io5";

export const metadata: Metadata = {
  title: 'Favoritos',
  description: 'Listado de Pokemons favoritos',
}




export default async function PokemonsPage() {


  return (
    <div className="flex flex-col">

      <span className="text-5xl my-2">Pokemons Favoritos <small className="text-gray-500">Global State</small></span>
      <PokemonFavourites />
    </div>
  )
}


