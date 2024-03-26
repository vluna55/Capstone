import React from 'react'

const Login = () => {
  return (
    <div>
        <form>
            <label type="email">Email</label>
            <input type='email' placeholder='email@example.com' />
            <label type='password'>Password</label>
            <input type='password' placeholder='password' />
        </form>
    </div>
  )
}

export default Login