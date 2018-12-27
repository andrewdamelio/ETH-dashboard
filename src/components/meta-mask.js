import React from 'react';
import blockies from 'blockies';
import { etherScanAccount } from '../utils/etherScan';

const MetaMask = ({ web3, account, network, getBalance, logo }) => {
  const avatar = blockies({
    seed: account.toLowerCase(),
    size: 8
  }).toDataURL();


  const gotoAccount = (account) => {
    return etherScanAccount(account, network);
  }

  return (
    <div>
      <img width="50px" src={logo} alt="MetaMask logo" />
      <div className="MetaMask">
        <div>
          <img src={avatar} className="MetaMask__avatar" alt="Users avatar" />
        </div>

        <div className="MetaMask__eth">{ web3.fromWei(getBalance()).substr(0, 5) } ΞTH</div>

        <div>
          <a target="_blank" rel="noopener noreferrer" href={gotoAccount(account)}>{ account.substr(0, 13) }</a>
        </div>
      </div>
    </div>
  );
};

export default MetaMask;
