import React, { Component } from 'react';

export const MyContext = React.createContext();

const isLogger = true;

const initialState = {
  web3: null,
  contract: null,
  network: null,
  balance: null,
  account: null
};

class MyProvider extends Component {
  //
  // State
  //
  state = initialState;

  render() {
    return (
      <MyContext.Provider
        value={{
          ...this.state,
          updateState: (action, payload) => this.updateState(action, payload),

          // Selectors
          getBalance: () => this.getBalance()
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }

  //
  // Reducer
  //
  async updateState(action, payload) {
    const currentState = this.state;

    if (action === 'SET_WEB3') {
      this.setWeb3(payload);
    }
    else if (action === 'SET_CONTRACT') {
      this.setContract(payload);
    }
    else if (action === 'SET_NETWORK') {
      this.setNetwork(payload);
    }
    else if (action === 'SET_ACCOUNTS') {
      this.setAccounts(payload);
    }
    else if (action === 'SET_BALANCE') {
      this.setBalance(payload);
    }
    const nextState = this.state;

    if (action !== 'TIMETRAVEL') {
      if (isLogger) {
        console.info({
          action,
          payload,
          currentState,
          nextState
        });
      }
    }
  }

  //
  // Actions
  //
  setWeb3(web3) {
    this.setState({
      web3
    });
  }

  setContract(contract) {
    this.setState({
      contract
    });
  }

  setNetwork(network) {
    this.setState({
      network
    });
  }

  setAccounts(account) {
    this.setState({
      account
    });
  }
  setBalance(balance) {
    this.setState({
      balance
    });
  }

  //
  // Selectors
  //
  getBalance() {
    return this.state.balance;
  }
}

export default MyProvider;
