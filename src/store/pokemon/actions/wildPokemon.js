const Pokedex = require('pokedex-promise-v2');
const P = new Pokedex();
const rpp = 10;

export const UPDATE_WILD_POKEMON = 'UPDATE_WILD_POKEMON';

export const updateWildPokemon = payload => {
    return {
        type: UPDATE_WILD_POKEMON,
        payload
    };
}

export const fetchWildPokemon = (offset = 0) => async (dispatch, getState) => {
    try {
        const {results: pokemonsList} = await P.getPokemonsList({
            limit: rpp - 1,
            offset
        });
        const results = await Promise.all(pokemonsList.map(pokemon => P.getPokemonByName(pokemon.name)));
        dispatch(updateWildPokemon(results));
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
};

export const addWildPokemon = async (dispatch, getState) => {
    try {
        const {
            wildPokemon
        } = getState();
        const {results: pokemonsList} = await P.getPokemonsList({
            limit: rpp - 1,
            offset: wildPokemon.length + 1
        });
        const results = await Promise.all(pokemonsList.map(pokemon => P.getPokemonByName(pokemon.name)));
        dispatch(updateWildPokemon([
            ...wildPokemon,
            ...results
        ]));
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}