import React from 'react';
import PropTypes from 'prop-types';
import logo from 'assets/images/trella-logo-white.png';
import shape4w from 'assets/images/shape-4-w.png';
import shape2w from 'assets/images/shape-2-w.png';
import shape3w from 'assets/images/shape-3-w.png';
import shapehappymanw from 'assets/images/shape-happyman-w.png';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useStyles from './styles';

function Layout({ children }) {
  const classes = useStyles();
  const up600 = useMediaQuery('(min-width:600px)', { noSsr: true });

  return (
    <div className={classes.root}>
      <img src={logo} alt="logo" className={classes.logo} />
      <div className={classes.gradientBG}>
        {up600 && (
          <>
            <img src={shape4w} alt="" />
            <img src={shape4w} alt="" />
            <img src={shape3w} alt="" />
            <img src={shapehappymanw} alt="" />
            <img src={shape2w} alt="" />
          </>
        )}
      </div>

      <div className={classes.contentContainer}>{children}</div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
