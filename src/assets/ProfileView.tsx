import React from 'react'
import { useFormik } from 'formik'

function ProfileView() {
    return (
        <div className='form-control'>
            <label  htmlFor='username'>Username:</label>
            <br />

            <label  htmlFor='address'>Address:</label>
            <br />

            <label  htmlFor='city'>City:</label>
            <br />

            <label  htmlFor='firstName'>First Name:</label>
            <br />

            <label  htmlFor='lastName'>Last Name:</label>
            <br />
        </div>

    )
}

export default ProfileView