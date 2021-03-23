import React from 'react'
import { useFormik } from 'formik'
const initialValues= {
    username: 'Username1',
    password: 'Password1',
    firstName: 'firstName1',
    lastName: 'lastName1',
    city: 'City1',
    address: 'Address1'
}
const onSubmit= values => {console.log('formData', values)}
const validate= values => {
    let errors = {}
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
        <div class="form-style-3">
             <form onSubmit={formik.handleSubmit}>
                <label  htmlFor='username'>Username</label>
                <input type="text" id='username' name='username' onChange={formik.handleChange} value={formik.values.username} />
                <br />
                <label  htmlFor='password'>Password</label>
                <input type="password" id='password' name='password' onChange={formik.handleChange} value={formik.values.password} />
                <br />
                <label  htmlFor='firstName'>firstName</label>
                <input type="text" id='firstName' name='firstName' onChange={formik.handleChange} value={formik.values.firstName} />
                <br />
                <label  htmlFor='lastName'>lastName</label>
                <input type="text" id='lastName' name='lastName' onChange={formik.handleChange} value={formik.values.lastName} />
                <br />
                <label  htmlFor='city'>city</label>
                <input type="text" id='city' name='city' onChange={formik.handleChange} value={formik.values.city} />
                <br />
                <label  htmlFor='address'>address</label>
                <input type="text" id='address' name='address' onChange={formik.handleChange} value={formik.values.address} />
                <br />
                <button type="submit">Submit</button>

            </form>
        </div>
    )
}

export default RegistrationForm


