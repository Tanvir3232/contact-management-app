import axios from "axios";

const BASE_URL = 'https://disease.sh/v3/covid-19';
export const fetchWorldData = async()=>{
    const response = await axios.get(`${BASE_URL}/all`);
    return response.data;
}

export const fetchCountryData = async() =>{
    const response = await axios.get(`${BASE_URL}/countries`);
    return response.data;
}

export const fetchHistoricalData = async () => {
    const response = await axios.get(`${BASE_URL}/historical/all?lastdays=all`);
    return response.data;
  };