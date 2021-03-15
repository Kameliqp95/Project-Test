import React from 'react'

function RegistrationForm() {
    return (
        <div>
            <form>
                <label  htmlFor='username'>Username</label>
                <input type="text" id='username' name='username' />
                <br />
                <label  htmlFor='password'>Password</label>
                <input type="password" id='password' name='password' />
                <br />
                <label  htmlFor='email'>Email</label>
                <input type="email" id='email' name='email' /> 
                <br />
                <label  htmlFor='dateOfBirth'>Email</label>
                <input type="date" id='dateOfBirth' name='dateOfBirth' />   
                <br />                            
                <button>Submit</button>
            </form>
        </div>
    )
}

export default RegistrationForm


