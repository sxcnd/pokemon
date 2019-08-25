import { Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import React from 'react';
import ViewPokemonButton from './ViewPokemonButton';
import CatchPokemonButton from './CatchPokemonButton';
import ReleasePokemonButton from './ReleasePokemonButton';

export default ({ pokemon, withoutView = false, catchable = false, releaseable = false, ...props }) => {
    return (
        <Card>
            <CardMedia
                component="img"
                image={pokemon.sprites.front_default}
                title={pokemon.name}
            >
            </CardMedia>
            <CardContent>
                <Typography
                    variant="h6"
                    gutterBottom
                >
                    {pokemon.nickname || pokemon.name}
                </Typography>
                <Typography
                    variant="body1"
                    gutterBottom
                >
                    lorem ipsum dolor sit amet
                </Typography>
            </CardContent>
            <CardActions>
                {
                    !withoutView &&
                    <ViewPokemonButton
                        pokemon={pokemon}
                        variant="contained"
                        color="default"
                    >
                        View
                    </ViewPokemonButton>
                }
                {
                    (catchable && !pokemon._id) &&
                    <CatchPokemonButton
                        pokemon={pokemon}
                        variant="contained"
                        color="default"
                    >
                        Catch
                    </CatchPokemonButton>
                }
                {
                    (releaseable || pokemon._id) &&
                    <ReleasePokemonButton
                        pokemon={pokemon}
                        variant="contained"
                        color="default"
                    >
                        Release
                    </ReleasePokemonButton>
                }
            </CardActions>
        </Card>
    );
}