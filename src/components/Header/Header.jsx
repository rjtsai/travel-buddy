import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles';

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography className={classes.title} variant="h5">
                    Travel Buddy
                </Typography>
                <Box display="flex">
                    <Typography className={classes.title} variant="h5">
                        Explore new places
                    </Typography>
                    {/*<Autocomplete>*/}
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>

                            </div>
                            <InputBase placeholder='Search...' classes={{root: classes.inputRoot, input: classes.inputInput}} />
                        </div>
                    {/*</Autocomplete>*/}
                </Box>
            </Toolbar>

        </AppBar>
    );
}

export default Header;