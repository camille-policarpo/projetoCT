import axios from "axios";

export const Openmeteo = axios.create ({
    baseURL: "https://api.open-meteo.com/v1/"
})

export const Coordenadas = axios.create ({
    baseURL: "https://geocoding-api.open-meteo.com/v1/"
})