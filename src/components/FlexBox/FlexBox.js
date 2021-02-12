import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';

function FlexBox({ children, row, wrap, ai, jc, ...more }) {
  return (
    <Box
      display="flex"
      alignItems={ai}
      justifyContent={jc}
      flexDirection={row ? 'row' : 'column'}
      flexWrap={wrap ? 'wrap' : 'nowrap'}
      {...more}
    >
      {children}
    </Box>
  );
}

FlexBox.defaultProps = {
  ai: 'stretch',
  jc: 'flex-start',
};

FlexBox.propTypes = {
  children: PropTypes.node.isRequired,
  ai: PropTypes.string,
  jc: PropTypes.string,
  row: PropTypes.bool,
  wrap: PropTypes.bool,
};

export default FlexBox;
