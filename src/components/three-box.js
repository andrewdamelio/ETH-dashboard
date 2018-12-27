import React from 'react';

const ThreeBox = ({ threeBox, account }) => {
  let ThreeBoxDash = null;

  if (threeBox) {
    ThreeBoxDash = (
      <div className="ThreeBox">
        <img src={`https://ipfs.infura.io/ipfs/${threeBox.image}`} className="ThreeBox__profile" alt="3Box Avatar" />

        <div className="ThreeBox__network">
          <div className="ThreeBox__network__icon" />
          <p className="ThreeBox_address">{account.substr(0, 11)}</p>
        </div>

        <div className="ThreeBox__info">
          <a target="_blank" rel="noopener noreferrer" href="https://3box.io/Profile">
            <h2 className="ThreeBox__info__username">{threeBox.name}</h2>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div id="ThreeBox__logo--small">
        <div id="ThreeBox__logo--small__icon">
          <h2>3</h2>
        </div>
        <h2 id="ThreeBox__logo--small__text"> BOX </h2>
      </div>
      {ThreeBoxDash}
    </div>
  );
}

export default ThreeBox;

