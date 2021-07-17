import React from "react";

const AddedCountry = (props) => {
  const countryName = props.countryName;
  console.log(countryName);

  return (
    <div>
      <h2>Added Country :{countryName.length} </h2>
      <p>Name : {props.countryName.name}</p>
    </div>
  );
};

export default AddedCountry;
