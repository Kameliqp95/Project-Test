import React from 'react'
import { useFormik } from 'formik'
import { makeStyles, createStyles, Theme, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';

function ProfileView() {
    const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
    }),
  );
  const theme = createMuiTheme({

});
    const classes = useStyles();
    return (

        <div className={classes.root}>
           <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            Avatars
          </Grid>
          <Grid item xs={6} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                Personal information
                <Grid item xs={9} sm container>
                <Grid item xs={3}>


<ThemeProvider theme={theme}>
    <TextField
         
         label="First Name"
         variant="outlined"
         id="mui-theme-provider-outlined-input"
         name='firstName' 
         type="text"
       />

 </ThemeProvider>
              </Grid>
              <Grid item xs={3}>

<TextField
         
         label="Last Name"
         variant="outlined"
         id="mui-theme-provider-outlined-input"
         name='lasttName' 
         type="text"
       />
              </Grid>
              </Grid>
              <Grid item xs={9} sm container>
              <Grid item xs={3}>

<TextField
         
         label="Email Address"
         variant="outlined"
         id="mui-theme-provider-outlined-input"
         name='emailAddress' 
         type="text"
       />
       
              </Grid>
              <Grid item xs={3}>

<TextField
         
         label="City"
         variant="outlined"
         id="mui-theme-provider-outlined-input"
         name='city' 
         type="text"
       />
       
              </Grid>
        
              </Grid>
              </Grid> 
            </Grid>
          </Grid>
        </Grid>
      </Paper>

            </div>
    )
}

export default ProfileView

function useStyles() {
    throw new Error('Function not implemented.');
}
