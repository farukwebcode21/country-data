import React from "react";

const Country = (props) => {
  // console.log(props);
  const { name, population, flag, area, nativeName } = props.countrys;
  const handleAddToButton = props.handleAddToButton;

  return (
    <div className="country-data">
      <div className="flag">
        <img src={flag} alt="name" width="300px" />
      </div>
      <div className="information">
        <h3>Name :{name}</h3>
        <p>NativeName :{nativeName}</p>
        <p>Area :{area}</p>
        <p>Population: {population}</p>
      </div>
      <button onClick={() => handleAddToButton(props.countrys)}>
        Add Country
      </button>
    </div>
  );
};

export default Country;
