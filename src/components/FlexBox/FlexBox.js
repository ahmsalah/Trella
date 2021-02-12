import React from 'react';
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

export default FlexBox;
