import React from 'react';
import PropTypes from 'prop-types';
import BpkProgress, { themeAttributes } from 'bpk-component-progress';
import BpkThemeProvider from 'bpk-theming';
import STYLES from './Progress.scss';

const c = className => STYLES[className] || 'UNKNOWN';

const theme = {
  progressBarFillColor: 'rgb(64, 196, 223)',
};

const Progress = ({ value }) => (
  <BpkThemeProvider theme={theme} themeAttributes={[...themeAttributes]}>
    <BpkProgress
      min={0}
      max={100}
      value={value}
      small
      className={c('Progress')}
      aria-label="Searching"
    />
  </BpkThemeProvider>
);

Progress.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Progress;
