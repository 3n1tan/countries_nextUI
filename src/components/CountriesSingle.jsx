import React, { useEffect, useState} from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'
import { Container, Row, Col } from '@nextui-org/react';


const CountriesSingle = () => {
  //Function Hooks
  const location = useLocation();
  const navigate = useNavigate();
  // console.log("location: ", location)

  //State Hooks
  const [weather, setWeather] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  //Destructing variables
  const country = location.state.country;

  useEffect(()=>{
    if (!country.capital){
      setLoading(false)
      setError(true)
    }
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_KEY}`)
    .catch((err) => {
      setError(true);
    })
    .then((res) => {
      setWeather(res.data);
      setLoading(false)
    })

  }, [country.capital])

  console.log("weather ", weather);

  if (loading) {
    return (
      <Container>
        <Spinner 
          animation='border'
          role='status'
          className='center'
          variant='info'>
            <span className='visually-hidden'>Loading...</span>
        </Spinner>
      </Container>

    )
  }

  return (
    <Container>
        <Row className="mt-5">
            <Col>
                <Image thumbnail src={`https://source.unsplash.com/1600x900/?${country.capital}`} />        
            </Col>
            <Col>
                <h2 className='display-4'>{country.name.common}</h2>
                <h3>{country.capital}</h3>
                {error && (
                    <p>
                    Sorry, we don't have weather information for this country.
                    </p>
                )}
                {!error && weather && (
                    <div>
                    <p>
                        Right now is <strong>{parseInt(weather.main.temp)}</strong> degrees in {country.capital} and 
                        {weather.weather[0].descritption}
                    </p>
                    <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={`${weather.weather[0].descritption}`} />

                    </div>
                )}        
            </Col>
      </Row>
      <Row>
            <Col>
                <Button variant='light' onClick={()=> navigate('/countries')}>
                Back to countries
                </Button>
            </Col>
      </Row>

    </Container>
  )
}

export default CountriesSingle