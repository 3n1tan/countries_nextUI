import React from 'react'
import { useNavigate, Link } from 'react-router-dom';
import {useAuthState} from "react-firebase-hooks/auth"
import { useState, useEffect } from 'react';
import { auth, loginWithEmailAndPassword } from '../auth/fireBase';
import { Button } from '@nextui-org/react';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, loading, error] = useAuthState(auth)
    const navigate = useNavigate();

    useEffect(()=> {
        if (loading) return;
        if (user) navigate('/countries')
    }, [user, loading])
  return (
    <div>
        <input 
            type="email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            placeholder='email'
         />
        <input 
            type="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            placeholder='Password'
         />
         <Button onClick={()=> loginWithEmailAndPassword(email, password)}>Login</Button>
         <div>
            Don't have an account?
            <Link to="/register">Login</Link>
         </div>

    </div>
  )
}

export default Login