import React from "react";

const AddedCountry = (props) => {
  const countryName = props.countryName;
  console.log(countryName);
  const totalCountry = countryName.reduce(
    (totalCountry, countryName) => totalCountry + countryName.population,
    0
  );

  return (
    <div>
      <h2>Added Country :{countryName.length} </h2>
      {/* <p>props: {props.length}</p> */}
      <div className="add-country">
        {countryName.map((AddedCountry) => (
          <p>{AddedCountry.name}</p>
        ))}
      </div>
      <p>Total Poplulation :{totalCountry}</p>
    </div>
  );
};

export default AddedCountry;
