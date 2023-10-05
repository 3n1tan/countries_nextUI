import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Card, Image, CardHeader, CardBody, Divider } from '@nextui-org/react';
import { RiSpeakFill} from 'react-icons/ri'
import { BsPeopleFill } from 'react-icons/bs'
import { GiMoneyStack } from 'react-icons/gi'
import { Link } from 'react-router-dom';

const CountryCard = ({country}) => {
    // const favouritesList = useSelector((state) => state.favourites.favourites);
    const dispatch = useDispatch

  return (
    <Fragment>
        <div className='mt-10'>
            <Link
                to={`/countries/${country.name.common}`}
                state={{ country: country}}
            >
                <Card className='h-100'>
                    {/* favourites */}
                    <CardHeader>
                        <Image
                            src={country.flags.svg}
                            className="rounded h-50"
                            style={{
                            objectFit: "fill",
                            minHeight: "350px",
                            maxHeight: "3500px",
                            }} 
                        />
                    </CardHeader>
                    <CardBody>
                        <div className='mb-8 font-poppins'>
                            <p className='font-semibold text-lg'>{country.name.common}</p>
                            <p className='italic font-extralight'>{country.capital}</p>
                        </div>
                        <div>
                            <p className='flex items-center'>
                                <RiSpeakFill size={35}/>
                                <span className='ml-10'>
                                    {Object.values(country.languages ?? {}).join(", ")}
                                </span>
                            </p>
                        </div>
                        <Divider />
                        <div>
                            <p className='flex items-center'>
                                <BsPeopleFill size={35}/>
                                <span className='ml-10'>
                                    {country.population.toLocaleString()}
                                </span>
                            </p>
                        </div>
                        <Divider />
                        <div>
                            <p className='flex items-center'>
                                <GiMoneyStack size={35}/>
                                <span className='ml-10'>
                                    {Object.values(country.currencies || {})
                                        .map((currency) => currency.name)
                                        .join(", ")}
                                </span>
                            </p>
                        </div>
          
                    </CardBody>


                </Card>

            </Link>
        </div>
    </Fragment>
  )
}

export default CountryCard