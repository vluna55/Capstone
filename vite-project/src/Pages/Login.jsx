import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Input } from '../Components/Input';
import UserContext from '../Components/UserContext';
import { login, signup } from '../API';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser, setToken } = useContext(UserContext);
  useEffect

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    try {
      const result = await login(email, password);
      console.log("login successful");
      console.log(result);
      const userData = await signup(result);
      console.log(userData);
      setUser(userData);
      setToken(result);
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    <div>
      <Input text="Email" type="email" state={email} setState={setEmail} />
      <Input
        text="Password"
        type="password"
        state={password}
        setState={setPassword}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Login