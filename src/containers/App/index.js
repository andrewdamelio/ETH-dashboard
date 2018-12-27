import React, { Component } from 'react';

import getWeb3 from '../../utils/getWeb3';
import getNetwork from '../../utils/getNetwork';
import Box from '../../utils/3box';

import Ujo from '../../components/ujo';
import CryptoKitties from '../../components/crypto-kitties';
import MetaMask from '../../components/meta-mask';
import ThreeBox from '../../components/three-box';
import Gitcoin from '../../components/gitcoin';
import Kaijus from '../../components/kaijus';
import MakerDAO from '../../components/maker-dao';

import './index.css';

const UJO_LOGO = "https://ipfs.infura.io/ipfs/QmVuXcyMa75FJf9AKbbpbUQxc4NE4LKjuWtS6oi5kpL9YX";
const METAMASK_LOGO ="https://ipfs.infura.io/ipfs/QmPgxeRnkq8UGrsxzUEsowBcUnwnQPd7Dia2v19u6atsHa";
const KAIJUS_LOGO = "https://ipfs.infura.io/ipfs/QmV7SGKuTKU1RaXkezBYbRrBbvkrtgKcAi3wipXcZ4j8Ag";
const GITCOIN_1_LOGO = "https://ipfs.infura.io/ipfs/QmZLc6yMrZ35rUinzX7Y68NwKDfrm96tS3VwHdufxqkGpy";
const GITCOIN_2_LOGO = "https://ipfs.infura.io/ipfs/QmZpWesnQLhoDnM51ake8akVGsxPLLNuA3LcY3YnhJgbwk";
const CRYPTOKITTIES_LOGO = "https://ipfs.infura.io/ipfs/QmTBdgRxfpchq4x349sFYN4Vri1yka4CzirH97ja2e8L4M";
const MAKER_LOGO = "https://ipfs.infura.io/ipfs/QmRZyvxnpkrNFGSu2qCcu6gS2u8LickCWaW3BUqvgWfUZz";
const BOUNTIES_NETWORK_LOGO = "https://ipfs.infura.io/ipfs/QmbakVTeUC76b7eKzcskGq9LSGnN8h8C6Tff6ikX26AtG8";


class App extends Component {
  state = {
    'box--metaMask': false,
    'box--bounties': false,
    'box--3box': false,
    'box--ujo': false,
    'box--cryptokitties': false,
    'box--kaijus': false,
    'box--kudos': false,
    'box--makerDAO': false,
    cryptoKitty: [],
    currentKitty: 0,
    peePeth: null,
    threeBox: null,
    makerDAO: null,
    ujo: [],
    kudos: [],
    currentKudos: 0,
    playUjo: false,
    currentTrack: 0,
    currentAlbum: 0,
  }

  componentWillMount() {
    getWeb3.then((({ web3 }) => {
      this.props.context.updateState('SET_WEB3', web3);
      this.props.context.updateState('SET_ACCOUNTS', web3.eth.accounts[0]);
      this.props.context.updateState('SET_NETWORK', getNetwork(web3));
      this.getBalance();
    }));

    document.onkeydown = (e) => {
      if (e.keyCode === 81) {
        this.setState({
          'box--metaMask': false,
          'box--bounties': false,
          'box--3box': false,
          'box--ujo': false,
          'box--cryptokitties': false,
          'box--kaijus': false,
          'box--kudos': false,
          'box--makerDAO': false,
          kudos: [],
          playUjo: false
        });
      }
    }
  }

