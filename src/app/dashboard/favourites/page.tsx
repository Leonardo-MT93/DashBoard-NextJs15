import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Favoritos',
  description: 'Listado de Pokemons favoritos',
}


 
const getPokemons = async( limit = 20, offset = 151 ): Promise<SimplePokemon[]> => {
    const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then( res => res.json());
    const pokemons = data.results.map( pokemon => ({
      id: pokemon.url.split('/').filter(Boolean).pop() || '0',
      name: pokemon.name,
    }));

    // throw new Error('Error al obtener los pokemons');

    return pokemons;
}




export default async function PokemonsPage() {

  return (
    <div className="flex flex-col">

      <span className="text-5xl my-2">Pokemons Favoritos <small className="text-gray-500">Global State</small></span>
      
      <PokemonGrid pokemons={[]} />
    </div>
  )
}
