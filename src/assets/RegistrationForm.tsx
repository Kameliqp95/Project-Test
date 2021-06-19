import React from 'react'
import { useFormik } from 'formik'
import { Button, createMuiTheme, FormControl, Input, InputLabel, TextField, ThemeProvider } from '@material-ui/core'
const initialValues= {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    city: '',
    address: ''
}
const theme = createMuiTheme({

  });
const onSubmit= (values: any) => {console.log('formData', values)}
const validate= (values: { username: any; password: any; firstName: any; lastName: any; city: any; address: any }) => {
    let errors: any = {}
    if(!values.username) {
        errors.username='requiered username'
    }
    if(!values.password) {
        errors.password='requiered password'
    }
    if(!values.firstName) {
        errors.firstName='requiered firstname'
    }
    if(!values.lastName) {
        errors.lastName='requiered lastname'
    }
    if(!values.city) {
        errors.city='requiered city'
    }
    if(!values.address) {
        errors.address='requiered address'
    }
    return errors
            } 
function RegistrationForm() {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
     })
        console.log('formValues', formik.values)
        console.log('formErrors', formik.errors)
    return (
        <div className="form-style-3">
             <form onSubmit={formik.handleSubmit}>

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
<TextField
         
         label="First Name"
         variant="outlined"
         id="mui-theme-provider-outlined-input"
         name='firstName' 
         type="First Name"
         onChange={formik.handleChange} 
         value={formik.values.firstName}
       />
  <br />
  {formik.errors.firstName ? <div className="errors">{formik.errors.firstName}</div> : null}
  <br />
<TextField
         
         label="Last Name"
         variant="outlined"
         id="mui-theme-provider-outlined-input"
         name='lastName' 
         type="Last Name"
         onChange={formik.handleChange} 
         value={formik.values.lastName}
       />
  <br />
  {formik.errors.lastName ? <div className="errors">{formik.errors.lastName}</div> : null}
  <br />

<TextField
         
         label="City"
         variant="outlined"
         id="mui-theme-provider-outlined-input"
         name='city' 
         type="City"
         onChange={formik.handleChange} 
         value={formik.values.city}
       />
  <br />
  {formik.errors.city ? <div className="errors">{formik.errors.city}</div> : null}
  <br />
<TextField
         
         label="Address"
         variant="outlined"
         id="mui-theme-provider-outlined-input"
         name='address' 
         type="Address"
         onChange={formik.handleChange} 
         value={formik.values.address}
       />
  <br />
  {formik.errors.address ? <div className="errors">{formik.errors.address}</div> : null}
  <br />
     </ThemeProvider>


                <Button type="submit" variant="contained" color="primary" >
                Submit
                </Button>

            </form>
        </div>
    )
}

export default RegistrationForm


