import React from 'react';
import PokemonCard from './PokemonCard';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import { Redirect } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

export default () => {
    const pokemon = useSelector(state => {
        return state.pokemon;
    });
    return !_.get(pokemon, ['name'], null) ? (
        <Redirect to="/" />
    ) : (
        <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
        >
            <Grid
                item
                xs={12}
            >
                <PokemonCard
                    pokemon={pokemon}
                    withoutView
                    catchable
                />
            </Grid>
        </Grid>
    );
}