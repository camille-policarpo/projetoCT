import axios from "axios";

export const Openmeteo = axios.create ({
    baseURL: "https://api.open-meteo.com/v1/forecast?"
})

