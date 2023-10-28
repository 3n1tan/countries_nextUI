import React, { Fragment, useEffect, useState } from 'react'
import { auth, registerWithEmailAndPassword } from '../auth/fireBase';
import { useAuthState} from "react-firebase-hooks/auth"
import { useNavigate, Link } from 'react-router-dom';
import { Button, Input } from '@nextui-org/react';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [user, loading] = useAuthState(auth)
    const navigate = useNavigate();

    const register = () => {
        if(!name) alert("Please enter name")
        registerWithEmailAndPassword(name, email, password)
    }

    useEffect(()=> {
        if (loading) return;
        if (user) navigate('/countries')
    }, [user, loading])
  return (
    <Fragment>
        <div className='border border-solid border-sky-500 md:w-[400px] md:ml-[40vw] md:mt-[20vh] bg-sky-400 rounded-lg md:h-[25rem]'>
            <Input 
                type="text"
                isRequired
                value={name}
                onChange={(e)=> setName(e.target.value)}
                label='Full Name'
                labelPlacement='outside'
                className='md:max-w-lg my-9 px-[10px]'
            />
            <Input 
                type="email"
                isRequired
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                label='email'
                labelPlacement='outside'
                className='md:max-w-lg my-9 px-[10px]'
            />
            <Input 
                type="password"
                isRequired
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                label='Password'
                labelPlacement='outside'
                className='md:max-w-lg my-9 px-[10px]'
            />
            <Button onClick={register} 
                    color='default' 
                    variant='solid'
                    className=' ml-[10em]'
            >Register
            </Button>
            <div className='ml-[5em] mt-[1em]'>
                Already have an account?
                <Link to="/login">Login</Link>
            </div>
        </div>
    </Fragment>
  )
}

export default Register