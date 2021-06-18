import React from 'react'
import { useFormik } from 'formik'
import { Button, Grid, Input, Link, makeStyles } from '@material-ui/core'
import { CenterFocusWeakTwoTone } from '@material-ui/icons';
const initialValues= {
    username: '',
    password: '',
    remember: false
}
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


                <label  htmlFor='username'>Username:</label>
                <Input type="text" id='username' name='username' onChange={formik.handleChange} value={formik.values.username} placeholder="Username" inputProps={{ 'aria-label': 'description' }} />
                {formik.errors.username ? <div className="errors">{formik.errors.username}</div> : null}
                <br />
                </div>
                <div className='form-control'>
                <label  htmlFor='password'>Password:</label>
                <Input type="text" id='password' name='password' onChange={formik.handleChange} value={formik.values.password} placeholder="Password" inputProps={{ 'aria-label': 'description' }} />
                {formik.errors.password ? <div className="errors">{formik.errors.password}</div> : null}
                <br />
                </div>
                <div className='form-control'>
                <label  htmlFor='remember'>Remember me</label>
                
                <input type="checkbox" id='checkbox' name='remember' onChange={formik.handleChange} />
                <br />
                </div>

                <Button type="submit" variant="contained" color="primary" className={classes.button}>
                Submit
                </Button>

            </form>


              <Link href="/register" className={classes.link}>
                Don't have account? Register now!
              </Link>

        </div>
    )
}

export default LoginForm