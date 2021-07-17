import React, { useEffect, useState } from "react";
import Country from "../Country/Country";

const CountryInfo = () => {
  const [countrys, setCountrys] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setCountrys(data));
  }, []);

  return (
    <div className="container">
      <h2>Total {countrys.length} Country Information</h2>
      <div className="country-container">
        <div className="country">
          {countrys.map((countrys) => (
            <Country countrys={countrys} key={countrys.alpha3Code} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountryInfo;
