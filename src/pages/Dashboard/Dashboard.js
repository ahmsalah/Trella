import React from 'react';
import useStyles from './styles';

function Dashboard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Weeeeee!</h1>
    </div>
  );
}

export default Dashboard;
