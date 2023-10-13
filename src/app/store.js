import { configureStore } from "@reduxjs/toolkit";
import countriesSlice from "../feautures/countries/countriesSlice";
import favouritesSlice from "../feautures/countries/favouritesSlice";

export default configureStore({
    reducer: {
        countries: countriesSlice,
        favourites: favouritesSlice
    },
});