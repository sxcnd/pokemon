import React from 'react';
import PokemonButton from './PokemonButton';
import { updatePokemon } from '../../store/pokemon';

export default props => (
    <PokemonButton
        {...props}
        action={updatePokemon}
        redirect="/:name"
    >
        View
    </PokemonButton>
);