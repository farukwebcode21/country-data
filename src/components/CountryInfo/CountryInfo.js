import React, { useEffect, useState } from "react";
import AddedCountry from "../AddedCountry/AddedCountry";
import Country from "../Country/Country";

const CountryInfo = () => {
  const [countrys, setCountrys] = useState([]);
  const [countryName, setCountryName] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setCountrys(data));
  }, []);

  const handleAddToButton = (countrys) => {
    // console.log("Clicked add to buttton", countrys);
    const newCountry = [...countryName, countrys];
    setCountryName(newCountry);
  };

  return (
    <div className="container">
      <h1>Total {countrys.length} Country </h1>
      <AddedCountry countryName={countryName} />
      <div className="country-container">
        <div className="country">
          {countrys.map((countrys) => (
            <Country
              countrys={countrys}
              key={countrys.alpha3Code}
              handleAddToButton={handleAddToButton}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountryInfo;
