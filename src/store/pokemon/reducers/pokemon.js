import { UPDATE_POKEMON } from '../actions';

const initialState = {};

export const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_POKEMON:
            return action.payload;
        default:
            return state;
    }
}