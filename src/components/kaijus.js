import React from 'react';

const Kaijus = ({ kaijus, logo }) => {
  let kaijusDash = null;

  if (kaijus) {
    kaijusDash = (
      <div className="Kaijus">
        <img height="195px" src={kaijus.image} alt="kaijus artwork" />
        <div className="Kaijus__kaijus--name">{kaijus.name}</div>
        {/* <div className="Kaijus__kaijus--description">{kaijus.description}</div> */}
      </div>
    );
  }

  return (
    <div>
      <a target="_blank" rel="noopener noreferrer" href="https://dapp.cryptokaiju.io/account">
        <img width="135px" src={logo} alt="Kaijus Logo" />
      </a>
      {kaijusDash}
    </div>
  );
}

export default Kaijus;
