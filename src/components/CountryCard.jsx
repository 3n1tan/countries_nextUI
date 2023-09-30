import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Card, Image, CardHeader, CardBody } from '@nextui-org/react';
const CountryCard = () => {
    // const favouritesList = useSelector((state) => state.favourites.favourites);
    // const dispatch = useDispatch

  return (
    <Fragment>
        <div>
            <Link
                // href={`/countries/${country.name.common}`}
                // state={{ country: country}}
            >
                <Card className='h-100'>
                    {/* favourites */}
                    <CardHeader>
                        <Image
                            src='https://images.unsplash.com/photo-1569706971306-de5d78f6418e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
                            className="rounded h-50"
                            style={{
                            objectFit: "cover",
                            minHeight: "200px",
                            maxHeight: "200px",
                            }} 
                        />
                    </CardHeader>
                    <CardBody>
                        <p>Nigeria</p>
                        <p>Abuja</p>
                    </CardBody>


                </Card>

            </Link>
        </div>
    </Fragment>
  )
}

export default CountryCard