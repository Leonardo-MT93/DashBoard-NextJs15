import { SimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PokemonsState {
    favorites: {
        [key: string]: SimplePokemon,
    }
}

// const getInitialState = (): PokemonsState => {
//     if (typeof localStorage === 'undefined') return { favorites: {} };
//     const favorites = JSON.parse(localStorage.getItem('favorites-pokemons') ?? '{}');
//     return favorites;
// }

const initialState: PokemonsState = {
    favorites: {}
}

const pokemonSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        setFavorites: (state, action: PayloadAction<{ [key: string]: SimplePokemon }>) => {
            state.favorites = action.payload;
        },
        toggleFavorite: (state, action: PayloadAction<SimplePokemon>) => {
            const pokemon = action.payload;
            const { id } = pokemon;
            if (!!state.favorites[id]) {
                delete state.favorites[id];
            } else {
                state.favorites[id] = pokemon;
            }

            localStorage.setItem('favorites-pokemons', JSON.stringify(state.favorites));

        }
    },
});


export const { toggleFavorite, setFavorites } = pokemonSlice.actions

export default pokemonSlice.reducer