import { fetchWeather } from "./modules/weather";

const run = () => {
    fetchWeather(3, "SKY", "0500");
}

run();