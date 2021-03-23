import React from 'react'
import { useFormik } from 'formik'
const initialValues= {
    username: 'Username1',
    password: 'Password1'
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
    return (
        <div class="form-style-3">
            <form onSubmit={formik.handleSubmit}>
                <label  htmlFor='username'>Username</label>
                <input type="text" id='username' name='username' onChange={formik.handleChange} value={formik.values.username} />
                <br />
                <label  htmlFor='password'>Password</label>
                <input type="password" id='password' name='password' onChange={formik.handleChange} value={formik.values.password} />
                <br />
                <button type="submit">Submit</button>

            </form>
        </div>
    )
}

export default LoginForm