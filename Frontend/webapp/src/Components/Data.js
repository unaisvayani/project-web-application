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

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Temperature (°C)</th>
          <th>Temperature (°F)</th>
          <th>Summary</th>
        </tr>
      </thead>
      <tbody>
        {data ? (
          data.map((item, index) => (
            <tr key={index}>
              <td>{new Date(item.date).toLocaleString()}</td>
              <td>{item.temperatureC}</td>
              <td>{item.temperatureF}</td>
              <td>{item.summary}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4">Loading...</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Data;
