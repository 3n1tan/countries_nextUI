import axios from "axios";

const baseURL = "https://restcountries.com/v3.1/all";

const countriesAPI = {
    getAll: async () => {
        const request = axios.get(baseURL);
        const response = await request;
        return response.data;
    }

}

export default  countriesAPI;