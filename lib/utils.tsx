import { days } from "./const";
import { forecastData } from "./forecast-data";

export function getHours(time: string) {
  return new Date(time).getHours();
}

export function getWeekDay(time: string) {
  return days[new Date(time).getDay()];
}

export function getForecastItemDetails(symbol_code: string) {
  return forecastData.find((item) => item.name === symbol_code);
}

export function getTemperatureCelsius(temp: string) {
  return Math.round(Number(temp));
}
