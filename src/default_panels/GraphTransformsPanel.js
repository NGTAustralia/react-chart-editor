import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Radio,
  TransformAccordion,
  TraceAccordion,
  DataSelector,
  Dropdown,
  PlotlySection,
} from '../components';
import {connectAggregationToTransform} from '../lib';

const AggregationSection = connectAggregationToTransform(PlotlySection);

export class Aggregations extends Component {
  render() {
    const {fullContainer: {aggregations = []}} = this.context;
    const {localize: _} = this.context;
    if (aggregations.length === 0) {
      return null;
    }

    return aggregations.map(({target}, i) => (
      <AggregationSection show key={i} aggregationIndex={i}>
        <Dropdown
          attr="func"
          label={target}
          options={[
            {label: _('Count'), value: 'count'},
            {label: _('Sum'), value: 'sum'},
            {label: _('Average'), value: 'avg'},
            {label: _('Median'), value: 'median'},
            {label: _('Mode'), value: 'mode'},
            {label: _('RMS'), value: 'rms'},
            {label: _('Standard Deviation'), value: 'stddev'},
            {label: _('Min'), value: 'min'},
            {label: _('Max'), value: 'max'},
            {label: _('First'), value: 'first'},
            {label: _('Last'), value: 'last'},
          ]}
          clearable={false}
        />
      </AggregationSection>
    ));
  }
}

Aggregations.contextTypes = {
  fullContainer: PropTypes.object,
  localize: PropTypes.func,
};

const GraphTransformsPanel = (props, {localize: _}) => {
  return (
    <TraceAccordion>
      <TransformAccordion>
        <Radio
          attr="enabled"
          options={[
            {label: _('Enabled'), value: true},
            {label: _('Disabled'), value: false},
          ]}
        />

        <DataSelector label={_('By')} attr="groups" />

        <Aggregations />
      </TransformAccordion>
    </TraceAccordion>
  );
};

GraphTransformsPanel.contextTypes = {
  localize: PropTypes.func,
};

export default GraphTransformsPanel;
