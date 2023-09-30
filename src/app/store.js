import { configureStore } from "@reduxjs/toolkit";
import countriesSlice from "../feautures/countries/countriesSlice";
export default configureStore({
    reducer: {
        countries: countriesSlice,
    }
});