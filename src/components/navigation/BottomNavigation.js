import React from 'react';
import MuiBottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { makeStyles } from '@material-ui/styles';
import {withRouter} from 'react-router-dom';

const styles = {
    stickToBottom: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
    },
};

const useStyles = makeStyles(styles);

export default withRouter(({history, location, match, ...props}) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(location.pathname || "/");

    return (
        <MuiBottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
                history.push(newValue);
            }}
            showLabels
            className={classes.stickToBottom}
        >
            <BottomNavigationAction label="Pokemon" value="/" icon={<RadioButtonUncheckedIcon />} />
            <BottomNavigationAction label="My Pokemon" value="/myPokemon" icon={<RadioButtonUncheckedIcon />} />
        </MuiBottomNavigation>
    );
})
