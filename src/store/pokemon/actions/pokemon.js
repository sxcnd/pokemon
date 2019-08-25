const Pokedex = require('pokedex-promise-v2');
const P = new Pokedex();

export const UPDATE_POKEMON = 'UPDATE_POKEMON';

export const updatePokemon = payload => {
    return {
        type: UPDATE_POKEMON,
        payload
    };
};