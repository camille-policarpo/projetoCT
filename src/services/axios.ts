import axios from "axios";

export const Openmeteo = axios.create ({
    baseURL: "https://api.open-meteo.com/v1/forecast?latitude=-20.26&longitude=-40.28&hourly=temperature_2m"
})

