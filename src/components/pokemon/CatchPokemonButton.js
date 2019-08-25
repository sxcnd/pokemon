import React from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateMyPokemon } from '../../store/pokemon';

export default withRouter(({pokemon, location, history, staticContext, ...props}) => {
    const dispatch = useDispatch();
    const dispatchAndRedirectTo = pokemon => () => {
        const chance = Math.random();
        console.log(chance);
        if (chance < .5) {
            console.log('catched');
            dispatch(updateMyPokemon(pokemon));
            history.push('/myPokemon');
        }
    }
    return (
        <Button {...props} onClick={dispatchAndRedirectTo(pokemon)}/>
    );
});