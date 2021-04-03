import React from 'react'
import { useFormik } from 'formik'
const initialValues= {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    city: '',
    address: ''
}
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
                <div className='form-control'>
                <label  htmlFor='firstName'>firstName</label>
                <input type="text" id='firstName' name='firstName' onChange={formik.handleChange} value={formik.values.firstName} />
                {formik.errors.firstName ? <div className="errors">{formik.errors.firstName}</div> : null}
                <br />
                </div>
                <div className='form-control'>
                <label  htmlFor='lastName'>lastName</label>
                <input type="text" id='lastName' name='lastName' onChange={formik.handleChange} value={formik.values.lastName} />
                {formik.errors.lastName ? <div className="errors">{formik.errors.lastName}</div> : null}
                <br />
                </div>
                <div className='form-control'>
                <label  htmlFor='city'>city</label>
                <input type="text" id='city' name='city' onChange={formik.handleChange} value={formik.values.city} />
                {formik.errors.city ? <div className="errors">{formik.errors.city}</div> : null}
                <br />
                </div>
                <div className='form-control'>
                <label  htmlFor='address'>address</label>
                <input type="text" id='address' name='address' onChange={formik.handleChange} value={formik.values.address} />
                {formik.errors.address ? <div className="errors">{formik.errors.address}</div> : null}
                <br />
                </div>
                <button type="submit">Submit</button>

            </form>
        </div>
    )
}

export default RegistrationForm


