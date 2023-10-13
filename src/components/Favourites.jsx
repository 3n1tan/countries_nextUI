import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initializeCountries } from "../feautures/countries/countriesSlice";
import { clearFavourite } from "../feautures/countries/favouritesSlice";
import CountryCard from "./CountryCard";
import { Button, Spinner, Input } from "@nextui-org/react";

const Favourites = () => {
    const dispatch = useDispatch()
    let countriesList = useSelector((state) => state.countries.countries)
    const loading = useSelector((state) => state.countries.loading)
    const [search, setSearch] = useState("")
    const favouritesList = useSelector((state) => state.favourites.favourites)  
    if (favouritesList !== null) {
        countriesList = countriesList.filter(c => favouritesList.includes(c.name.common))
    }
    else {
        countriesList = []
    }
    useEffect(() => {
        dispatch(initializeCountries())
    }, [dispatch])
    if (loading) {
        return (
        <div className="text-center m-5">
            <Spinner
                animation="border"
                role="status"
                className="center"
                variant="info"
            >
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
        )
    }
    return (
    <Fragment>
        <div>
          <div className="mt-5 d-flex justify-content-center">
            <div className='flex justify-center flex-wrap '>
                <Input 
                    type='search'
                    placeholder='Search for countries'
                    aria-label='Search'
                    onChange={(e)=> setSearch(e.target.value)}
                    className='max-w-lg'        
                />
            </div>
          </div>
        </div>
        <div xs={2} md={3} lg={4} className=" g-3">
            <Button onClick={() => {
                    dispatch(clearFavourite())
                    }}
            >Clear Favourites
            </Button>
        </div>
        <div xs={2} md={3} lg={4} className=" g-3">
          {countriesList
            .filter((c) => {
              return c.name.official.toLowerCase().includes(search.toLowerCase());
            })
            .map((country) => (
              <CountryCard key={country.name.common} country={country} />
            ))}
        </div>
      </Fragment>)
}
export default Favourites;