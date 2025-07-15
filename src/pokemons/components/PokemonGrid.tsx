import { SimplePokemon } from "../interfaces/simple-pokemon";
import { PokemonCard } from "./PokemonCard";


interface Props {
    pokemons: SimplePokemon[]
}

export const PokemonGrid = ({ pokemons }: Props) => {
    return (
        <div className="flex flex-wrap gap-10 items-center justify-center">
        {
          pokemons.map( pokemon => (
            // <div className="flex flex-col items-center justify-center border border-gray-300 rounded-md p-2" key={pokemon.id}>
            //   <Image
            //     key={pokemon.id}
            //     src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
            //     alt={pokemon.name}
            //     width={100}
            //     height={100}
            //   />
            //   <p>{pokemon.name}</p>
            //   <p>{pokemon.id}</p>
            // </div>
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))
        }

      </div>
    )
}