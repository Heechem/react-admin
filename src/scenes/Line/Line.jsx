import { Box } from '@mui/material';
import React from 'react';
import Header from '../../components/Header';
import LineChart from '../../components/LineChart';

const Line = () => {
  return (
    <Box m="20px">
      <Header
        title="Line chart"
        subtitle="Simple line chart"
      />
      <Box height="75dvh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
