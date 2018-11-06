import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import BpkCard from 'bpk-component-card';

import OutBoundLeg from '../OutBoundLeg';
import InBoundLeg from '../InBoundLeg';
import PriceBlock from '../../components/Price';

import STYLES from './Results.scss';

const c = className => STYLES[className] || 'UNKNOWN';

const Results = ({ itineraries }) => (
  <Fragment>
    {itineraries.map(itinerary => (
      <BpkCard className={c('Results__card-results')}>
        <OutBoundLeg details={itinerary.OutboundLeg} />
        <InBoundLeg details={itinerary.InboundLeg} />
        <PriceBlock agents={itinerary.Agents[0]} price={itinerary.PricingOptions} />
      </BpkCard>
    ))}
  </Fragment>
);

Results.propTypes = {
  itineraries: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Results;
