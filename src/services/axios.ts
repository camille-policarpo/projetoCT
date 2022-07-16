import axios from "axios";

export const climateRainAPI = axios.create ({
    baseURL: "/api/v1/anl/synoptic/locale/:country?token=your-app-token"
})

export const climateTemperatureAPI = axios.create ({
    baseURL: "/api/v1/climate/temperature/locale/:id?token=your-app-token"
})