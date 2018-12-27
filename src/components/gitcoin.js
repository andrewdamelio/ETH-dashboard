import React from 'react';

const Gitcoin = ({ kudos, switchKudos, logo }) => {
  let kudosDash = null;

  if (kudos) {
    kudosDash = (
      <div className="Kudos">
        <img onClick={() => switchKudos()} height="165px" src={kudos.image} alt="Kudos artwork" />
        <div className="Kudos--name">{kudos.name}</div>
        {/* <div className="Kudos--description">{kudos.description}</div> */}
      </div>
    );
  }

  return (
    <div>
      <a target="_blank" rel="noopener noreferrer" href="https://gitcoin.co/profile/">
        <img width="35px" src={logo} alt="Gitcoin Logo" />
      </a>
      {kudosDash}
    </div>
  );
}

export default Gitcoin;
