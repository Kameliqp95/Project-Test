import React from 'react'
import { useFormik } from 'formik'
const initialValues= {
    username: '',
    password: ''
}
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
    return (
        <div className="form-style-3">
            <form onSubmit={formik.handleSubmit}>
            <div className='form-control'>
                <label  htmlFor='username'>Username</label>
                <input type="text" id='username' name='username' onChange={formik.handleChange} value={formik.values.username} />
                {formik.errors.username ? <div className="errors">{formik.errors.username}</div> : null}
                <br />
                </div>
                <div className='form-control'>
                <label  htmlFor='password'>Password</label>
                <input type="password" id='password' name='password' onChange={formik.handleChange} value={formik.values.password} />
                {formik.errors.password ? <div className="errors">{formik.errors.password}</div> : null}
                <br />
                </div>
                <button type="submit">Submit</button>

            </form>
        </div>
    )
}

export default LoginForm