import React from 'react';

const cryptoKitties = ({ cryptoKitty, address, switchCat, logo }) => {
  let cryptoKittiesDash = null;

  if (cryptoKitty) {
    cryptoKittiesDash = (
      <div className="CryptoKitties">
        <img onClick={() => switchCat()} height="195px" src={cryptoKitty.image} alt=" CryptoKitties logo" />

        <div className="CryptoKitties__stats">
          <div className="CryptoKitties__stats--name">{cryptoKitty.name}</div>
          <div>{`Gen ${cryptoKitty.generation}`}</div>
          <a target="_blank" rel="noopener noreferrer" href={`https://www.cryptokitties.co/kitty/${cryptoKitty.id}`}>
            <div>{`ID: ${cryptoKitty.id}`}</div>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div>
      <a target="_blank" rel="noopener noreferrer" href={`https://www.cryptokitties.co/profile/${address}`}>
        <img width="50px" src={logo} alt="CryptoKitties Logo" />
      </a>
      {cryptoKittiesDash}
    </div>
  );
}

export default cryptoKitties;
