import React, { useState, useEffect } from "react";

const Data = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://localhost:7230/WeatherForecast");
        const result = await response.json();
        console.log("Data fetched:", result);
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return <div>{data ? JSON.stringify(data) : "Loading..."}</div>;
};

export default Data;
