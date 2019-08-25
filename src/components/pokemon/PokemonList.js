import { Button, ButtonGroup, Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWildPokemon, addWildPokemon } from '../../store/pokemon';
import PokemonCard from './PokemonCard';

export default ({ wild = false, ...props }) => {
    const dispatch = useDispatch();
    const pokemonsList = useSelector(state => {
        return wild ? state.wildPokemon : state.myPokemon;
    });
    useEffect(() => {
        if (wild && pokemonsList.length === 0) {
            dispatch(fetchWildPokemon());
        }
    }, []);
    return (
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
                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                    spacing={1}
                >
                    {
                        pokemonsList.map(pokemon => (
                            <Grid
                                key={pokemon._id || pokemon.id}
                                item
                                xs={6}
                            >
                                <PokemonCard
                                    pokemon={pokemon}
                                    releaseable={!wild}
                                />
                            </Grid>
                        ))
                    }
                </Grid>
                {
                    wild &&
                    <Grid
                        container
                        spacing={1}
                        direction="row"
                        alignItems="center">
                        <Grid
                            item
                            xs={12}
                        >
                            <ButtonGroup
                                fullWidth
                                variant="contained"
                                aria-label="outlined primary button group"
                            >
                                <Button onClick={() => dispatch(addWildPokemon)}>More</Button>
                            </ButtonGroup>
                        </Grid>
                    </Grid>
                }
            </Grid>
        </Grid>
    );
};