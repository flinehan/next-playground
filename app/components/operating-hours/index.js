import { getTime } from "../../services"
import React, { useState, useEffect } from 'react';

function OperatingHours() {
  const greeting = 'Clinic Hours:';

  return <h1>{greeting}</h1>;
}

function Hour() {
  return <h2>Hour</h2>
}

export const DataDrivenOperatingHours = () => {

  debugger

  const [data, setData] = useState({ location: {} });

  useEffect(async () => {
    getTime
      .then((value) => {
        setData(value);
      })
  }, []);

  return (
    <ul>
      {data.hours.map((item, index) => (
        <li key={`${data.id}-${index}`}>
          <Hour />
        </li>
      ))}
    </ul>
  );
}

export default OperatingHours;