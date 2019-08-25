import React from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

export default withRouter(({pokemon, location, history, staticContext, action, redirect = '/', ...props}) => {
    const dispatch = useDispatch();
    const dispatchAndRedirectTo = pokemon => () => {
        dispatch(action(pokemon));
        history.push(`${redirect.replace(':name', pokemon.name)}`);
    }
    return (
        <Button {...props} onClick={dispatchAndRedirectTo(pokemon)}/>
    );
});