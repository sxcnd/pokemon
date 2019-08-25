import { Card, CardActions, CardContent, CardMedia, Typography, List, ListItem, ListItemText } from '@material-ui/core';
import React from 'react';
import ViewPokemonButton from './ViewPokemonButton';
import CatchPokemonButton from './CatchPokemonButton';
import ReleasePokemonButton from './ReleasePokemonButton';
import { useSelector } from 'react-redux';

export default ({ pokemon, withoutView = false, catchable = false, releaseable = false, withDetail = false, ...props }) => {
    const myPokemon = useSelector(state => state.myPokemon);
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
                    variant="subtitle1"
                >
                    {`Owned: ${myPokemon.filter(({ name }) => name === pokemon.name).length}`}
                </Typography>
                {
                    withDetail &&
                    <div>
                        <Typography
                            variant="subtitle1"
                        >
                            Moves:
                        </Typography>
                        <List dense>
                            {
                                pokemon.moves.map(({ move: { name } }, i) => (
                                    <ListItem key={i}>
                                        <ListItemText primary={name} />
                                    </ListItem>
                                ))
                            }
                        </List>
                        <Typography
                            variant="subtitle1"
                        >
                            Types:
                        </Typography>
                        <List dense>
                            {
                                pokemon.types.map(({ type: { name } }, i) => (
                                    <ListItem key={i}>
                                        <ListItemText primary={name} />
                                    </ListItem>
                                ))
                            }
                        </List>
                    </div>
                }
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