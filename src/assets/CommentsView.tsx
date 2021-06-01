import React from 'react'
import { useFormik } from 'formik'
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';


const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', 
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(-8,3, 0, 23),
    },
    name: {
        margin: theme.spacing(0, 0, 0,0),
      },
    multiline: {
        margin: theme.spacing(0, 17, 0,0),
      },
      cancel: {
        margin: theme.spacing(-13, 10, 0,40),  
      },
      icons: {
        margin: theme.spacing(0, 20, 0,0),
      }, 
      icons_style: {
        fontSize: 'small',
      } 
  }));


function CommentsView() {
   
    const classes = useStyles();
    return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>

          <form className={classes.form} noValidate>
          


     <div className={classes.name}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
          <Avatar alt="K" src="/static/images/avatar/1.jpg" />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Name" />
          </Grid>
        </Grid>
      </div>
      <div className={classes.icons}>
         <BottomNavigationAction className={classes.icons_style} label="Recents" value="recents" icon={<RestoreIcon fontSize="small" />} />
        <BottomNavigationAction className={classes.icons_style} label="Favorites" value="favorites" icon={<FavoriteIcon fontSize="small" />} />
    </div>
<div className={classes.multiline}>
<TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Text here..."
          variant="outlined"
        />
</div>          
            <Button variant="contained" color="primary" type="submit" className={classes.submit}>
            Send
            </Button>
            <Button variant="contained" color="secondary" className={classes.cancel}>
            Cancel
            </Button>

            <Grid container>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
        </Box>
      </Container>
    );

}

export default CommentsView