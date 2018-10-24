import React from 'react'
import { navigate } from "gatsby"
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Tabs, Tab, Button, Icon, Grid } from '@material-ui/core';

const NavBar = () => {

    return(
        <div>
            <Grid container >
                <AppBar position="static">
                    <Toolbar>

                        <Grid item xs={0}>
                            <Button>
                                {/* This only works if you have added the Material Icons stylesheet link in ../public/index.html */}
                                <Icon >menu</Icon>
                            </Button>
                        </Grid>
                        
                        <Grid item xs={8}>
                            <Typography variant="title" color="inherit">
                                Scriptient
                            </Typography>
                        </Grid>
                        
                        <Grid item xs={4}>
                            <Typography variant="title" color="inherit" align="right">
                                username
                            </Typography>
                        </Grid>
                        
                    </Toolbar>
                </AppBar>
            </Grid>
        </div>
    )

}

export default NavBar;