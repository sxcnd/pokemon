import { UPDATE_WILD_POKEMON } from '../actions';

const initialState = [];

export const wildPokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_WILD_POKEMON:
            return action.payload;
    
        default:
            return state;
    }
}