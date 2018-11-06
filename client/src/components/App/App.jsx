import React, { Component } from 'react';

import SummaryCard from '../../components/Summary';
import Filter from '../../components/Filters';
import Results from '../../components/Results';
import Loader from '../../components/Loader';
import Progress from '../../components/Progress';

import STYLES from './App.scss';
import Header from './../Header';

import { closestMonday } from '../../utils';

import { fetchItineraries } from './apiCalls';

const c = className => STYLES[className] || 'UNKNOWN';

class App extends Component {
  state = {
    results: [],
    isLoading: true,
    value: 0,
    userQuery: {
      country: 'UK',
      currency: 'GBP',
      locale: 'en-GB',
      locationSchema: 'sky',
      apikey: 'ss630745725358065467897349852985',
      grouppricing: 'on',
      originplace: 'EDI-sky',
      destinationplace: 'LOND-sky',
      outbounddate: closestMonday(),
      inbounddate: closestMonday(1),
      adults: 1,
      children: 0,
      infants: 0,
      cabinclass: 'Economy',
    },
  };

  async componentWillMount() {
    /* timer for incrementing progress bar value */
    let count = 0;
    const timer = setInterval(() => {
      this.setState({ value: (count += 1) });
    }, 200);

    const data = await fetchItineraries(this.state.userQuery);

    this.setState({ results: data });
    this.setState({ isLoading: false });

    /* clear the progress bar timeout */
    clearTimeout(timer);
    this.setState({ value: 100 });
  }

  render() {
    return (
      <div className={c('App')}>
        <Header />
        <main className={c('App__main')}>
          <SummaryCard />
          <Filter />
        </main>
        {this.state.isLoading && <Progress value={this.state.value} />}
        <main className={c('App__results')}>
          {this.state.isLoading ? <Loader /> : <Results itineraries={this.state.results} />}
        </main>
      </div>
    );
  }
}

export default App;
