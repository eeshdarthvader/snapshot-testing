import React from 'react';
import BpkText from 'bpk-component-text';
import BpkCard from 'bpk-component-card';

import BpkLargeRightArrowIcon from 'bpk-component-icon/lg/long-arrow-right';
import STYLES from './Summary.scss';

const c = className => STYLES[className] || 'UNKNOWN';

const Summary = () => (
  <BpkCard className={c('Summary')}>
    <BpkText tagName="h1" textStyle="xxl">
      {' '}
      EDI <BpkLargeRightArrowIcon className={c('Summary__right')} /> LON
    </BpkText>
    <BpkText tagName="p" textStyle="base">
      2 travellers, economy
    </BpkText>
  </BpkCard>
);

export default Summary;
