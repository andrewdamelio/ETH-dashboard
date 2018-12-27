const getWeb3 = new Promise(function(resolve, reject) {
  window.addEventListener('load', async () => {
    let results;

    // Modern dapp browsers...
    if (window.ethereum) {
      const ethereum = window.ethereum;
      console.info('Modern dapp browsers...');
      // window.web3 = new Web3(ethereum);
      try {
        // Request account access if needed
        await ethereum.enable();
        // Acccounts now exposed

        const web3 = window.web3;

        results = {
          web3
        };

        resolve(results);
      }
      catch (e) {
        // User denied account access...
        reject(e);
      }
    }

    // Legacy dapp browsers...
    else {
      const Web3 = require('web3');
      console.info('Legacy dapp browsers...');
      let web3 = window.web3;
      // Checking if Web3 has been injected by the browser (Mist/MetaMask)
      if (typeof web3 !== 'undefined') {
        // Use Mist/MetaMask's provider.
        web3 = new Web3(web3.currentProvider);

        results = {
          web3
        };

        resolve(results);
      }
      else {
        const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io'));

        try {
          const hasBurner = JSON.parse(window.localStorage.getItem('rsvp.burner'));
          if (hasBurner && hasBurner.privateKey) {
            web3.eth.accounts.wallet.add(hasBurner.privateKey);
          }
          else {
            const account = web3.eth.accounts.create();
            web3.eth.accounts.wallet.add(account.privateKey);
            window.localStorage.setItem('rsvp.burner', JSON.stringify(account));
          }

          results = {
            web3,
            burner: true
          };

          resolve(results);
        }
        catch (e) {
          reject(e);
        }
      }
    }
  });
});

export default getWeb3;
