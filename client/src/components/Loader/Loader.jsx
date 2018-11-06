import React from 'react';
import { BpkExtraLargeSpinner, SPINNER_TYPES } from 'bpk-component-spinner';
import STYLES from './Loader.scss';

const c = className => STYLES[className] || 'UNKNOWN';

const Loader = () => (
  <div className={c('Loader')}>
    <BpkExtraLargeSpinner type={SPINNER_TYPES.primary} />
  </div>
);

export default Loader;
