import React from 'react';
import PropTypes from 'prop-types';
import BpkText from 'bpk-component-text';
import BpkImage from 'bpk-component-image';
import {
  breakpointMobile,
  breakpointTablet,
  lineHeightBase,
  iconSizeSm,
} from 'bpk-tokens/tokens/base.es6';
import { withAlignment } from 'bpk-component-icon';
import BpkSmallRightArrowIcon from 'bpk-component-icon/sm/long-arrow-right';

import STYLES from './InBoundLeg.scss';
import { dateFormat, convertMinsToHrsMins } from '../../utils';

const AlignedArrow = withAlignment(BpkSmallRightArrowIcon, lineHeightBase, iconSizeSm);
const c = className => STYLES[className] || 'UNKNOWN';

const InBoundLeg = ({ details }) => (
  <BpkText tagName="div" textStyle="base" className={c('ResultsInbound__itinerary-return')}>
    <BpkImage
      altText="airline logo"
      width={30}
      height={30}
      className={c('ResultsInbound__airline-logo')}
      src={`https://logos.skyscnr.com/images/airlines/favicon/${details.CarrierName[0].Code}.png`}
      sizes={`(min-width: ${breakpointMobile}) 30rem,
    (min-width: ${breakpointTablet}) calc(100vw - 18rem),
    calc(100vw - 4.5rem)`}
    />
    <BpkText tagName="div" textStyle="base" className={c('ResultsInbound__itinerary-depart')}>
      <BpkText
        tagName="span"
        textStyle="base"
        className={c('ResultsInbound__itinerary-depart-time')}
      >
        {dateFormat(details.Departure)}
      </BpkText>
      <BpkText
        tagName="span"
        textStyle="base"
        className={c('ResultsInbound__itinerary-depart-city')}
      >
        {details.OriginStation[0] ? details.OriginStation[0].Code : 'LHR'}
      </BpkText>
    </BpkText>
    <BpkText tagName="div" textStyle="base" className={c('ResultsInbound__itinerary-stops')}>
      <AlignedArrow className={c('ResultsInbound__itinerary-stops-icon')} />
    </BpkText>
    <BpkText tagName="div" textStyle="base" className={c('ResultsInbound__itinerary-arrive')}>
      <BpkText
        tagName="span"
        textStyle="base"
        className={c('ResultsInbound__itinerary-arrive-time')}
      >
        {dateFormat(details.Arrival)}
      </BpkText>
      <BpkText
        tagName="span"
        textStyle="base"
        className={c('ResultsInbound__itinerary-arrive-city')}
      >
        {details.DestinationStation[0] ? details.DestinationStation[0].Code : 'EDI'}
      </BpkText>
    </BpkText>
    <BpkText
      tagName="div"
      textStyle="base"
      className={c('ResultsInbound__itinerary-time-duration-container')}
    >
      <BpkText
        tagName="div"
        textStyle="base"
        className={c('ResultsInbound__itinerary-time-duration')}
      >
        <BpkText
          tagName="span"
          textStyle="sm"
          className={c('ResultsInbound__itinerary-arrive-time')}
        >
          {convertMinsToHrsMins(details.Duration)}
        </BpkText>
        <BpkText tagName="span" textStyle="sm" className={c('ResultsInbound__itinerary-green')}>
          Direct
        </BpkText>
      </BpkText>
    </BpkText>
  </BpkText>
);

InBoundLeg.propTypes = {
  details: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default InBoundLeg;
