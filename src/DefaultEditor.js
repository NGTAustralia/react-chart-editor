import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {PanelMenuWrapper} from './components';
import {
  GraphCreatePanel,
  GraphTransformsPanel,
  StyleLayoutPanel,
  StyleAxesPanel,
  StyleLegendPanel,
  StyleNotesPanel,
  StyleShapesPanel,
  StyleSlidersPanel,
  StyleImagesPanel,
  StyleTracesPanel,
  StyleColorbarsPanel,
  StyleUpdateMenusPanel,
} from './default_panels';

class DefaultEditor extends Component {
  render() {
    const _ = this.context.localize;
    return (
      <PanelMenuWrapper>
        <GraphCreatePanel group={_('Graph')} name={_('Create')} />
        <GraphTransformsPanel group={_('Graph')} name={_('Transforms')} />
        <StyleTracesPanel group={_('Style')} name={_('Traces')} />
        <StyleLayoutPanel group={_('Style')} name={_('Layout')} />
        <StyleNotesPanel group={_('Style')} name={_('Notes')} />
        <StyleAxesPanel group={_('Style')} name={_('Axes')} />
        <StyleLegendPanel group={_('Style')} name={_('Legend')} />
        <StyleColorbarsPanel group={_('Style')} name={_('Color Bars')} />
        <StyleShapesPanel group={_('Style')} name={_('Shapes')} />
        <StyleImagesPanel group={_('Style')} name={_('Images')} />
        <StyleSlidersPanel group={_('Style')} name={_('Sliders')} />
        <StyleUpdateMenusPanel group={_('Style')} name={_('Menus')} />
        {this.props.children ? this.props.children : null}
      </PanelMenuWrapper>
    );
  }
}

DefaultEditor.propTypes = {
  children: PropTypes.node,
};

DefaultEditor.contextTypes = {
  localize: PropTypes.func,
};

export default DefaultEditor;
