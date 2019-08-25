import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { myPokemonReducer, pokemonReducer, wildPokemonReducer } from './pokemon';


const rootReducer = combineReducers({
    myPokemon: myPokemonReducer,
    pokemon: pokemonReducer,
    wildPokemon: wildPokemonReducer
});

const configureStore = () => {
    const middlewares = [thunkMiddleware];
    const middleWareEnhancer = applyMiddleware(...middlewares);

    const store = createStore(
        rootReducer,
        composeWithDevTools(middleWareEnhancer)
    );

    return store;
}

export default configureStore;
