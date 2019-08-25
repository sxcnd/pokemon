import { UPDATE_MY_POKEMON, RELEASE_MY_POKEMON } from '../actions';

const initialState = [];

export const myPokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_MY_POKEMON:
            return [
                ...state,
                action.payload
            ];
        case RELEASE_MY_POKEMON:
            return state.filter(({_id}) => _id !== action.payload);
    
        default:
            return state;
    }
}