import React, { useEffect, useState} from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'
import { CardHeader, Spinner, CardBody, CardFooter, Button, Image, Card } from '@nextui-org/react';
import { Fragment } from 'react';




const CountriesSingle = () => {
  //Function Hooks
  const location = useLocation();
  const navigate = useNavigate();

  //State Hooks
  const [weather, setWeather] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  //Destructing variables
  const country = location.state.country;
  // console.log('country is:', country)
  // console.log('key is:', import.meta.env.VITE_OPENWEATHER_KEY)

  useEffect(()=>{
    if (!country.capital){
      setLoading(false)
      setError(true)
    }
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&units=metric&appid=${(import.meta.env.VITE_OPENWEATHER_KEY)}`)
    .catch((err) => {
      setError(true);
    })
    .then((res) => {
      setWeather(res.data);
      setLoading(false)
    })

  }, [country.capital])

  if (loading) {
    return (
      <Fragment>
        <Spinner 
          animation='border'
          role='status'
          className='center'
          variant='info'>
            <span className='visually-hidden'>Loading...</span>
        </Spinner>
      </Fragment>

    )
  }

  return (
    <Fragment>
      <Card className='w-[800px] h-[900px]'>
        <div className='grid grid-cols-2'>
            <CardBody>
              <Image 
                  alt='capital picture'
                  src={`https://source.unsplash.com/1600x900/?${country.capital}`}
                  width={400}
              />
            </CardBody>
            <CardBody>
                <h2 className='font-semibold text-lg'>{country.name.common}</h2>
                <h3>{country.capital}</h3>
                <small>{country.area.toLocaleString()}km²</small>
                <small>{country.continents}</small>
              {error && (
                <p>
                  Sorry, we don't have weather inofrmation for this country.
                </p>
              )}
              {!error && weather && (
                <div className='mt-[20px]'>
                  <p>
                      Right now is <strong>{parseInt(weather.main.temp)}</strong> degrees in {country.capital} and 
                      {weather.weather[0].descritption}
                  </p>
                  <Image 
                      src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                      alt={`${weather.weather[0].descritption}`}
                  
                  />
                </div>
              )}
            </CardBody>
        </div>
        <CardFooter>
                <Button variant='light' onPress={()=> navigate('/countries')}>
                    Back to countries
                </Button>
        </CardFooter>
      </Card>

    </Fragment>
  )
}

export default CountriesSingle