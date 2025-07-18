import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Listado de Pokemons',
  description: 'Listado de Pokemons',
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

    const pokemons = await getPokemons(100);
  return (
    <div className="flex flex-col">

      <span className="text-5xl my-2">Listado de Pokemons <small className="text-gray-500">estático</small></span>
      
      <PokemonGrid pokemons={pokemons} />
    </div>
  )
}
