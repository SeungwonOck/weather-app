import React from 'react'
import { Button } from 'react-bootstrap';



const WeatherButton = ({ cities, setCity, city }) => {

  return (
    <div>
          <Button variant={`${city== "" ? "success":"warning"}`} onClick={() => setCity("")}>Current Location</Button>
      {cities.map((item, index) => (
            <Button variant={`${city== item ? "success":"warning"}`} key={index} onClick={() => setCity(item)}>{item}</Button>
      ))}
    </div>
  )
}

export default WeatherButton