  render() {
    const { web3, account, getBalance, network } = this.props.context;

    if (!web3) {
      return null;
    }

    return (
      <main className="App">
        <div className="wrapper aligned">
          {/* MetaMask */}
          <div onClick={() => this.unlock('metaMask')} className={`box MetaMask__box ${this.isLocked('box--metaMask')}`}>
            {this.state['box--metaMask']
              ? <MetaMask web3={web3} account={account} network={network} getBalance={getBalance} logo={METAMASK_LOGO} />
              : <img width="120px" src={METAMASK_LOGO} alt="MetaMask logo" /> }
          </div>

          {/* Ujo */}
          <div onClick={() => this.unlock('ujo')} className={`box Ujo__box ${this.isLocked('box--ujo')}`}>
            {this.state['box--ujo']
              ? <Ujo
                  ujo={this.state.ujo[this.state.currentAlbum]}
                  logo={UJO_LOGO}
                  currentTrack={this.state.currentTrack}
                  playUjo={this.state.playUjo}
                  updateTrack={() => this.updateTrack()}
                  updateAblum={() => this.updateAblum()}
                  playPause={() => this.setState({ playUjo: !this.state.playUjo })}
                />
              : <img width="120px" src={UJO_LOGO} alt="Ujo logo" /> }
          </div>

          {/* Kudos */}
          <div onClick={() => this.unlock('kudos')} className={`box Kudos__box ${this.isLocked('box--kudos')}`}>
            {this.state['box--kudos']
              ? <Gitcoin kudos={this.state.kudos[this.state.currentKudos]}  switchKudos={() => this.switchKudos()} logo={GITCOIN_1_LOGO} />
              : <img width="100px" src={GITCOIN_2_LOGO} alt="GitCoin logo"/>
            }
          </div>

          {/* 3Box */}
          <div onClick={() => this.unlock('3box')} className={`box ThreeBox__box ${this.isLocked('box--3box')}`}>
              {this.state['box--3box']
                ? <ThreeBox account={account} threeBox={this.state.threeBox} />
                : <div id="ThreeBox__logo--big">
                    <div id="ThreeBox__logo--big__icon">
                      <h2>3</h2>
                    </div>
                    <h2 id="ThreeBox__logo--big__text"> BOX </h2>
                  </div> }
          </div>


          {/* MakerDAO */}
          <div onClick={() => this.unlock('makerDAO')} className={`box MakerDAO__box ${this.isLocked('box--makerDAO')}`}>
            {this.state['box--makerDAO']
              ? <MakerDAO makerDAO={this.state.makerDAO} updateCDP={(e) => this.updateCDP(e)} logo={MAKER_LOGO} />
              : <img width="120px" src={MAKER_LOGO} alt="MakerDAO logo"/>
            }
          </div>

          {/* Bounties.Network */}
          <div onClick={() => this.unlock('bounties')} className={`box Bounties__box ${this.isLocked('box--bounties')}`}>
            {this.state['box--bounties']
              ? <a target="_blank" rel="noopener noreferrer" href="https://explorer.bounties.network/explorer">
                  <img width="50" src={BOUNTIES_NETWORK_LOGO} alt="Bounties Network logo"/>
                </a>
              : <img width="120px" src={BOUNTIES_NETWORK_LOGO} alt="Bounties Network logo"/>
            }
          </div>

          {/* CryptoKitties */}
          <div onClick={() => this.unlock('cryptokitties')} className={`box CryptoKitties__box ${this.isLocked('box--cryptokitties')}`}>
            {this.state['box--cryptokitties']
              ? <CryptoKitties address={account} switchCat={() => this.switchCat()} cryptoKitty={this.state.cryptoKitty[this.state.currentKitty]} logo={CRYPTOKITTIES_LOGO} />
              : <img width="120px" src={CRYPTOKITTIES_LOGO} alt="CryptoKitties logo" /> }
          </div>

          {/* Kaijus */}
          <div onClick={() => this.unlock('kaijus')} className={`box Kaijus__box ${this.isLocked('box--kaijus')}`}>
            {this.state['box--kaijus']
              ? <Kaijus kaijus={this.state.kaijus} logo={KAIJUS_LOGO} />
              : <img width="185px" src={KAIJUS_LOGO} alt="Kaijus logo"/>
            }
          </div>
        </div>
      </main>
    );
  }

  updateCDP(e) {
    this.setState({
      CDP: Number(e.target.value)
    }, () => {

      window.localStorage.setItem('CDP', this.state.CDP);
      this.getMakerDAO(this.state.CDP);
    });
  }

  async getMakerDAO(cdpID) {
    const Maker = require('@makerdao/dai');
    const maker = Maker.create("mainnet");

    await maker.authenticate();

    const cdp = await maker.getCdp(cdpID); // 5349
    // const info = await cdp.getInfo();
    const daiDebt = await cdp.getDebtValue();
    const ethCollateral = await cdp.getCollateralValue();
    const ratio = await cdp.isSafe();

    this.setState({
      makerDAO: {
        debt: daiDebt.toNumber(),
        collateral: ethCollateral.toNumber(),
        safe: ratio,
        cdp: cdpID
      }
    });

    console.info('makerDAO::',this.state.makerDAO);
}


  getKudos() {
    const { account } = this.props.context;

    const GITCOIN_ABI = require('./kudos.json').abi;
    const GITCOIN_KUDOS_ADDRESS = '0x2aea4add166ebf38b63d09a75de1a7b94aa24163';

    this.getERC721Info(GITCOIN_ABI, GITCOIN_KUDOS_ADDRESS, account, (res) => {
      console.info('ERC721::', res);
      this.setState({
        kudos: this.state.kudos.concat({
          name: res.name,
          description: res.description,
          image: res.image
        })
      });
    });
  }

