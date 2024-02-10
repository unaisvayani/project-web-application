import React, { useState, useEffect } from "react";
import useFetchData from "../Services/useFetchData";

const Data = () => {
  const [data, setData] = useState(null);

  const serviceData = useFetchData("https://localhost:7230/WeatherForecast");

  useEffect(() => {
    setData(serviceData);
  }, [serviceData]);

  const handleSummaryChange = (index, event) => {
    const updatedData = [...data];
    updatedData[index].summary = event.target.value;
    setData(updatedData);
  };

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
              <td>
                <input
                  type="text"
                  value={item.summary}
                  onChange={(event) => handleSummaryChange(index, event)}
                />
              </td>
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
