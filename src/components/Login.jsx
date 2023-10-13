import React, { Fragment } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import {useAuthState} from "react-firebase-hooks/auth"
import { useState, useEffect } from 'react';
import { auth, loginWithEmailAndPassword } from '../auth/fireBase';
import { Button, Input } from '@nextui-org/react';
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
    <Fragment>
        <div className='border border-solid border-sky-500 md:w-[400px] md:ml-[40vw] md:mt-[20vh] bg-sky-400 rounded-lg md:h-[20rem]'>
            <Input 
                type="email"
                label="Email Address"
                labelPlacement='outside'
                color='success'
                size='lg'
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                className='md:max-w-lg my-9 px-[10px]'
            />
            <Input 
                type="password"
                label="Password"
                labelPlacement='outside'
                size='lg'
                color='success'
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                className='md:max-w-lg px-[10px]'
            />
            <Button 
                onClick={()=> loginWithEmailAndPassword(email, password)} 
                color='warning'
                className='mt-[40px] ml-[10em]'
            >Login
            </Button>
            <div className='ml-[5em] mt-[1em]'>
                Don't have an account?
                <Link href="/register" className='hover:text-orange-200'> Login</Link>
            </div>
        </div>
    </Fragment>
  )
}

export default Login