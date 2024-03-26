import React, { useState } from 'react'

const Signup = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
  return (
    <div>
        <h2>Registration</h2>
        <form>
            <label type="text">First Name</label>
            <input type='text' placeholder='John' />
            <label type='text'>Last Name</label>
            <input type='text' placeholder='Doe' />
            <label type="email">Email</label>
            <input type='email' placeholder='email@example.com' />
            <label type='password'>Password</label>
            <input type='password' placeholder='password' />
            <label type='password'>Re-enter Password</label>
            <input type='password' placeholder='password' />
        </form>
    </div>
  )
}

export default Signup