/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from 'react';
import PropTypes from 'prop-types';

import { StateProvider } from './src/components/providers/Context';

export const wrapRootElement = ({ element }) => (
  <StateProvider>{element}</StateProvider>
);

wrapRootElement.propTypes = {
  element: PropTypes.node.isRequired,
};
