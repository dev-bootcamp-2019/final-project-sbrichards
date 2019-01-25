import React from 'react';
import { drizzleConnect } from 'drizzle-react';
import PropTypes from 'prop-types';
import AppForms from './AppForms';
import AccountProfile from './AccountProfile';
import ElectionStats from './ElectionStats';
import drizzleOptions from './drizzleOptions';

import vote from './vote.jpg';

class DemocracyApp extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          <img src={vote} className="sd-logo" alt="simple-democracy-logo" />
          <h1>SimpleDemocracy</h1>
          <p>A dApp for conducting basic elections.</p>
        </div>
        <div className="sd-container">
          <div className="section">
            <AppForms account={this.props.accounts[0]} />
          </div>
          <div className="section">
            <h1>Your Account Profile:</h1>
            <AccountProfile accountIndex="0" units="ether" precision="3" />
            <h1>Election Stats:</h1>
            <ElectionStats />
          </div>
        </div>
      </div>
    );
  }
}

/*
 * Export connected component.
 */

DemocracyApp.contextTypes = {
  drizzle: PropTypes.object
};

const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    SimpleDemocracy: state.contracts.SimpleDemocracy,
    drizzleStatus: state.drizzleStatus
  };
};

export default drizzleConnect(DemocracyApp, mapStateToProps);
//