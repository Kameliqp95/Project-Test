import React from 'react'

function LoginForm() {
    return (
        <div>
            <form>
                <label  htmlFor='username'>Username</label>
                <input type="text" id='username' name='username' />
                <br />
                <label  htmlFor='password'>Password</label>
                <input type="password" id='password' name='password' />
                <br />
                <button>Submit</button>

            </form>
        </div>
    )
}

export default LoginForm