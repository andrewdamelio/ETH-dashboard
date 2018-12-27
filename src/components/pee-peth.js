import React from 'react';

const PeePeth = ({ peePeth, logo }) => {
  let peePethDash = null;

  if (peePeth) {
    peePethDash = (
      <a target="_blank" rel="noopener noreferrer" href={`https://peepeth.com/${peePeth.name}`}>
        <div className="PeePeth">
          <div className="PeePeth--user"><span>{peePeth.realName}</span> @{peePeth.name}</div>
          <div className="PeePeth--content">{peePeth.content}</div>
          <div className="PeePeth--image">
            <img src={peePeth.image_url} alt="PeePeth tweet media" />
          </div>
        </div>
      </a>
    )
  };

  return (
    <div>
      <img width="50px" src={logo} alt="PeePeth logo" />
      {peePethDash}
    </div>
  );
};

export default PeePeth;

// import PeePeth from '../../components/pee-peth';
// const PEEPETH_LOGO = "https://ipfs.infura.io/ipfs/QmUkvjirvN16H8R38nDjmXt4kX4ChXMv7VzNwADxuAumaN";


// getPeePeth() {
//   const { web3 } = this.props.context;
//   fetch(`https://peepeth.com/account_peeps?oldest=0&address=${web3.eth.accounts[0]}&you=${web3.eth.accounts[0]}`)
//   .then(res => res.json())
//   .then(res => {
//     console.info('::peepeth', res);
//     const peePeth = res[0];
//     this.setState({
//       peePeth: {
//         content: peePeth.content,
//         image_url: peePeth.image_url,
//         timestamp: peePeth.timestamp,
//         realName: peePeth.realName,
//         name: peePeth.name
//       }
//     });
//   });
// }

// PeePeth
{/* <div onClick={() => this.unlock(5)} className={`box item5 ${!this.state.box5 ? 'locked' : ''}`}>
  {this.state.box5
    ? <PeePeth peePeth={this.state.peePeth} logo={PEEPETH_LOGO} />
    : <div style={{ background: '#fff', borderRadius: '32px' }}>
        <img width="120px" src={PEEPETH_LOGO} alt="PeePeth logo" />
      </div>
  }
</div> */}
