import React from 'react'
import { videoBg } from '../assets'
const Home = () => {
  return (
    <div className='w-[full] h-screen'>  
        <video src={videoBg} autoPlay loop muted className='w-[full] h-full p-0 m-0 object-cover brightness-50' />
        <div className='absolute top-0 h-screen flex flex-col justify-center items-center ml-1/2 w-screen text-white font-poppins'>
          <p className='sm:text-[10em] xs:text-[5px]'>Welcome</p>
          <p className='sm:text-[2em]'>To my Country Map App</p>
            {/* <span>Countries app </span>is a simple React application made in
            Business College Helsinki lessons. App uses{' '}
            <a href="https://restcountries.com/">https://restcountries.com/ </a> and{' '}
            <a href="https://openweathermap.org/">https://openweathermap.org/</a> */}
        </div>
        
    </div>
  )
}

export default Home