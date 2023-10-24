import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initializeCountries } from "../feautures/countries/countriesSlice";
import { clearFavourites, getFavouritesFromSource } from "../feautures/countries/favouritesSlice";
import CountryCard from "./CountryCard";
import { Button, Spinner, Input } from "@nextui-org/react";

const Favourites = () => {
    const dispatch = useDispatch()
    let countriesList = useSelector((state) => state.countries.countries);
    const countriesLoading = useSelector((state)=> state.countries.isLoading);
    const favouritesLoading = useSelector((state)=> state.favourites.isLoading)
    const [search, setSearch] = useState("");
    const favouritesList = useSelector((state) => state.favourites.favourites);  
    if (favouritesList !== null) {
        countriesList = countriesList.filter(c => favouritesList.includes(c.name.common))
    }
    else {
        countriesList = []
    }
    useEffect(() => {
        dispatch(initializeCountries());
        dispatch(getFavouritesFromSource());
    }, [dispatch])

    if (countriesLoading || favouritesLoading) {
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
        <div xs={2} md={3} lg={4} className="sm:grid md:grid-cols-5 xs:grid-cols-2 gap-x-7 gap-y-1 flex flex-wrap">
          {countriesList
            .filter((c) => {
              return c.name.official.toLowerCase().includes(search.toLowerCase());
            })
            .map((country) => (
              <CountryCard key={country.name.common} country={country} />
            ))}
        </div>
        <div xs={2} md={3} lg={4} className="flex justify-center mt-12">
            <Button onClick={() => {
                    dispatch(clearFavourites())
                    }}
            >Clear Favourites
            </Button>
        </div>
      </Fragment>)
}
export default Favourites;