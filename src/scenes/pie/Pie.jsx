import { Box } from '@mui/material';
import React from 'react';
import Header from '../../components/Header';
import PiChart from '../../components/PiChart';

const Pie = () => {
  return (
    <Box m="20">
      <Header
        title={'Pie Chart'}
        subtitle={'Simple Pie chart'}
      />
      <Box height="75dvh">
        <PiChart />
      </Box>
    </Box>
  );
};

export default Pie;