  getKaijus() {
    const { account } = this.props.context;

    const KAIJUS_ABI = require('./kaijus.json');
    const KAIJUS_ADDRESS = '0x102C527714AB7e652630cAc7a30Abb482B041Fd0';

    this.getERC721Info(KAIJUS_ABI, KAIJUS_ADDRESS, account, (res) => {
      console.info('ERC721::', res);
      this.setState({
        kaijus: {
          name: res.name,
          description: res.description,
          image: res.image
        }
      });
    });
  }

  getUjo() {
    const { account } = this.props.context;
    fetch(`https://ujomusic.com/api/purchases?ethereumAddress=${account}&limit=12`)
    .then(res => res.json())
    .then(res => {
      console.info('::UJO', res);
      const ujo = res.map(album => {
        const ujo = album.musicRelease;
        return {
          artwork: ujo.image.contentURL,
          album: ujo.releaseOf.name,
          tracks: ujo.releaseOf.tracks.map(track => {
            return {
              name: track.name,
              track: track.audio.contentURL
            };
          })
        }
      });

      this.setState({
        ujo: ujo
      });
    });
  }

  async get3Box() {
    const { account } = this.props.context;
    const profile = await Box.getProfile(account);
    console.info('::3BOX', profile);
    this.setState({
      threeBox: {
        name: profile.name,
        github: profile.github,
        image: profile.image[0].contentUrl['/']
      }
    });
  }

  getCryptoKitty() {
    const { account } = this.props.context;
    fetch(`https://api.cryptokitties.co/v2/kitties?offset=0&limit=12&owner_wallet_address=${account}&parents=false&authenticated=false`)
    .then(res => res.json())
    .then(res => {
      console.info('::cryptokitties', res);
      this.setState({
        cryptoKitty: res.kitties.map(kitty => {
          return {
            image: kitty.image_url_cdn,
            id: kitty.id,
            name: kitty.name,
            generation: kitty.generation
          }
        })
      });
    });
  }

  switchKudos() {
    const maxKudos = this.state.kudos.length - 1;
    const currentKudos = this.state.currentKudos === maxKudos ? 0 : this.state.currentKudos + 1;
    this.setState({
      currentKudos
    });
  }

  switchCat() {
    const maxCats = this.state.cryptoKitty.length - 1;
    const currentKitty = this.state.currentKitty === maxCats ? 0 : this.state.currentKitty + 1;
    this.setState({
      currentKitty
    });
  }

  updateTrack() {
    const maxTrack = this.state.ujo[this.state.currentAlbum].tracks.length - 1;
    const currentTrack = this.state.currentTrack === maxTrack ? 0 : this.state.currentTrack + 1;
    this.setState({
      currentTrack,
      playUjo: false
    });
  }

  updateAblum() {
    const maxAlbum = this.state.ujo.length - 1;
    const currentAlbum = this.state.currentAlbum === maxAlbum ? 0 : this.state.currentAlbum + 1;
    this.setState({
      currentAlbum,
      currentTrack: 0,
      playUjo: false
    });
  }

  async getERC721Info(contractABI, contractAddress, walletAddress, callback) {
    const ethers = window.ethers
    const provider = ethers.getDefaultProvider();

    const contract = new ethers.Contract(contractAddress, contractABI, provider);
    const balanceOf = await contract.balanceOf(walletAddress);
    for (let i = 0; i < balanceOf; i++) {
      const tokenOfOwnerByIndex = await contract.tokenOfOwnerByIndex(walletAddress, i);
      const tokenURI = await contract.tokenURI(tokenOfOwnerByIndex);
      fetch(tokenURI)
      .then(res => res.json())
      .then(res => {
        callback(res);
      });
    }
  }

  isLocked(boxState) {
    return !this.state[boxState] ? 'locked' : '';
  }

  unlock(n) {
    if (n === '3box') {
      this.get3Box();
    }

    if (n === 'ujo' && !this.state['box--ujo']) {
      this.getUjo();
    }

    if (n === 'cryptokitties' && !this.state['box--cryptokitties']) {
      this.getCryptoKitty();
    }

    if (n === 'kaijus') {
      this.getKaijus();
    }

    if (n === 'kudos' && !this.state['box--kudos']) {
      this.getKudos();
    }

    if (n === 'makerDAO') {
      const CDP = window.localStorage.getItem('CDP');
      if (CDP) {
        this.getMakerDAO(Number(CDP));
      }
    }

    this.setState({
      [`box--${n}`]: true
    });
  }

  getBalance() {
    const { web3 } = this.props.context;

    web3.eth.getBalance(web3.eth.accounts[0], (err, response) => {
      if (response) {
        this.props.context.updateState('SET_BALANCE', response.toNumber());
      }
    });
  }
}

export default App;


