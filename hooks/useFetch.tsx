import { useEffect, useState } from "react";
import { lat, lon } from "../lib/const";
import { Feature } from "../lib/types";

export const useFetch = () => {
  const [data, setData] = useState<Feature>();
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const json = await fetch(
          `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${lat}&lon=${lon}`
        );
        const res = await json.json();
        setData(res);
      } catch (err) {
        setError(true);
      }
    };
    fetchData();
  }, []);

  return { data, error };
};
