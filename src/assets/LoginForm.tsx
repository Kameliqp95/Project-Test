import React from 'react'
import { useFormik } from 'formik'
import { Button, Checkbox, createMuiTheme, Grid, Input, Link, makeStyles, TextField, ThemeProvider } from '@material-ui/core'
import { CenterFocusWeakTwoTone } from '@material-ui/icons';
const initialValues= {
    username: '',
    password: '',
    remember: false
}

const theme = createMuiTheme({

});
const useStyles = makeStyles({
      link: {
        textAlign: 'center',
      },
      button: {
        margin: '0px'
      },
      input: {
        margin: '5px',
      },
});

const onSubmit= (values: any) => {console.log('formData', values)}
const validate= (values: { username: any; password: any }) => {
    let errors: any = {}
    if(!values.username) {
        errors.username='requiered username'
    }
    if(!values.password) {
        errors.password='requiered password'
    }
    return errors
            } 
function LoginForm() {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
     })
        console.log('formValues', formik.values)
        console.log('formErrors', formik.errors)
        const classes = useStyles();

        const styles = (theme: { spacing: { unit: any; }; }) => ({
            button: {
              margin: theme.spacing.unit,
            },
            input: {
              display: 'none',
            },
          });

    return (
      
        <div className="form-style-3">
            <form onSubmit={formik.handleSubmit} autoComplete="off">
            <div className='form-control'>

            <ThemeProvider theme={theme}>
        <TextField
         
          label="Username"
          variant="outlined"
          id="mui-theme-provider-outlined-input"
          name='username' 
          type="text"
          onChange={formik.handleChange} 
          value={formik.values.username}
        />
  <br />
  {formik.errors.username ? <div className="errors">{formik.errors.username}</div> : null}
  <br />

        <TextField
         
          label="Password"
          variant="outlined"
          id="mui-theme-provider-outlined-input"
          name='password' 
          type="password"
          onChange={formik.handleChange} 
          value={formik.values.password}
        />
  <br />
  {formik.errors.password ? <div className="errors">{formik.errors.password}</div> : null}
  <br />

  </ThemeProvider>
                <div className='form-control'>
                <label  htmlFor='remember'>Remember me</label>
                
                <Checkbox
                id='checkbox' 
                name='remember' 
                onChange={formik.handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />

                </div>

                <Button type="submit" variant="contained" color="primary" className={classes.button}>
                Submit
                </Button>
</div>
            </form>


              <Link href="/register" className={classes.link}>
                Don't have account? Register now!
              </Link>

        </div>
    )
}

export default LoginForm