import React from 'react';
import BpkText from 'bpk-component-text';
import BpkCard from 'bpk-component-card';
import BpkLargePriceAlert from 'bpk-component-icon/lg/price-alerts';
import STYLES from './Filter.scss';

const c = className => STYLES[className] || 'UNKNOWN';

const Filter = () => (
  <BpkCard className={c('Filter')}>
    <BpkText tagName="p" textStyle="base" className={c('Filter__filter-attr')}>
      Filter
    </BpkText>
    <BpkText tagName="p" textStyle="base" className={c('Filter__filter-attr')}>
      Sort
    </BpkText>
    <BpkText
      tagName="p"
      textStyle="base"
      className={`${c('Filter__filter-attr')} ${c('Filter__filter-price-alert')}`}
    >
      <BpkLargePriceAlert className={c('Filter__price-alert-icon')} /> Price alerts
    </BpkText>
  </BpkCard>
);

export default Filter;
