import React, { Fragment, useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CountryCard from './CountryCard'
import { Input } from '@nextui-org/react'
import { initializeCountries } from '../feautures/countries/countriesSlice'


const Countries = () => {
  const dispatch = useDispatch();
  const countriesList = useSelector((state) => state.countries.countries);
  const loading = useSelector((state) => state.countries.isLoading);
  const [search, setSearch] = useState('');

  useEffect(()=> {
    dispatch(initializeCountries())

  },[dispatch])

  return (
    <Fragment>
      <div>
          <Input 
              style={{width: '18rem'}}
              type='search'
              placeholder='Search for countries'
              aria-label='Search'
              onChange={(e)=> setSearch(e.target.value)}        
          />
      </div>
      <div className='sm:grid sm:grid-cols-4 gap-x-7 gap-y-1 flex flex-wrap'>
        {countriesList.reduce((prev, country) => //filtering using the reducer method before output display
                country.name.common.toLowerCase().includes(search.toLowerCase())
                ? [...prev, <CountryCard key={country.name.common} country={country} />]
                : prev,
                [])
        }
      </div>


    </Fragment>

  )
}

export default Countries