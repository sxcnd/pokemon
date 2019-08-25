import { Grid } from '@material-ui/core';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BottomNavigation, PokemonList, PokemonView } from './components';
import { makeStyles } from '@material-ui/styles';

const styles = {
  marginBottom: {
    marginBottom: 60
  }
}

const useStyles = makeStyles(styles);

const App = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid
        className={classes.marginBottom}
        container
        direction="column"
        justify="flex-start"
        alignContent="flex-start"
      >
        <Grid
          item
          xs={12}
        >
          <Switch>
            <Route exact strict path="/" render={routeProps => (<PokemonList {...routeProps} wild />)} />
            <Route exact strict path="/myPokemon" render={routeProps => <PokemonList {...routeProps} />} />
            <Route exact strict path="/:name" render={routeProps => <PokemonView {...routeProps} catched />} />
          </Switch>
        </Grid>
      </Grid>
      <BottomNavigation />
    </div>
  );
}

export default App;
