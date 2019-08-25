import React from 'react';
import PokemonButton from './PokemonButton';
import { releaseMyPokemon } from '../../store/pokemon';

export default props => (
    <PokemonButton
        {...props}
        action={releaseMyPokemon}
        redirect="/myPokemon"
    >
        Release
    </PokemonButton>
);