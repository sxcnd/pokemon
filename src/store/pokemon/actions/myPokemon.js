const uuidv4 = require('uuid/v4');

export const UPDATE_MY_POKEMON = 'UPDATE_MY_POKEMON';
export const RELEASE_MY_POKEMON = 'RELEASE_MY_POKEMON';
export const RELEASE_ALL_MY_POKEMON = 'RELEASE_ALL_MY_POKEMON';

export const updateMyPokemon = payload => {
    return {
        type: UPDATE_MY_POKEMON,
        payload: {
            ...payload,
            _id: uuidv4(),
            nickname: uuidv4()
        }
    };
};

export const releaseMyPokemon = pokemon => {
    return {
        type: RELEASE_MY_POKEMON,
        payload: pokemon._id
    };
};