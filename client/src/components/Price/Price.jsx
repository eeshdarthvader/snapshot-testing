import React from 'react';
import PropTypes from 'prop-types';
import BpkText from 'bpk-component-text';
import BpkButton from 'bpk-component-button';
import STYLES from './Price.scss';

import { formatPrice } from '../../utils';

const c = className => STYLES[className] || 'UNKNOWN';

const Price = ({ agents, price }) => (
  <BpkText tagName="div" textStyle="base" className={c('Price')}>
    <BpkText tagName="div" textStyle="base" className={c('Price__itinerary-priceblock')}>
      <BpkText
        bold
        tagName="span"
        textStyle="base"
        className={c('Price__itinerary-priceblock-price')}
      >
        &#163;
        {formatPrice(price[0].Price)}
      </BpkText>
      <BpkText
        tagName="span"
        textStyle="base"
        className={c('Price__itinerary-priceblock-supplier')}
      >
        {agents[0].Name}
      </BpkText>
    </BpkText>
    <BpkButton large className={c('Price__select')}>
      Select
    </BpkButton>
  </BpkText>
);

Price.propTypes = {
  agents: PropTypes.arrayOf(PropTypes.any).isRequired,
  price: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Price;
