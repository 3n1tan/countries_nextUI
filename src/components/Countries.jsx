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
      <div className='flex justify-center flex-wrap md:mt-[70px] mt-[30px]'>
          <Input 
              type='search'
              placeholder='Search for countries'
              aria-label='Search'
              onChange={(e)=> setSearch(e.target.value)}
              className='md:max-w-lg'        
          />
      </div>    
      
      <div className='sm:grid md:grid-cols-5 xs:grid-cols-2 gap-x-7 gap-y-1 flex flex-wrap'>
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